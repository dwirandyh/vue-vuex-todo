import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import  ToDoListComponent from './components/TodoListComponent'

Vue.config.productionTip = false
Vue.component('todolist-component', ToDoListComponent)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
