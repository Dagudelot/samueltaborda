// Settings
require( './bootstrap' );
window.Vue = require( 'vue' );

// Imports
import Vue                  from 'vue';
import Vuex                 from 'vuex';
import VueRouter            from 'vue-router';
import VueMq                from 'vue-mq';
import Vuetify              from 'vuetify'
Vue.use( VueMq, {
    breakpoints: {
        sm: 768,
        md: 1250,
        lg: Infinity,
    }
});
import routes               from './vue/routes';
import storeData            from './vue/store';
import '@mdi/font/css/materialdesignicons.css';

// Vue Use
Vue.use( VueRouter );
Vue.use( Vuetify );
Vue.use( Vuex );

// Components
Vue.component('blog-post-card', require('./vue/components/BlogPostCard.vue').default);
Vue.component('instagram-post-card', require('./vue/components/InstagramPostCard.vue').default);
Vue.component('under-construction', require('./vue/components/UnderConstruction.vue').default);
Vue.component('related-post', require('./vue/components/RelatedPost.vue').default);
Vue.component('location', require('./vue/components/Map.vue').default);
Vue.component('service', require('./vue/components/Service.vue').default);
Vue.component('dashboard-option', require('./vue/components/DashboardOption.vue').default);
Vue.component('test-card', require('./vue/components/TestCard.vue').default);

Vue.component('app', require('./vue/views/layouts/App.vue').default);

const router = new VueRouter( routes );
const store = new Vuex.Store( storeData );

const app = new Vue({
    el: '#app',
    router,
    store,
    vuetify: new Vuetify({
        icons: {
            iconfont: 'mdi'
        },
    })
});
