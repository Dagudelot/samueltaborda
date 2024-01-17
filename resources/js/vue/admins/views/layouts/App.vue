<template>
    <div>
        <!-- Social Aside -->
        <a target="_blank" href="https://www.instagram.com/samuelalbertotabordarios/" class="social_tooltip float_left">
            <span class="tooltiptext">@samuelalbertotabordarios</span>
            <img src="/images/icons/instagram.svg" alt="instagram" width="30"> 
        </a>
        <a target="_blank" href="https://www.youtube.com/channel/UC_o39k-Z4LFcKJPs0s8H5wg" class="social_tooltip float_left">
            <span class="tooltiptext">YouTube</span>
            <img src="/images/icons/youtube.svg" alt="youtube" width="30">
        </a>
        <!-- /Social Aside -->

        <!-- Header -->
        <div class="contenedor">
            <div class="fixed_bar" id="header_div">
                <a id="logo" href="/">
                    <img src="/images/Samuel Taborda Logo.png" alt="Samuel Taborda Logo">
                </a>
            </div>
        </div>
        <!-- /Header -->

        <!-- Main Section -->
        <router-view></router-view>
        <!-- Main Section -->

        <div class="contenedor">
            Íconos hechos por <a href="https://www.flaticon.com/authors/those-icons" title="Those Icons">Those Icons</a> de <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
        </div>

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
                    <a target="_blank" href="https://www.instagram.com/samuelalbertotabordarios/" class="social_tooltip">
                        <span class="tooltiptext">@samuelalbertotabordarios</span>
                        <img src="/images/icons/instagram.svg" alt="instagram" width="30"> 
                    </a>
                    <a target="_blank" href="https://www.youtube.com/channel/UC_o39k-Z4LFcKJPs0s8H5wg" class="social_tooltip">
                        <span class="tooltiptext">YouTube</span>
                        <img src="/images/icons/youtube.svg" alt="youtube" width="30">
                    </a>
                </div>
            </div>
        </div>
        <!-- /Footer -->
    </div>
</template>