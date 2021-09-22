/*
 * @Author       : Jason <2087108700@qq.com>
 * @Date         : 2021-07-10 22:04:45
 * @LastEditTime : 2021-09-22 18:22:20
 * @LastEditors  : Jason
 * @Description  : 自动载入路由插件
 * @FilePath     : \vue-admin-template-plus\src\middlewares\loadRouter.js
 */

/**
 * 思路：
 * 通过webpack内置的require.context方法读取views目录下的router.js文件
 * 循环生成路由数组并导出
 */
const requireRoutesFile = require.context('../router', true, /.router.js/)

const requireRouter = []
requireRoutesFile.keys().forEach(fileName => {
  const router = requireRoutesFile(fileName)
  requireRouter.push(router.default)
})

export default requireRouter
