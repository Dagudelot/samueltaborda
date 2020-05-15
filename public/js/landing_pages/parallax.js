setTimeout(() => {
    var images = document.querySelectorAll('.post_card > img');
    var move = 0, move2 = 0;

    images.forEach(image => {

        image.addEventListener('mousemove', e => {
        
            var img = e.target;
            var post_information = img.parentNode.children[1];
        
            move = e.clientY * 0.005 + 4;
            move2 = e.clientY * 0.01;

            img.style.transform = `translateY(-${move}%)`;
            post_information.style.transform = `translateY(${move2}%)`;
        });
    });
}, 4000);