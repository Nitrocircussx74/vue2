import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
    strict: true,
    state: {
        searchFilters: {
            username: '',
            password: '',
            // address: ''
        }
    },
    mutations: {
        updateSearchFilters(state, data) {
            state.searchFilters = data
        },
        resetSearchFilters(state) {
            Object.keys(state.searchFilters).forEach(function (key){
                state.searchFilters[key] = ''
            });
        }
    }
});