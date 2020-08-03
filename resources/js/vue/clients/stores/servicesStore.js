export default {
    namespaced: true,
    state: {
        services: []
    },
    getters: {
    },
    mutations: {
        SET_SERVICES(state, services) {
            state.services = services;
        }
    },
    actions: {
        getServices( state ) {

            fetch("/api/services", {
                "method": "GET"
            })
            .then(response => response.json())
            .then(res => {
                localStorage.setItem('services', JSON.stringify( res.services ));
                state.commit('SET_SERVICES', res.services);
            })
            .catch(err => {
                localStorage.setItem('services', JSON.stringify( res.services ));
                state.commit('SET_SERVICES', res.services);
            });
        },
    }
}