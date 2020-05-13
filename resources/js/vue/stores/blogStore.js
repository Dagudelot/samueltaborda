export default {
    namespaced: true,
    state: {
        blog_posts: [],
        selected_post: null,
        related_posts: []
    },
    getters: {
    },
    mutations: {
        SET_BLOG_POSTS( state, blog_posts ){
            state.blog_posts = blog_posts;
        },
        SET_SELECTED_POST( state, post ){
            state.selected_post = post;
        },
        SET_RELATED_POST( state, response ){
            state.related_posts = response.related;
        }
    },
    actions: {
        getBlogPosts( state ) {

            fetch("https://samueltaborda.com/studio/api/posts/", {
                "method": "GET"
            })
            .then(response => {
                if( response.ok ) return response.json()
            })
            .then(res => {
                if( res.posts ){
                    var limited_posts = res.posts.slice(0, 6);
                    localStorage.setItem('blogPosts', JSON.stringify(limited_posts));
                    state.commit('SET_BLOG_POSTS', limited_posts);
                }
            })
            .catch(err => {
                var savedPosts = localStorage.getItem('blogPosts');
                state.commit('SET_BLOG_POSTS', JSON.parse(savedPosts));
            });
        },
        findPost( state, post_id ){

            fetch("https://samueltaborda.com/studio/api/posts/" + post_id, {
                "method": "GET"
            })
            .then(response => {
                if( response.ok ) return response.json()
            })
            .then(res => {
                if( res.post ){
                    state.commit('SET_SELECTED_POST', res.post);
                    state.commit('SET_RELATED_POST', res.related);
                }
            })
            .catch( console.log );
        }
    }
}