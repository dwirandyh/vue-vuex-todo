import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const moduleA = {
    state: {

    },
    getters: {

    },
    mutations: {

    }
}


export default new Vuex.Store({
    modules: {
        stateA: moduleA
    },
    state: {
        todos: [
            {
                id: 1,
                task: 'Kode',
                completed: true
            },
            {
                id: 2,
                task: 'Makan',
                completed: false,
            },
            {
                id: 3,
                task: 'Tidur',
                completed: true
            }
        ],
        lastID: 3
    },
    getters: {
        all(state) {
            return state.todos
        },
        getLastID(state) {
            return state.lastID
        }
    },
    mutations: {
        addTodo(state, data) {
            // add array
            state.todos.push(data)
            state.lastID++
        },
        delete(state, value) {
            // get selected array
            var item = state.todos.find(o => o.id === value)
            // remove array
            state.todos.splice(state.todos.indexOf(item), 1)
        },
        updateStatus(state, value) {
            // get selected array by index
            var item = state.todos.find(o => o.id === value)
            var index = state.todos.indexOf(item)

            state.todos[index].completed = (!item.completed)
        }
    },

    actions: {}
})
