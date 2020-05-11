<template>
    <div class="post_card" @click="openInstagramPost()">
        <img :src="post.attachments.link" alt="post1">
        <div class="post_card_information">
            <div class="psot_card_title">
                {{ getPostTitle }}
            </div>
            <div class="post_card_date">
                {{ convertTimestamp( post.timestamp ) }}
            </div>
            <div class="post_card_tags">
                <ul>
                    <li>
                        {{ (post.text != null) ? post.text.split(' ')[0] : '#psicosamy' }}
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    import mixins from '../mixins';

    export default {
        mixins: [ mixins ],
        props: [ 'post' ],
        mounted() {
        },
        computed: {
            getPostTitle(){

                parts = '';

                if( post.text != null ){
                    var parts = this.post.text.split(' ');
                    parts.shift();
                }

                return ( parts instanceof Array )
                ? parts.join(' ')
                : parts;
            }
        },
        methods: {
            openInstagramPost(){
                if( this.post.link ){
                    var tab = window.open( this.post.link, '_blank' );
                    tab.focus();
                }
            }
        }
    }
</script>
