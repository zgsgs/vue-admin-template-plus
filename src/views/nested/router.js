/*
 * @Author       : Jason <2087108700@qq.com>
 * @Date         : 2021-07-10 21:46:06
 * @LastEditTime : 2021-07-10 23:39:17
 * @LastEditors  : Jason
 * @Description  : nested模块路由
 * @FilePath     : \vue-admin-template-plus\src\views\nested\router.js
 */
const nestedRouter = {
  path: '/nested',
  component: () => import('@/layout/index'),
  redirect: '/nested/menu1',
  name: 'Nested',
  meta: {
    title: 'Nested',
    icon: 'nested'
  },
  children: [
    {
      path: 'menu1',
      component: () => import('@/views/nested/menu1/index'), // Parent router-view
      name: 'Menu1',
      meta: { title: 'Menu1' },
      children: [
        {
          path: 'menu1-1',
          component: () => import('@/views/nested/menu1/menu1-1'),
          name: 'Menu1-1',
          meta: { title: 'Menu1-1' }
        },
        {
          path: 'menu1-2',
          component: () => import('@/views/nested/menu1/menu1-2'),
          name: 'Menu1-2',
          meta: { title: 'Menu1-2' },
          children: [
            {
              path: 'menu1-2-1',
              component: () => import('@/views/nested/menu1/menu1-2/menu1-2-1'),
              name: 'Menu1-2-1',
              meta: { title: 'Menu1-2-1' }
            },
            {
              path: 'menu1-2-2',
              component: () => import('@/views/nested/menu1/menu1-2/menu1-2-2'),
              name: 'Menu1-2-2',
              meta: { title: 'Menu1-2-2' }
            }
          ]
        },
        {
          path: 'menu1-3',
          component: () => import('@/views/nested/menu1/menu1-3'),
          name: 'Menu1-3',
          meta: { title: 'Menu1-3' }
        }
      ]
    },
    {
      path: 'menu2',
      component: () => import('@/views/nested/menu2/index'),
      name: 'Menu2',
      meta: { title: 'menu2' }
    }
  ]
}

export default nestedRouter
