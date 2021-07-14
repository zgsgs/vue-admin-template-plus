/*
 * @Author       : Jason <2087108700@qq.com>
 * @Date         : 2021-07-11 01:11:10
 * @LastEditTime : 2021-07-13 16:00:07
 * @LastEditors  : Jason
 * @Description  : 自动载入全局公共组件
 * @FilePath     : \vue-admin-template-plus\src\plugins\loadComponents.js
 */

const plugins = {
  install: (Vue) => {
    const requireComponents = require.context('@/components', true, /.vue$/)

    requireComponents.keys().forEach(filePath => {
      // 获取组件配置
      const componentConfig = requireComponents(filePath)
      // 获取挂载名称 组件名约定为:大驼峰命名文件夹/index.vue
      const componentName = filePath.match(/([_a-zA-Z0-9]+)\/index.vue/)[0].replace('/index.vue', '')
      // 全局注册组件
      Vue.component(
        componentName,
        // 如果这个组件选项是通过 `export default` 导出的，
        // 那么就会优先使用 `.default`，
        // 否则回退到使用模块的根。
        componentConfig.default || componentConfig
      )
    })
  }
}

export default plugins
