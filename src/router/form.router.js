/*
 * @Author       : Jason <2087108700@qq.com>
 * @Date         : 2021-07-10 22:46:09
 * @LastEditTime : 2021-07-10 22:47:57
 * @LastEditors  : Jason
 * @Description  : form模块路由
 * @FilePath     : \vue-admin-template-plus\src\views\form\router.js
 */

const fromRouter = {
  path: '/form',
  component: () => import('@/layout/index'),
  children: [
    {
      path: 'index',
      name: 'Form',
      component: () => import('@/views/form/index'),
      meta: { title: 'Form', icon: 'form' }
    }
  ]
}

export default fromRouter
