import { mapState } from "vuex";

var mixins = {
    data(){
        return {
            months_arr : ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre']
        }
    },
    computed: {
        ...mapState([ 'settings' ])
    },
    methods: {
        triggerCTA(){
            const whatsappMessage = "Hola Samuel. Estoy interesad@ en tus servicios. ¿Podemos agendar una cita?";
            window.open(`https://api.whatsapp.com/send?phone=${this.getSettingByName( this.settings, 'whatsapp' )}&text=${whatsappMessage}`);
        },
        filterPosts( posts, tag, limit = 6 ){

            var filteredPosts = [];

            if( posts && posts.length > 0 ){
                // Filter posts with #psicosamy
                posts.filter( post => {
                    if( post.text != null ) post.text.includes( tag )
                });
                // Limit number of posts
                filteredPosts = posts.slice(0, limit);
            }

            return filteredPosts;
        },
        convertTimestamp( timestamp ){
            var date = new Date(1000*timestamp);
             // Year
            var year = date.getFullYear();
            // Month
            var month = this.months_arr[date.getMonth()];
            // Day
            var day = date.getDate();

            return `${month} ${day}, ${year}`;
        },
        convertPubishedAt( published_at ){

            var year = published_at.substr(0, 4);
            // Month
            var month = this.months_arr[ parseInt( published_at.substr(5, 2) - 1 ) ];
            // Day
            var day = published_at.substr(8, 2);

            return `${month} ${day}, ${year}`;
        },
        jumpToTop(){
            scroll(0,0);
        },
        formatInstagramPosts( ig_posts ){
            var posts = [];
            
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

            return posts;
        },
        getSettingByName( settings, name ){
            return settings.filter(x => x.name == name)[0].value;                    
        }
    }
}

export default mixins;