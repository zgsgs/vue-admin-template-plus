/*
 * @Author       : Jason <2087108700@qq.com>
 * @Date         : 2021-07-22 13:29:00
 * @Description  : edit模块路由
 * @FilePath     : \vue-admin-template-plus\src\views\edit\router.js
 * @LastEditTime : 2021-07-22 13:48:37
 * @LastEditors  : Jason
 */
const editRouter = {
  path: '/edit',
  component: () => import('@/layout/index'),
  redirect: '/edit',
  children: [{
    path: 'edit',
    name: 'Edit',
    component: () => import('@/views/edit/index'),
    meta: { title: 'Edit', icon: 'edit' }
  }]
}

export default editRouter
