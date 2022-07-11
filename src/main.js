import Vue from 'vue'
import App from './App.vue'
import faker from 'vue-faker'
import vuetify from './plugins/vuetify'
import '@babel/polyfill'

Vue.use(faker)

Vue.config.productionTip = false

new Vue({
  vuetify,
  render: function (h) {
    return h(App)
  },
}).$mount('#app')
