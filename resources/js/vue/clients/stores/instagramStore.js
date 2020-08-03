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

            var posts = [];

            fetch("https://www.instagram.com/psicosamy/?__a=1", {
                "method": "GET"
            })
            .then(response => response.json())
            .then(res => {

                var ig_posts = res.graphql.user.edge_owner_to_timeline_media.edges.filter(post => post.node.__typename == "GraphImage");
                
                ig_posts.forEach(post => {
                    
                    var image = post.node.display_url;
                    var captions = post.node.edge_media_to_caption.edges;
                    var caption = (captions.length > 0) ? post.node.edge_media_to_caption.edges[0].node.text : '';
                    var shortcode = post.node.shortcode;
                    var timestamp = post.node.taken_at_timestamp;

                    posts.push({ 
                        attachments: {
                            'link' : image
                        }, 
                        'text' : caption, 
                        'link' : `https://www.instagram.com/p/${shortcode}`, 
                        timestamp 
                    });
                });

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