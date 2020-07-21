import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import Home from './views/Home';

Vue.config.productionTip = false

const routes = [
  { path: '/home', component: Home}
]

const router = new VueRouter({
  routes
})

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
