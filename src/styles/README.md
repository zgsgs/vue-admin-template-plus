# CSS架构方案

该架构结合ITCSS、BEM、ACSS等架构各自的优点整合而来。

ITCSS确定代码层级 | BEM确定命名 | ACSS确定原子样式

## 层级功能

### Settings层

预处理程序变量和方法，比如颜色（并没有真正的CSS output）（建目录管理）

> 此处分两部分：
>
> - var.scss是单纯的变量
> - variables.scss是可以导出给JS使用的变量

### Tools层

管理Mixin和Function（并没有真正的CSS output）利用SassMagic框架进行改造（建目录管理）

### Generic层

最基本的设定 normalize.css，reset

> 这里分为两部分：
>
> - 利用normalize.css重置浏览器默认样式（直接npm安装）
> - 重置三方组件库通用样式 如element ui（建目录管理）

### Base层

对各类元素选择器基础样式进行补充，只有这一层才使用 type selector（建目录管理）

### Object层

通常遵循OOCSS方法的页面结构类。由于BEM是OOCSS的进阶版本，所以该层具体表现为组件内部样式命名使用BEM模式命名（不建目录）

> 原则
>
> - 容器与内容分离
> - 结构（基础对象）与皮肤分离
> - 面向设计开发

### Component层

管理具体的组件样式 Vue项目通常都要封装组件，因此这一层样式都被放置到具体组件中管理（不建目录）

### ACSS层

管理原子类CSS。比如字体大小颜色，边框，圆角，省略号，间距等（建目录管理）

> 原则
>
> - 让样式极限复用
> - 解决ACSS无语义化缺点：属性选择器
> - Settings与ACSS层的关系

> 如何抽离ACSS？
>
> - 从settings层抽离
> - 从设计稿中总结无关联的多次出现的CSS属性

### Theme层

主题样式层（建目录管理）

### Trumps层

helper 唯一可以使用 important! 的地方 （不建目录，不使用）

