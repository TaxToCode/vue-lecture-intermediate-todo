import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const storage = {
    fetch() {
        const arr = [];
        if (localStorage.length > 0) {
            for (let i = 0; i < localStorage.length; i++) {
                if (localStorage.key(i) !== "loglevel:webpack-dev-server") {
                    const temp = JSON.parse(localStorage.getItem(localStorage.key(i)));
                    arr.push(temp);
                }
            }
        }
        return arr;
    },
};

export const store = new Vuex.Store({
    state: {
        toDoItems: storage.fetch(),
    },
    mutations: {
        addOneItem(state, todoItem) {
            const obj = { completed: false, item: todoItem };
            localStorage.setItem(state, JSON.stringify(obj));
            state.toDoItems.push(obj);
        },
    },
});
