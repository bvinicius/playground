import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import Home from './views/Home';

Vue.config.productionTip = false

const routes = [
  { path: '/home', component: Home}
]

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
