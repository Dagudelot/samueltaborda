// Import stores
import instagramStore from './stores/instagramStore';
import blogStore from './stores/blogStore';
import servicesStore from './stores/servicesStore';
import testsStore from './stores/testsStore';

// Main Store
const store = {
    state: {   
        settings: null
    },
    mutations: {
        SET_SETTINGS( state, settings ){
            state.settings = settings;
        }
    },
    actions: {
        getSettings( state ){
            fetch('/settings')
            .then(response => response.json())
            .then(res => {
                state.commit('SET_SETTINGS', res.settings);
            })
            .catch( console.log )
        }
    },
    modules: {
        instagramStore,
        blogStore,
        servicesStore,
        testsStore
    }
};

export default store;