import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios';


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

axios.get('https://jsonplaceholder.typicode.com/photos').then(users => {
  store.dispatch("fetchData", users)
})

