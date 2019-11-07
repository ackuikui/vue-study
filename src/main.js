import Vue from 'vue'
import App from './App.vue'
import widget from './components/widget'
Vue.use(widget)

new Vue({
  render: h => h(App),
}).$mount('#app')
