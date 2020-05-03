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
                <div class="button animated pulse" id="cta">
                    <a target="_blank" href="https://wa.me/573006205507">AGENDAR CITA</a>
                </div>
            </div>
            <div id="main_photo">
                <img src="/images/Main Image.jpeg" alt="samuel_taborda_image">
            </div>
        </div>
        <!-- /Welcome Container -->

        <!-- Latest Posts Container -->
        <div class="contenedor section" id="latest_posts_section">
            <div class="title">
                Últimas publicaciones
            </div>
            <div class="description">
                &#128512; Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit ipsam ea neque vel fuga earum obcaecati dignissimos quae. Qui iusto ratione facere hic iure quaerat ducimus perspiciatis porro corrupti odio.
            </div>
            <div class="overflow-x">
                <router-link :to="{ name : 'post', params : { 'post_id' : 1 } }" id="latest_posts">
                    <post-card 
                    v-for="(post, index) of blog_posts"
                    :key="index"
                    :post="post"
                    ></post-card>
                </router-link>
            </div>

            <router-link :to="{ name : 'blog' }">
                <div class="button outline-button">
                    Ver más &#128073;
                </div>
            </router-link>
        </div>
        <!-- /Latest Posts Container -->

        <!-- Latest Posts (Instagram) Container -->
        <div class="contenedor section" id="instagram_posts_section">
            <div class="title">
                <img src="/icons/instagram.svg" alt="instagram" width="30"> 
                Instagram
            </div>
            <div class="description">
                &#128512; Me puedes seguir en <a target="_blank" href="https://instagram.com/psicosamy">@psicosamy</a>, donde estoy siempre activo publicando mucho contenido de tu interés.
            </div>
            <div class="overflow-x">
                <div id="instagram_posts">
                    <post-card 
                    v-for="(post, index) of filteredInstagramPosts"
                    :key="index"
                    :post="post"
                    ></post-card>
                </div>
            </div>
        </div>
        <!-- /Latest Posts (Instagram) Container -->

        <!-- Services -->
        <div class="section" id="services_section">
            <div class="title">
                Servicios
            </div>
            <div class="description">
                &#127992; Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit ipsam ea neque vel fuga earum obcaecati dignissimos quae. Qui iusto ratione facere hic iure quaerat ducimus perspiciatis porro corrupti odio.
            </div>
            <div id="services">
                <div class="service">
                    <div class="icon">
                        <img src="/icons/undraw_celebration_0jvk.svg" alt="icon" width="100">
                    </div>
                    <div class="service_title">
                        Terapia Infantil y Juvenil
                    </div>
                    <div class="service_description">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam aliquid iste ab esse, deserunt enim sit perferendis repudiandae expedita dicta quasi illum ratione quia minus impedit accusantium ex ut quibusdam?
                    </div>
                </div>
                <div class="service">
                    <div class="icon">
                        <img src="/icons/undraw_pure_love_ay8a.svg" alt="icon" width="100">
                    </div>
                    <div class="service_title">
                        Terapia de Pareja
                    </div>
                    <div class="service_description">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam aliquid iste ab esse, deserunt enim sit perferendis repudiandae expedita dicta quasi illum ratione quia minus impedit accusantium ex ut quibusdam?
                    </div>
                </div>
                <div class="service">
                    <div class="icon">
                        <img src="/icons/undraw_conference_speaker_6nt7.svg" alt="icon" width="100">
                    </div>
                    <div class="service_title">
                        Charlas educativas
                    </div>
                    <div class="service_description">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam aliquid iste ab esse, deserunt enim sit perferendis repudiandae expedita dicta quasi illum ratione quia minus impedit accusantium ex ut quibusdam?
                    </div>
                </div>
                <div class="service">
                    <div class="icon">
                        <img src="/icons/undraw_heartbroken_cble.svg" alt="icon" width="100">
                    </div>
                    <div class="service_title">
                        Orientación vocacional
                    </div>
                    <div class="service_description">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam aliquid iste ab esse, deserunt enim sit perferendis repudiandae expedita dicta quasi illum ratione quia minus impedit accusantium ex ut quibusdam?
                    </div>
                </div>
                <div class="service">
                    <div class="icon">
                        <img src="/icons/undraw_friendship_mni7.svg" alt="icon" width="100">
                    </div>
                    <div class="service_title">
                        Peritazgos jurídicos
                    </div>
                    <div class="service_description">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam aliquid iste ab esse, deserunt enim sit perferendis repudiandae expedita dicta quasi illum ratione quia minus impedit accusantium ex ut quibusdam?
                    </div>
                </div>
                <div class="service">
                    <div class="icon">
                        <img src="/icons/undraw_i_can_fly_7egl.svg" alt="icon" width="100">
                    </div>
                    <div class="service_title">
                        Atención a Trastornos emocionales
                    </div>
                    <div class="service_description">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam aliquid iste ab esse, deserunt enim sit perferendis repudiandae expedita dicta quasi illum ratione quia minus impedit accusantium ex ut quibusdam?
                    </div>
                </div>
                <div class="service">
                    <div class="icon">
                        <img src="/icons/undraw_smiley_face_lmgm.svg" alt="icon" width="100">
                    </div>
                    <div class="service_title">
                        Ansiedad
                    </div>
                    <div class="service_description">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam aliquid iste ab esse, deserunt enim sit perferendis repudiandae expedita dicta quasi illum ratione quia minus impedit accusantium ex ut quibusdam?
                    </div>
                </div>
                <div class="service">
                    <div class="icon">
                        <img src="/icons/undraw_young_and_happy_hfpe.svg" alt="icon" width="100">
                    </div>
                    <div class="service_title">
                        Depresión
                    </div>
                    <div class="service_description">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam aliquid iste ab esse, deserunt enim sit perferendis repudiandae expedita dicta quasi illum ratione quia minus impedit accusantium ex ut quibusdam?
                    </div>
                </div>
                <div class="service">
                    <div class="icon">
                        <img src="/icons/undraw_friendship_mni7.svg" alt="icon" width="100">
                    </div>
                    <div class="service_title">
                        Tratamiento en adicciones
                    </div>
                    <div class="service_description">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam aliquid iste ab esse, deserunt enim sit perferendis repudiandae expedita dicta quasi illum ratione quia minus impedit accusantium ex ut quibusdam?
                    </div>
                </div>
            </div>
        </div>
        <!-- /Services -->
    </div>
</template>

<script>
    import { mapState, mapActions } from 'vuex';
    import mixins from '../../mixins';

    export default {
        mixins: [ mixins ],
        mounted(){

            this.getInstagramPosts();
            
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
            ...mapState( 'instagramStore', [ 'instagram_posts' ] )
        },
        methods: {
            ...mapActions( 'instagramStore', [ 'getInstagramPosts' ] ),
        }
    }
</script>