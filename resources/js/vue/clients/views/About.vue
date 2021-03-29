<template>
    <div class="section container">
        <h1>Acerca de mí...</h1>
        <div class="description">
            PRESENTACIÓN {{ getSettingByName( settings, 'profession') }} {{ getSettingByName( settings, 'web_name') }} <br><br>

            <div id="about_text" v-html="getSettingByName( settings, 'about')"></div>
        </div>
    </div>
</template>

<script>
    import mixins from '../mixins';

    export default {
        mixins: [ mixins ]
    }
</script>