/*
 * @Author       : Jason <2087108700@qq.com>
 * @Date         : 2021-07-09 23:49:57
 * @LastEditTime : 2021-07-11 03:51:05
 * @LastEditors  : Jason
 * @Description  : 载入svg图片
 * @FilePath     : \vue-admin-template-plus\src\icons\index.js
 */
const req = require.context('./svg', false, /\.svg$/)
const requireAll = requireContext => requireContext.keys().map(requireContext)
requireAll(req)
