// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import './style/common.scss'

Vue.config.productionTip = false

/* eslint-disable no-new */
Vue.directive('title', {
  inserted: function (el, binding) {
    document.title = binding.value.title
  }
})

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
