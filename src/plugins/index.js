/*
 * @Author       : Jason <2087108700@qq.com>
 * @Date         : 2021-07-11 03:00:21
 * @LastEditTime : 2021-07-11 03:28:55
 * @LastEditors  : Jason
 * @Description  : 挂载全部插件
 * @FilePath     : \vue-admin-template-plus\src\plugins\index.js
 */
const plugins = {
  install: Vue => {
    const requirePlugin = require.context('@/plugins', false, /.js$/)

    requirePlugin.keys().forEach(filePath => {
      if (filePath !== './index.js') {
        // 获取插件配置
        const pluginConfig = requirePlugin(filePath)
        // 挂载插件
        Vue.use(pluginConfig.default || pluginConfig)
      }
    })
  }
}

export default plugins
