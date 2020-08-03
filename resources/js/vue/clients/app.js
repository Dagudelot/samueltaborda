// Settings
require( '../../bootstrap' );
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
import routes               from './routes';
import storeData            from './store';
import '@mdi/font/css/materialdesignicons.css';

// Vue Use
Vue.use( VueRouter );
Vue.use( Vuetify );
Vue.use( Vuex );

// Components
Vue.component('blog-post-card', require('./components/BlogPostCard.vue').default);
Vue.component('instagram-post-card', require('./components/InstagramPostCard.vue').default);
Vue.component('under-construction', require('./components/UnderConstruction.vue').default);
Vue.component('related-post', require('./components/RelatedPost.vue').default);
Vue.component('location', require('./components/Map.vue').default);
Vue.component('service', require('./components/Service.vue').default);
Vue.component('test-card', require('./components/TestCard.vue').default);

Vue.component('app', require('./views/layouts/App.vue').default);

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
