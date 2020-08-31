import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './styles/base.css'
import './styles/iconfont.css'
import myheader from './components/myheader.vue'
import 'amfe-flexible'
import Vant from 'vant'
import 'vant/lib/index.css'
import logo from './components/Logo.vue'
import axios from 'axios'
Vue.prototype.$axios = axios
axios.defaults.baseURL = 'http://127.0.0.1:3000'
Vue.use(Vant)
// 添加请求拦截器
// axios.interceptors.request.use(function (config) {
//   // 在发送请求之前做些什么
//   return config;
// }, function (error) {
//   // 对请求错误做些什么
//   return Promise.reject(error);
// });

// // 添加响应拦截器
// axios.interceptors.response.use(function (response) {
//   // 对响应数据做点什么
//   return response;
// }, function (error) {
//   // 对响应错误做点什么
//   return Promise.reject(error);
// });
Vue.component('myheader', myheader)
Vue.component('logo', logo)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
