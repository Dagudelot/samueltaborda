<template>
    <div>
        <!-- Welcome Container -->
        <div class="contenedor section" id="welcome_section">
            <div id="main_title_container">
                <h1>Samuel Taborda</h1>
                <h2 id="subtitle">Psicólogo Cognitivo Conductual</h2>
                <div id="main_description">
                    <span>Te brindamos acompañamiento psicológico online para llegar hasta la comodidad de tu casa.</span>
                </div>
                <div class="button animated pulse" id="cta" @click="triggerCTA()">
                    <a>AGENDAR CITA</a>
                </div>
            </div>
            <div id="main_photo">
                <img src="/images/Main Image.jpeg" alt="samuel_taborda_image">
            </div>
        </div>
        <!-- /Welcome Container -->

        <!-- Latest Posts Container -->
        <div class="contenedor section" id="latest_posts_section">
            <div class="section_title">
                Últimas publicaciones
            </div>
            <div class="description">
                &#128512; En mi blog, estoy siempre activo publicando sobre diferentes temas de interés y actualidad. ¡Léelo!
            </div>
            <div class="overflow-x">
                <div id="latest_posts">
                    <div class="review_posts"
                    v-for="(post, index) of blog_posts"
                    :key="index"
                    >
                        <blog-post-card
                        :post="post"
                        ></blog-post-card>
                    </div>
                </div>
            </div>

            <router-link :to="{ name : 'blog' }">
                <div class="button outline-button">
                    Ver más &#128073;
                </div>
            </router-link>
        </div>
        <!-- /Latest Posts Container -->

        <!-- Latest Tests Container -->
        <div class="contenedor section" v-if="tests.length > 0">
            <div class="section_title">
                Tests
            </div>
            <div class="description">
                &#128512; Tests psicológicos para que analices tus conductas. ¡Pruébalo!
            </div>
            <div class="overflow-x">
                <div id="latest_tests">
                    <div
                    v-for="(test, index) of tests"
                    :key="index"
                    >
                        <test-card
                        :test="test"
                        ></test-card>
                    </div>
                </div>
            </div>

            <!--<router-link :to="{ name : 'blog' }">
                <div class="button outline-button">
                    Ver más &#128073;
                </div>
            </router-link>-->
        </div>
        <!-- /Latest Tests Container -->

        <!-- Latest Posts (Instagram) Container -->
        <div class="contenedor section" id="instagram_posts_section">
            <div class="section_title">
                <img src="/images/icons/instagram.svg" alt="instagram" width="30">
                Instagram
            </div>
            <div class="description">
                &#128512; Me puedes seguir en <a target="_blank" href="https://instagram.com/psicosamy">@psicosamy</a>, donde estoy siempre activo publicando mucho contenido de tu interés.
            </div>
            <div class="overflow-x">
                <div id="instagram_posts">
                    <instagram-post-card
                    v-for="(post, index) of filteredInstagramPosts"
                    :key="index"
                    :post="post"
                    ></instagram-post-card>
                </div>
            </div>
        </div>
        <!-- /Latest Posts (Instagram) Container -->

        <!-- Latest Posts (Twitter) Container -->
        <div class="contenedor section">
            <div class="section_title">
                <img src="/images/icons/twitter.svg" alt="twitter" width="30">
                Twitter
            </div>
            <div class="description">
                &#128512; Me puedes seguir en <a target="_blank" href="https://twitter.com/samueltabordari">@psicosamy</a>, donde estoy siempre activo publicando mucho contenido de tu interés.
            </div>
            <div id="twitter-timeline">
                <a class="twitter-timeline" data-height="1000" data-theme="dark" href="https://twitter.com/samueltabordari?ref_src=twsrc%5Etfw">Tweets de Samuel Taborda</a>
            </div>
        </div>
        <!-- /Latest Posts (Twitter) Container -->

        <!-- Services -->
        <div class="section" id="services_section">
            <div class="section_title">
                Servicios
            </div>
            <div class="description">
                &#127992; Lista de los servicios que presto. Dale click a uno de ellos si estás interesad@ en saber más
            </div>
            <div id="services">
                <service
                v-for="(service, index) of services"
                :key="index"
                :service="service"
                ></service>
            </div>
        </div>
        <!-- /Services -->

        <!-- Map -->
        <div class="contenedor section">
            <div class="section_title">
                <img src="/images/icons/map-marker.svg" alt="map-marker" width="30">
                Ubicación
            </div>
            <div class="big_description">
                Tel: 230-90-88
                <div class="description">
                    Carrera 76 #49-11, Medellín, Colombia
                </div>
            </div>
            <location></location>
        </div>
        <!-- Map -->
    </div>
</template>

<script>
    import { mapState, mapActions } from 'vuex';
    import mixins from '../mixins';

    export default {
        mixins: [ mixins ],
        mounted(){

            this.getBlogPosts({
                url: '/studio/api/posts/',
                limit: 6
            });
            this.getInstagramPosts();
            this.getServices();
            this.getAllTests();

            setTimeout(() => {
                this.filteredInstagramPosts = this.filterPosts( this.instagram_posts, '#psicosamy' );
            }, 3000);
        },
        data(){
            return {
                filteredInstagramPosts : []
            }
        },
        computed: {
            ...mapState( 'blogStore', [ 'blog_posts' ] ),
            ...mapState( 'instagramStore', [ 'instagram_posts' ] ),
            ...mapState( 'servicesStore', [ 'services' ] ),
            ...mapState( 'testsStore', [ 'tests' ] ),
        },
        methods: {
            ...mapActions( 'blogStore', [ 'getBlogPosts' ] ),
            ...mapActions( 'instagramStore', [ 'getInstagramPosts' ] ),
            ...mapActions( 'servicesStore', [ 'getServices' ] ),
            ...mapActions( 'testsStore', [ 'getAllTests' ] ),
            triggerCTA(){
                const whatsappMessage = "Hola Samuel. Estoy interesad@ en tus servicios. ¿Podemos agendar una cita?";
                window.open(`https://api.whatsapp.com/send?phone=573006205507&text=${whatsappMessage}`);
            }
        }
    }
</script>