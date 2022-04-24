// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import vuetify from '@/plugins/vuetify' // path to vuetify export
import ZoomOnHover from "vue-zoom-on-hover"
import Vuex from 'vuex'
import { store } from './store/store.js'
import 'material-design-icons-iconfont/dist/material-design-icons.css'

const axios = require('axios');
axios.defaults.baseURL = 'http://127.0.0.1:8000/';

Vue.use(Vuex)
Vue.use(ZoomOnHover)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  vuetify,
  store,
  components: { App },
  template: '<App/>'
})
