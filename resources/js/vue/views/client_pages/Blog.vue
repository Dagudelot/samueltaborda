<template>
    <div class="section container">
        <div id="search_container">
            <img src="/images/icons/search.svg" alt="buscar" id="search_img" width="40">
            <input type="text" id="search_input" v-on:keyup.enter="search" v-model="searchData.payload">
            <span id="search_tip">Presiona enter para buscar</span>
        </div>

        <div id="blog_container">

            <div class="blog_sidebar">
                <div id="blog_categories">
                    <h2>Categorías</h2>
                    <ul id="categories_ul">
                        <li
                        v-for="(topic, index) of topics"
                        :key="index"
                        >
                            <span>{{ topic.name }}</span>
                            <div class="category_count">{{ topic.posts_count }}</div>
                        </li>
                    </ul>
                </div>
            </div>

            <div id="posts_container">
                <!-- Most Read Posts -->
                <div v-if="outstandingPosts.length > 0">
                    <h2>Lo más leído</h2>
                    <div id="outstanding_posts" class="posts_grid">
                        <blog-post-card
                        v-for="(post, index) of outstandingPosts"
                        :key="index"
                        :post="post"
                        ></blog-post-card>
                    </div>
                </div>
                <!-- /Most Read Posts -->

                <br>

                <!-- Most Read Posts -->
                <div v-if="recentPosts.length > 0">
                    <h2>Últimas publicaciones</h2>
                    <div class="posts_grid">
                        <blog-post-card
                        v-for="(post, index) of recentPosts"
                        :key="index"
                        :post="post"
                        ></blog-post-card>
                    </div>
                </div>
                <!-- /Most Read Posts -->

                <!-- Posts By Topics -->
                <div
                v-for="(topic, index) of topics"
                :key="index"
                >
                    <h2>{{ topic.name }}</h2>
                    <div class="posts_grid">
                        <blog-post-card
                        v-for="(post, index2) of topic.posts"
                        :key="index2"
                        :post="post"
                        ></blog-post-card>
                    </div>
                </div>
                <!-- /Posts By Topics -->

                <!-- Searched Posts -->
                <div v-if="searchData.posts">
                    <h2>{{ searchData.payload }}</h2>
                    <div id="outstandingPosts" class="posts_grid">
                        <blog-post-card
                        v-for="(post, index) of searchData.posts"
                        :key="index"
                        :post="post"
                        ></blog-post-card>
                    </div>
                </div>
                <!-- /Searched Posts -->

            </div>
        </div>

    </div>
</template>

<script>
    import { mapState, mapActions } from 'vuex';
    import mixins from '../../mixins';

    export default {
        mixins: [ mixins ],
        mounted(){
            this.importScripts();

            this.getOutstangindPosts();
            this.getRecentPosts();
            this.getPostsByTopics();
        },
        data(){
            return {
                outstandingPosts: [],
                recentPosts: [],
                topics: [],
                searchData : {
                    posts: [],
                    payload: null,
                    searchImg: null,
                    searchInput: null,
                    searchTip: null,
                    tip: "Ej: parejas",
                    tipAuxiliar: "",
                    i: 0,
                    speed: 300
                }
            }
        },
        computed: {
            ...mapState( 'blogStore', [ 'blog_posts', 'selected_post' ] ),
        },
        methods: {
            ...mapActions( 'blogStore', [ 'getBlogPosts', 'getTopics', 'searchPosts' ] ),
            getOutstangindPosts(){
                this.getBlogPosts({
                    url: '/studio/api/posts/',
                    limit: ''
                })
                .then(posts => {
                    this.outstandingPosts = posts;
                });
            },
            getRecentPosts(){
                this.getBlogPosts({
                    url: '/studio/api/posts/',
                    limit: 50
                })
                .then(posts => {
                    this.recentPosts = posts;
                });
            },
            getPostsByTopics(){
                this.getTopics({
                    'url': '/studio/api/topics/',
                })
                .then(topics => {
                    this.topics = topics;
                });
            },
            search(){
                this.searchPosts( this.searchData.payload )
                .then(posts => {
                    this.searchData.posts = posts;
                    this.outstandingPosts = [];
                    this.recentPosts = [];
                    this.topics = [];
                });
            },
            importScripts(){
                this.searchData.searchImg = document.getElementById('search_img'),
                this.searchData.searchInput = document.getElementById('search_input'),
                this.searchData.searchTip = document.getElementById('search_tip'),

                this.searchData.searchImg.addEventListener('click', () => {
                    this.searchData.searchInput.style.width = "50%";
                    this.searchData.searchInput.style.paddingLeft = "50px";
                    this.searchData.searchInput.style.cursor = "text";
                    this.searchData.searchInput.focus();

                    this.typeWriter();
                });

                this.searchData.searchInput.addEventListener('keydown', () => {
                    this.searchData.searchTip.style.visibility = "visible";
                    this.searchData.searchTip.style.opacity = 1;
                });
            },
            typeWriter(){
                if(this.searchData.i < this.searchData.tip.length){
                    this.searchData.tipAuxiliar += this.searchData.tip.charAt(this.searchData.i);
                    this.searchData.searchInput.setAttribute("placeholder", this.searchData.tipAuxiliar + '|');
                    this.searchData.i++;

                    setTimeout(this.typeWriter, this.searchData.speed);
                }                
            }
        }
    }
</script>
