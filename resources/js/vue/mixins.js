var mixins = {
    data(){
        return {
            months_arr : ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre']
        }
    },
    methods: {
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
        }
    }
}

export default mixins;