import Axios from "axios";

const store = {
    namespaced: true,
    state: {        
    },
    mutations: {        
    },
    actions: {
        saveTest( state, data ){
            console.log(data)
            return axios.post( '/test/save', data );
        }
    },
};

export default store;