import vue from 'vue';
import vuex from 'vuex';

vue.use(vuex);

export default new vuex.Store({
    state: {
        count: 0
    },
    mutations: {
            add(state, payload) {
                //if we get a payload , then add it to the count(state).
                // else add 1 to the count(state)
                payload ? (state.count += payload) : state.count++;
            },
            subtract(state, payload) {
                payload ? (state.count -= payload) : state.count --;
            }
    },
    actions: {
        addThreeAsync({commit}) {
            setTimeout(()=> commit('add', 3), 3000);
        }
    }
});
