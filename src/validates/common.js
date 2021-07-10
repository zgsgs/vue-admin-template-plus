/*
 * @Author       : Jason <2087108700@qq.com>
 * @Date         : 2021-07-09 23:49:57
 * @LastEditTime : 2021-07-10 22:02:45
 * @LastEditors  : Jason
 * @Description  : 通用校验工具
 * @FilePath     : \vue-admin-template-plus\src\utils\common.js
 */
/**
 * @param {string} path
 * @returns {Boolean}
 */
export function isExternal(path) {
  return /^(https?:|mailto:|tel:)/.test(path)
}

/**
 * @param {string} str
 * @returns {Boolean}
 */
export function validUsername(str) {
  const valid_map = ['admin', 'editor']
  return valid_map.indexOf(str.trim()) >= 0
}
