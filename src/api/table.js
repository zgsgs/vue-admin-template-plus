/*
 * @Author       : Jason <2087108700@qq.com>
 * @Date         : 2021-07-09 23:49:57
 * @LastEditTime : 2021-07-11 03:34:04
 * @LastEditors  : Jason
 * @Description  : table模块API
 * @FilePath     : \vue-admin-template-plus\src\api\table.js
 */
import request from '@/utils/request'

export function getList(params) {
  return request({
    url: '/vue-admin-template/table/list',
    method: 'get',
    params
  })
}
