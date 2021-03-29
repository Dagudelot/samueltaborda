<template>
    <iframe v-if="settings"
    :src=" getSettingByName( settings, 'map_src' ) " 
    width="600" 
    height="450" 
    frameborder="0" 
    style="border:0;" 
    allowfullscreen="true" 
    aria-hidden="false" 
    tabindex="0"
    ></iframe>
</template>

<script>
import { mapState } from 'vuex';
    import mixins from '../mixins';

    export default {
        mixins: [ mixins ],
        computed: {
            ...mapState([ 'settings' ])
        }
    }
</script>