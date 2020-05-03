<template>
    <div class="post">
        <div class="post_header">
            <h1>Fortalecer Relaciones de Parejas</h1>
            <img src="/images/Blog/2.jpg" alt="post_header">
        </div>
        <div class="section contenedor">
            <div class="post_container">
                <div class="post_information">
                    <div class="title">
                        Publicado por:
                    </div>
                    <span>@psicosamy</span>
                    <div class="title">
                        Categoría:
                    </div>
                    <span>Parejas</span>
                    <div class="title">
                        Fecha de publicación:
                    </div>
                    <span>Abril 20. 2020</span>
                    <div class="title">
                        Etiquetas:
                    </div>
                    <div class="post_tags">
                        <ul>
                            <li>#Relaciones</li>
                            <li>#Parejas</li>
                            <li>#Relaciones</li>
                        </ul>
                    </div>
                </div>
                <div class="post_content">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam impedit maiores ipsa sequi placeat sed! Ducimus voluptas aliquid vero itaque dolores facere rem ratione? Ducimus quidem quasi optio distinctio soluta.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam impedit maiores ipsa sequi placeat sed! Ducimus voluptas aliquid vero itaque dolores facere rem ratione? Ducimus quidem quasi optio distinctio soluta.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam impedit maiores ipsa sequi placeat sed! Ducimus voluptas aliquid vero itaque dolores facere rem ratione? Ducimus quidem quasi optio distinctio soluta.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam impedit maiores ipsa sequi placeat sed! Ducimus voluptas aliquid vero itaque dolores facere rem ratione? Ducimus quidem quasi optio distinctio soluta.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam impedit maiores ipsa sequi placeat sed! Ducimus voluptas aliquid vero itaque dolores facere rem ratione? Ducimus quidem quasi optio distinctio soluta.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam impedit maiores ipsa sequi placeat sed! Ducimus voluptas aliquid vero itaque dolores facere rem ratione? Ducimus quidem quasi optio distinctio soluta.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam impedit maiores ipsa sequi placeat sed! Ducimus voluptas aliquid vero itaque dolores facere rem ratione? Ducimus quidem quasi optio distinctio soluta.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam impedit maiores ipsa sequi placeat sed! Ducimus voluptas aliquid vero itaque dolores facere rem ratione? Ducimus quidem quasi optio distinctio soluta.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam impedit maiores ipsa sequi placeat sed! Ducimus voluptas aliquid vero itaque dolores facere rem ratione? Ducimus quidem quasi optio distinctio soluta.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam impedit maiores ipsa sequi placeat sed! Ducimus voluptas aliquid vero itaque dolores facere rem ratione? Ducimus quidem quasi optio distinctio soluta.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam impedit maiores ipsa sequi placeat sed! Ducimus voluptas aliquid vero itaque dolores facere rem ratione? Ducimus quidem quasi optio distinctio soluta.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam impedit maiores ipsa sequi placeat sed! Ducimus voluptas aliquid vero itaque dolores facere rem ratione? Ducimus quidem quasi optio distinctio soluta.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam impedit maiores ipsa sequi placeat sed! Ducimus voluptas aliquid vero itaque dolores facere rem ratione? Ducimus quidem quasi optio distinctio soluta.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam impedit maiores ipsa sequi placeat sed! Ducimus voluptas aliquid vero itaque dolores facere rem ratione? Ducimus quidem quasi optio distinctio soluta.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam impedit maiores ipsa sequi placeat sed! Ducimus voluptas aliquid vero itaque dolores facere rem ratione? Ducimus quidem quasi optio distinctio soluta.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam impedit maiores ipsa sequi placeat sed! Ducimus voluptas aliquid vero itaque dolores facere rem ratione? Ducimus quidem quasi optio distinctio soluta.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam impedit maiores ipsa sequi placeat sed! Ducimus voluptas aliquid vero itaque dolores facere rem ratione? Ducimus quidem quasi optio distinctio soluta.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam impedit maiores ipsa sequi placeat sed! Ducimus voluptas aliquid vero itaque dolores facere rem ratione? Ducimus quidem quasi optio distinctio soluta.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam impedit maiores ipsa sequi placeat sed! Ducimus voluptas aliquid vero itaque dolores facere rem ratione? Ducimus quidem quasi optio distinctio soluta.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam impedit maiores ipsa sequi placeat sed! Ducimus voluptas aliquid vero itaque dolores facere rem ratione? Ducimus quidem quasi optio distinctio soluta.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam impedit maiores ipsa sequi placeat sed! Ducimus voluptas aliquid vero itaque dolores facere rem ratione? Ducimus quidem quasi optio distinctio soluta.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam impedit maiores ipsa sequi placeat sed! Ducimus voluptas aliquid vero itaque dolores facere rem ratione? Ducimus quidem quasi optio distinctio soluta.
                </div>
            </div>
        </div>

        <applause-button id="applause_button" 
        multiclap="true" 
        color="#145a7e"
        ></applause-button>

        <!-- Related Posts -->
        <div class="related_posts_section">
            <div class="title">
                Quizá te interese...
            </div>
            <div class="related_posts">
                <router-link 
                :to="{ name : 'post', params: { 'post_id' : 2 } }" 
                class="related_post"
                v-for="(post, index) of relatedPosts"
                :key="index"
                :post="post">
                    <related-post>
                    </related-post>
                </router-link>
            </div>
        </div>
        <!-- /Related Posts -->
    </div>
</template>

<script>
    export default {
        mounted(){

        },
        data(){
            return {
                relatedPosts : [1, 2, 3, 4, 5, 6, 7, 8]
            }
        }
    }
</script>