/*
 * @Author       : Jason <2087108700@qq.com>
 * @Date         : 2021-07-10 22:51:58
 * @LastEditTime : 2021-07-11 00:59:23
 * @LastEditors  : Jason
 * @Description  : error模块路由
 * @FilePath     : \vue-admin-template-plus\src\views\error\router.js
 */

const errorRouter = {
  path: '/404',
  component: () => import('@/views/error/404/index'),
  hidden: true
}

export default errorRouter
