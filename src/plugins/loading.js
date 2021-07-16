/*
 * @Author       : Jason <2087108700@qq.com>
 * @Date         : 2021-07-16 17:44:34
 * @Description  : Loading组件载入插件
 * @FilePath     : \vue-admin-template-plus\src\plugins\loading.js
 * @LastEditTime : 2021-07-16 17:45:07
 * @LastEditors  : Jason
 */
import axios from 'axios'

export default {
  install(Vue, options) {
    Vue.prototype.__loader_checks = []
    Vue.prototype.$__loadingHTTP = new Proxy(
      {},
      {
        set: function(target, key, value, receiver) {
          const oldValue = target[key]
          if (!oldValue) {
            Vue.prototype.__loader_checks.forEach(func => {
              func(key, value)
            })
          }

          return Reflect.set(target, key, value, receiver)
        }
      }
    )

    axios.interceptors.request.use(config => {
      Vue.prototype.$__loadingHTTP[config.url] = config

      return config
    })

    axios.interceptors.response.use(response => {
      delete Vue.prototype.$__loadingHTTP[response.config.url]

      return response
    })
  }
}
