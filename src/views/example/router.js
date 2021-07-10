/*
 * @Author       : Jason <2087108700@qq.com>
 * @Date         : 2021-07-10 21:44:31
 * @LastEditTime : 2021-07-10 23:17:55
 * @LastEditors  : Jason
 * @Description  : example模块路由
 * @FilePath     : \vue-admin-template-plus\src\views\example\router.js
 */
const exampleRouter = {
  path: '/example',
  component: () => import('@/layout/index'),
  redirect: '/example/table',
  name: 'Example',
  meta: { title: 'Example', icon: 'el-icon-s-help' },
  children: [
    {
      path: 'table',
      name: 'Table',
      component: () => import('@/views/example/table/index'),
      meta: { title: 'Table', icon: 'table' }
    },
    {
      path: 'tree',
      name: 'Tree',
      component: () => import('@/views/example/tree/index'),
      meta: { title: 'Tree', icon: 'tree' }
    }
  ]
}

export default exampleRouter
