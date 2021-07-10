/*
 * @Author       : Jason <2087108700@qq.com>
 * @Date         : 2021-07-10 22:53:18
 * @LastEditTime : 2021-07-10 22:53:50
 * @LastEditors  : Jason
 * @Description  : login模块路由
 * @FilePath     : \vue-admin-template-plus\src\views\login\router.js
 */

const loginRouter = {
  path: '/login',
  component: () => import('@/views/login/index'),
  hidden: true
}

export default loginRouter
