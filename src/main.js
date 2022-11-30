import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI, { Option } from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './assets/gloable.css'
import request from './utils/request';

Vue.config.productionTip = false;

Vue.prototype.request=request;

Vue.use(ElementUI );

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
