// Settings
require( './bootstrap' );
window.Vue = require( 'vue' );

// Imports
import Vue              from 'vue';
import Vuex             from 'vuex';
import VueRouter        from 'vue-router';
import routes           from './vue/routes';
import storeData        from './vue/store';
//import '@mdi/font/css/materialdesignicons.css';

// Vue Use
Vue.use( VueRouter );
Vue.use( Vuex );

// Components
Vue.component('post-card', require('./vue/components/PostCard.vue').default);
Vue.component('under-construction', require('./vue/components/UnderConstruction.vue').default);
Vue.component('related-post', require('./vue/components/RelatedPost.vue').default);

Vue.component('app', require('./vue/views/client_pages/layouts/App.vue').default);

const router = new VueRouter( routes );
const store = new Vuex.Store( storeData );

const app = new Vue({
    el: '#app',
    router,
    store
});
