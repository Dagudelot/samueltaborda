<template>
    <div class="post_card" @click="openPost()">
        <img :src="post.featured_image" alt="post1">
        <div class="post_card_information">
            <div class="post_card_title">
                {{ post.title }}
            </div>
            <div class="post_card_date">
                {{ convertPubishedAt( post.published_at ) }}
            </div>
            <div class="post_card_tags">
                <ul>
                    <li>
                        {{ post.read_time }}
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapMutations } from 'vuex';
    import mixins from '../mixins';

    export default {
        mixins: [ mixins ],
        props: [ 'post' ],
        mounted() {
        },
        computed: {
            
        },
        methods: {
            ...mapMutations( 'blogStore', [ 'SET_SELECTED_POST' ]),
            openPost(){
                this.SET_SELECTED_POST( this.post );
                
                this.$router.push({ name: 'post', params: { post_id: this.post.slug }});
            }
        }
    }
</script>
