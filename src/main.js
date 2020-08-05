/* eslint-disable no-debugger */

import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from './router'
import store from './store'
import { auth } from './firebase'

Vue.config.productionTip = false

let app

auth.onAuthStateChanged(user => {
  if (!app) {
    new Vue({
      vuetify,
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }

  if (user) {
    store.dispatch('fetchUserProfile', user)
  }
})
