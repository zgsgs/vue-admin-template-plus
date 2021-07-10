/*
 * @Author       : Jason <2087108700@qq.com>
 * @Date         : 2021-07-10 22:57:12
 * @LastEditTime : 2021-07-10 22:58:12
 * @LastEditors  : Jason
 * @Description  : external-link模块路由
 * @FilePath     : \vue-admin-template-plus\src\views\external-link\router.js
 */

const externalLinkRouter = {
  path: 'external-link',
  component: () => import('@/layout/index'),
  children: [
    {
      path: 'https://panjiachen.github.io/vue-element-admin-site/#/',
      meta: { title: 'External Link', icon: 'link' }
    }
  ]
}

export default externalLinkRouter
