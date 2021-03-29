import mixins from '../mixins';

export default {
    namespaced: true,
    state: {
        instagram_posts: [],
        api_key: null,
        api_host: null
    },
    getters: {
    },
    mutations: {
        SET_INSTAGRAM_POSTS(state, instagram_posts) {
            state.instagram_posts = instagram_posts;
        }
    },
    actions: {
        getInstagramPosts( state, settings ) {

            const host = mixins.methods.getSettingByName( settings, "x_rapidapi_host" );
            const key = mixins.methods.getSettingByName( settings, "x_rapidapi_key" );
            const instagram_user_id = mixins.methods.getSettingByName( settings, "instagram_user_id" );
            const max_instagram_posts = mixins.methods.getSettingByName( settings, "max_instagram_posts" );

            fetch(`https://${host}/account-medias?userid=${instagram_user_id}&first=${max_instagram_posts}`, {
                "method": "GET",
                "headers": {
                    "x-rapidapi-key": key,
                    "x-rapidapi-host": host
                }
            })
            .then(response => response.json())
            .then(res => {

                var ig_posts = res.edges.filter(x => !x.node.is_video);
                const posts = mixins.methods.formatInstagramPosts( ig_posts );               
                localStorage.setItem('instagramPosts', JSON.stringify( posts ));
                state.commit('SET_INSTAGRAM_POSTS', posts);
            })
            .catch(err => {
                var savedPosts = localStorage.getItem('instagramPosts');
                state.commit('SET_INSTAGRAM_POSTS', JSON.parse( savedPosts ));
            });
        },
    }
}