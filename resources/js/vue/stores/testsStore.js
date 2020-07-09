export default {
    namespaced: true,
    state: {
        tests: []
    },
    getters: {
    },
    mutations: {
        SET_TESTS(state, tests){
            state.tests = tests;
        }
    },
    actions: {
        getAllTests( state ) {

            return axios.get("/test/")
            .then(res => {
                if( res.data.status == 'success' ){
                    state.commit('SET_TESTS', res.data.tests);
                }
            })
            .catch(console.log)
        },
        getTest( state, slug ) {

            return axios.get("/test/" + slug);
        },
        saveTest( state, data ) {

            return axios.post("/test/save", data)
        },
    }
}
