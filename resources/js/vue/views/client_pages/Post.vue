<template>
    <div v-if=" selected_post == null ">
        Cargando...
    </div>
    <div class="post" v-else>
        <div class="post_header">
            <h1> {{ selected_post.title }} </h1>
            <img :src=" selected_post.featured_image " alt="post_header">
        </div>
        <div class="section contenedor">
            <div class="post_container">
                <div class="post_information">
                    <div class="title">
                        Publicado por:
                    </div>
                    <span> {{ selected_post.user_meta.username }} </span>
                    <div class="title">
                        Categoría:
                    </div>
                    <span> {{ selected_post.topic[0].name }} </span>
                    <div class="title">
                        Fecha de publicación:
                    </div>
                    <span> {{ convertPubishedAt( selected_post.published_at ) }} </span>
                    <div class="title">
                        Etiquetas:
                    </div>
                    <div class="post_tags">
                        <ul>
                            <li
                            v-for="(tag, index) of selected_post.tags"
                            :key="index"
                            > {{ tag.name }} </li>
                        </ul>
                    </div>
                </div>
                <div class="post_content" v-html=" selected_post.body ">
                </div>
            </div>
        </div>

        <applause-button id="applause_button" 
        multiclap="true" 
        color="#145a7e"
        ></applause-button>

        <!-- Related Posts -->
        <div class="related_posts_section" v-if=" related_posts && related_posts.length > 0 ">
            <div class="title">
                Quizá te interese...
            </div>
            <div class="related_posts">
                <router-link 
                :to="{ name : 'post', params: { 'post_id' : post.slug } }" 
                class="related_post"
                v-for="(post, index) of related_posts"
                :key="index">
                    <related-post
                    :post="post">
                    </related-post>
                </router-link>
            </div>
        </div>
        <!-- /Related Posts -->
    </div>
</template>

<script>
    import { mapState, mapActions } from 'vuex';
    import mixins from '../../mixins';

    export default {
        mixins: [ mixins ],
        mounted(){
            var post_id = this.$route.params.post_id;

            this.findPost( post_id );
        },
        data(){
            return {
                dani: ''
            }
        },
        computed: {
            ...mapState( 'blogStore', [ 'selected_post', 'related_posts' ] ),
        },
        methods: {
            ...mapActions( 'blogStore', [ 'findPost' ] )
        }
    }
</script>