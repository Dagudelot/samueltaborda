<template>
    <div>
        <!-- Social Aside -->
        <a target="_blank" href="https://www.instagram.com/psicosamy/" class="tooltip float_left">
            <span class="tooltiptext">@psicosamy</span>
            <img src="/images/icons/instagram.svg" alt="instagram" width="30"> 
        </a>
        <a target="_blank" href="https://www.youtube.com/channel/UC_o39k-Z4LFcKJPs0s8H5wg" class="tooltip float_left">
            <span class="tooltiptext">YouTube</span>
            <img src="/images/icons/youtube.svg" alt="youtube" width="30">
        </a>
        <!-- /Social Aside -->

        <!-- Header -->
        <div class="contenedor">
            <div class="fixed_bar" id="header_div">
                <router-link id="logo" :to="{ name : 'home' }">
                    <img src="/images/Samuel Taborda Logo.png" alt="Samuel Taborda Logo">
                </router-link>
                <div id="nav">
                    <div class="nav_item">
                        <img src="/images/icons/me.svg" alt="home" width="20">
                        <router-link :to="{ name : 'about' }" class="animated">Acerca de mí</router-link>
                    </div>
                    <div class="nav_item">
                        <img src="/images/icons/contact.svg" alt="home" width="20">
                        <router-link :to="{ name : 'contact' }" class="animated">Contacto</router-link>
                    </div>
                    <div class="nav_item">
                        <img src="/images/icons/blog.svg" alt="home" width="20">
                        <router-link :to="{ name : 'blog' }" class="button outline-button" id="blog_button">Blog</router-link>
                    </div>
                </div>
            </div>
        </div>
        <!-- /Header -->

        <!-- Main Section -->
        <router-view></router-view>
        <!-- Main Section -->

        <!-- Footer -->
        <div class="contenedor">
            <div class="fixed_bar" id="footer">
                <div id="copyright">
                    2020 - Todos los derechos reservados.
                </div>
                <div id="developer">
                    Desarrollado por <strong> <a target="_blank" href="https://wa.me/573005954214">Daniel Agudelo</a> </strong>
                </div>
                <div id="social">
                    <a target="_blank" href="https://www.instagram.com/psicosamy/" class="tooltip">
                        <span class="tooltiptext">@psicosamy</span>
                        <img src="/images/icons/instagram.svg" alt="instagram" width="30"> 
                    </a>
                    <a target="_blank" href="https://www.youtube.com/channel/UC_o39k-Z4LFcKJPs0s8H5wg" class="tooltip">
                        <span class="tooltiptext">YouTube</span>
                        <img src="/images/icons/youtube.svg" alt="youtube" width="30">
                    </a>
                </div>
            </div>
        </div>
        <!-- /Footer -->
    </div>
</template>

<script>
    export default {
        mounted(){
        }
    }
</script>