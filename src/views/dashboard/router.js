/*
 * @Author       : Jason <2087108700@qq.com>
 * @Date         : 2021-07-10 22:54:22
 * @LastEditTime : 2021-07-10 22:55:07
 * @LastEditors  : Jason
 * @Description  :dashboard模块路由
 * @FilePath     : \vue-admin-template-plus\src\views\dashboard\router.js
 */

const dashboardRouter = {
  path: '/',
  component: () => import('@/layout/index'),
  redirect: '/dashboard',
  children: [{
    path: 'dashboard',
    name: 'Dashboard',
    component: () => import('@/views/dashboard/index'),
    meta: { title: 'Dashboard', icon: 'dashboard' }
  }]
}

export default dashboardRouter
