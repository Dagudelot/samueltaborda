<template>
    <div>
        <img src="/images/Blog/3.jpg" alt="related_post">
        <div class="post_card_information">
            <div class="psot_card_title">
                {{ post.title }}
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: [ 'post' ]
    }
</script>