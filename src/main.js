import Vue from 'vue'
import App from './App.vue'
import { Button} from 'mint-ui'
import router from './router'
import store from './store'
import VueLazyLoad from 'vue-lazyload'
import './filters' //加载过滤器

import loading from './common/imgs/loading.gif'
import '../src/assets/css/reset.css'

import './mock/mockServer' //加载mockServer即可
//全局注册组件
Vue.component(Button.name,Button) //<mt-button>
Vue.config.productionTip = false

import BaiduMap from 'vue-baidu-map'

Vue.use(VueLazyLoad,{
loading
})
Vue.use(BaiduMap, {
  // ak 是在百度地图开发者平台申请的密钥 详见 http://lbsyun.baidu.com/apiconsole/key */
  ak: 'oRZGDNRbMdgHgKRM4wPl5wUo6FTCvLeS'
})

new Vue({
  router, //使用vue router
  store, //使用vuex
  render: h => h(App),
}).$mount('#app')
