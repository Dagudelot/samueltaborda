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
        getBlogPosts( state, data ) {

            return fetch(`${data.url}${data.limit}`, {
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

                    return res.posts;
                }
            })
            .catch(err => {
                var savedPosts = localStorage.getItem('blogPosts');
                state.commit('SET_BLOG_POSTS', JSON.parse(savedPosts));
            });
        },
        searchPosts( state, payload ) {

            return fetch(`/studio/api/search/${payload}`, {
                "method": "GET"
            })
            .then(response => {
                if( response.ok ) return response.json()
            })
            .then(res => {
                return res;
            })
            .catch(err => {
                var savedPosts = localStorage.getItem('blogPosts');
                state.commit('SET_BLOG_POSTS', JSON.parse(savedPosts));
            });
        },
        getTopics( state, data ) {

            return fetch(`${data.url}`, {
                "method": "GET"
            })
            .then(response => {
                if( response.ok ) return response.json()
            })
            .then(res => {
                if(res.topics) return res.topics;
            })
            .catch(err => {
                var savedPosts = localStorage.getItem('blogPosts');
                state.commit('SET_BLOG_POSTS', JSON.parse(savedPosts));
            });
        },
        findPost( state, post ){

            fetch(`/studio/api/posts/${post.user_id}/${post.slug}`, {
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
