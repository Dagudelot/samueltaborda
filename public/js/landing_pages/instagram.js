var posts_images_elements = document.querySelectorAll('instagram_posts > .post > img');
var posts_titles_elements = document.querySelectorAll('instagram_posts > .post > post_title'); 
var posts_dates_elements = document.querySelectorAll('instagram_posts > .post > post_date');
var posts_tags_elements = document.querySelectorAll('instagram_posts > .post > post_tags');

/*
fetch("https://instagram9.p.rapidapi.com/api/instagram?kullaniciadi=psicosamy&lang=en", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "instagram9.p.rapidapi.com",
		"x-rapidapi-key": "848a6201a0msh86d26eb7b0bd870p1f1e8ajsn6ecb6d88b929"
	}
})
.then(response => response.json())
.then(res => {
    // Filter posts with #psicosamy
    var posts = res.posts.filter(post => post.text.includes('#psicosamy'));

    
    for(var i = 0; i < posts.length; i++){
        console.log( posts[i].attachments );
        posts_images_elements[i].src = `${posts[i].attachments.link}`
    }
})
.catch(err => {
	console.log(err);
});
*/