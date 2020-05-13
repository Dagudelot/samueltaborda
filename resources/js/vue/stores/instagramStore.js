export default {
    namespaced: true,
    state: {
        instagram_posts: []
    },
    getters: {
    },
    mutations: {
        SET_INSTAGRAM_POSTS(state, instagram_posts) {
            state.instagram_posts = instagram_posts;
        }
    },
    actions: {
        getInstagramPosts( state ) {

            fetch("https://instagram9.p.rapidapi.com/api/instagram?kullaniciadi=psicosamy&lang=en", {
                "method": "GET",
                "headers": {
                    "x-rapidapi-host": "instagram9.p.rapidapi.com",
                    "x-rapidapi-key": "848a6201a0msh86d26eb7b0bd870p1f1e8ajsn6ecb6d88b929"
                }
            })
            .then(response => response.json())
            .then(res => {
                localStorage.setItem('instagramPosts', JSON.stringify( res.posts ));
                state.commit('SET_INSTAGRAM_POSTS', res.posts);
            })
            .catch(err => {
                var savedPosts = localStorage.getItem('instagramPosts');
                state.commit('SET_INSTAGRAM_POSTS', JSON.parse( savedPosts ));
            });
        },
    }
}