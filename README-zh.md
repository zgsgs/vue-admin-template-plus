# vue-admin-template-plus

> 这是一个极简的 vue admin 管理后台。基于[vue-admin-template](https://github.com/PanJiaChen/vue-admin-template)改造而来，集合了日常工作中常用的一些功能。
>
> 它包含了 Element UI & axios & iconfont & permission control & lint & i18n & vuex & CSS架构 & mixin，这些搭建后台必要的东西。
>
> 这是一个复杂的案例，为了帮助大家更好的开发复杂企业级应用。

## Version

目前版本为 `v4.0+` 基于 `vue-cli3` 进行构建

## Extra

- Layout

> 对布局组件的封装与拓展，
>
> 1. 开发出不同的布局方式
> 2. 不同布局直接的动态切换

- Theme

> 集成主题
>
> 1. 开发多套主题
> 2. 支持不同主题的动态切换
> 3. 在CSS架构的基础上,实现基本主题的自定义

- Eelment

> 将主要展示Eelment的按需引入

- axios

> axios面对复杂接口的封装，如：
>
> 1. 文件的上传下载
> 2. URL参数与body参数混合
> 3. 不同格式的数据类型
> 4. Token等身份验证的添加方式

- iconfont

> 封装图标组件，更多的使用更加灵活的svg图标

- permission control

> 如何实现权限：
>
> 1. 前端根据用户角色来动态生成侧边栏和 router
> 2. 完全根据后端生成动态路由，控制侧边栏内容
> 3. 页面内，按钮级别的权限权限

- lint
- i18n

> 对于全站国际化 [参考](https://segmentfault.com/a/1190000015008808) [参考2](https://juejin.cn/post/6844903575571660807#heading-8)
>
> 1. 如何管理大量的国际化内容
> 2. 根据后端生成国际化内容

- vuex

> 如何更加灵活的使用Vuex  [参考](https://segmentfault.com/a/1190000019077663) [参考2](https://segmentfault.com/a/1190000015782272)
>
> 1. 解决Vuex在页面刷新后，数据丢失问题
> 2. 如何管理多页面时的state

- CSS架构

> 如何组织管理一套CSS样式 [参考](https://www.w3cplus.com/css/css-architecture-1.html)
>
> 1. 结合目前流行的CSS设计模式（ITCSS，BEM，ACSS）设计一套CSS架构，对各部分内容模块化管理

- mixin

> 对混入概念进一步理解，并展示更多的mixin的使用场景

- require.context

> 利用require.context实现组件/插件等通用文件的自动引入 [参考](https://segmentfault.com/a/1190000019773184)

- plugins 

> 新增插件系统 [参考](https://segmentfault.com/a/1190000019773184)
>
> 1. 将部分代码分离成为插件统一管理

- 其他

> - 对组件的测试
> - 自动化集成脚本
> - Dockerfile的使用
> - pm2部署上线到Docker容器中
> - 组件的分离与封装管理

## Build Setup

```bash
# 克隆项目
git clone https://github.com/PanJiaChen/vue-admin-template.git

# 进入项目目录
cd vue-admin-template

# 安装依赖
npm install

# 建议不要直接使用 cnpm 安装以来，会有各种诡异的 bug。可以通过如下操作解决 npm 下载速度慢的问题
npm install --registry=https://registry.npm.taobao.org

# 启动服务
npm run dev
```

浏览器访问 [http://localhost:9528](http://localhost:9528)

## 发布

```bash
# 构建测试环境
npm run build:stage

# 构建生产环境
npm run build:prod
```

## 其它

```bash
# 预览发布环境效果
npm run preview

# 预览发布环境效果 + 静态资源分析
npm run preview -- --report

# 代码格式检查
npm run lint

# 代码格式检查并自动修复
npm run lint -- --fix
```

更多信息请参考 [使用文档](https://panjiachen.github.io/vue-element-admin-site/zh/)



## Demo



## 相关项目

- [vue-element-admin](https://github.com/PanJiaChen/vue-element-admin)

- [electron-vue-admin](https://github.com/PanJiaChen/electron-vue-admin)

- [vue-typescript-admin-template](https://github.com/Armour/vue-typescript-admin-template)

- [awesome-project](https://github.com/PanJiaChen/vue-element-admin/issues/2312)

写了一个系列的教程配套文章，如何从零构建后一个完整的后台项目:

- [手摸手，带你用 vue 撸后台 系列一(基础篇)](https://juejin.im/post/59097cd7a22b9d0065fb61d2)
- [手摸手，带你用 vue 撸后台 系列二(登录权限篇)](https://juejin.im/post/591aa14f570c35006961acac)
- [手摸手，带你用 vue 撸后台 系列三 (实战篇)](https://juejin.im/post/593121aa0ce4630057f70d35)
- [手摸手，带你用 vue 撸后台 系列四(vueAdmin 一个极简的后台基础模板,专门针对本项目的文章,算作是一篇文档)](https://juejin.im/post/595b4d776fb9a06bbe7dba56)
- [手摸手，带你封装一个 vue component](https://segmentfault.com/a/1190000009090836)

## Browsers support

Modern browsers and Internet Explorer 10+.

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE / Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>IE / Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Safari |
| --------- | --------- | --------- | --------- |
| IE10, IE11, Edge| last 2 versions| last 2 versions| last 2 versions

## License

[MIT](https://github.com/PanJiaChen/vue-admin-template/blob/master/LICENSE) license.

Copyright (c) 2017-present PanJiaChen
