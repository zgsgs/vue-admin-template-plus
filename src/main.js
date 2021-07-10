/*
 * @Author       : Jason <2087108700@qq.com>
 * @Date         : 2021-07-09 23:49:57
 * @LastEditTime : 2021-07-11 05:53:42
 * @LastEditors  : Jason
 * @Description  :
 * @FilePath     : \vue-admin-template-plus\src\main.js
 */
import 'normalize.css/normalize.css' // A modern alternative to CSS resets
import 'element-ui/lib/theme-chalk/index.css'
import '@/styles/index.scss' // global css
import '@/icons' // icon
import '@/utils/permission' // permission control

import App from './App'
import ElementUI from 'element-ui'
import Vue from 'vue'
import locale from 'element-ui/lib/locale/lang/en' // lang i18n
import plugins from './plugins' // plugins loader
import router from './router'
import store from './store'

/**
 * If you don't want to use mock-server
 * you want to use MockJs for mock api
 * you can execute: mockXHR()
 *
 * Currently MockJs will be used in the production environment,
 * please remove it before going online ! ! !
 */
if (process.env.NODE_ENV === 'production') {
  const { mockXHR } = require('../mock')
  mockXHR()
}

// set ElementUI lang to EN
Vue.use(ElementUI, { locale })
// 如果想要中文版 element-ui，按如下方式声明
// Vue.use(ElementUI)

// 挂载全部自定义插件
Vue.use(plugins)
Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
