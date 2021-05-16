import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

// создаем объект Vue
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')   // указываем, куда мы вставим наш объект (в файле public/index.html есть div c id=app)