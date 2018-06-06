## 推荐

### 文档
- [MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/);


## 简介

### 什么是html
- Hyper Text Markup Language（超文本标记语言），用于编写网页结构和内容的语言;

### html书写规则
- 在尖括号`<>`中的是标签名，不区分大小写;
- 标签必须成对出现;

### html本身缺陷
- 不能适应多种设备;
- 要求浏览器必须足够智能;
- 数据和显示没有分离;
- 功能不够强大;

### 静态页面
- 没有和后台进行数据交互（和服务端交互）的网页;

### 单页面和多页面应用
- 多页面应用：多个html文件入口，通过href跳转页面，跳转有明显刷新过渡体验;
- 单页面应用：只有一个html文件入口，通过路由跳转页面，跳转无明显刷新过渡体验;
  - 优点：用户体验好，每次页面变更不需要重新从服务器请求，能快速呈现给用户;
  - 缺点：不利于SEO（搜索引擎优化）;


## HTML5

### 新增标签
- 画布：canvas;
- 多媒体：video、audio;
- 语义化标签：header、nav、aside、main、article、section、footer;
- 其它...

### 新增属性
- contenteditable：使元素可被编辑内容;
- data-propname：自定义属性;
- draggable：使元素可被拖拽;
- 其它...

### 新增js api
- 本地存储：
  - localStorage（全局对象，可存储数据，无期限，不跨协议）;
  - sessionStorage（浏览器打开期间一个标签页中存在的会话对象，可存储数据，重新加载不会被清除，新标签或新窗口打开时重新初始化一个新会话对象，即标签页间不共享会话对象，不跨协议）;
- worker：提供一个工作线程，可在不阻塞页面流程下在工作线程中执行脚本;
- websocket：提供WebSocket对象，用于创建、管理websocket连接，通过此连接发送给websocket服务端或接收websocket服务端数据;
- Geolocation：使web内容可获取设备地理位置的对象;
- 其它...


## 原理

### 行内元素和块级元素
- 行内元素：一个元素不独占一行，不可设置宽高和上下margin;
- 块级元素：一个元素独占一行，可设置宽高;

### 替换元素和非替换元素
- 替换元素：浏览器根据元素属性判断具体显示内容，如：input、img、textarea、select;
- 非替换元素：浏览器直接根据元素标签的包裹内容显示，如：p、div、span;

### 回流(reflow)和重绘(repaint)
- 回流：当DOM渲染树的一部分或者全部因为大小边距、位置等发生改变而需要重建的过程，叫做回流;
- 重绘：当类似颜色背景等不会引起页面布局变化的设置被改变，而只需要重新渲染这些属性的过程叫做重绘;
- 优化方案：减少频繁的获取或设置dom元素样式，多次频繁修改dom样式可合并为一次统一的修改（通过更新class）;

### 标签属性id和name的区别
- id：唯一、作为a链接的锚点;
- name：可重复、常用于表单提交数据的key;


## 实用标签
```html
<!-- 编码统一 -->
<meta charset="UTF-8">
<!-- 作者 -->
<meta name="author" content="万鹏">
<!-- 描述 -->
<meta name="description" content="一个基于vue的项目">
<!-- 关键字 -->
<meta name="keywords" content="html,css,javascript,vue">
<!-- 指定网页渲染采用最新版本 -->
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
<!-- 指定双核浏览器优先采用极速模式 -->
<meta name="renderer" content="webkit">
<!-- 禁止缓存 -->
<meta http-equiv="Pragma" content="no-cache">
<meta http-equiv="Cache-Control" content="no-cache, must-revalidate, max-age=0">
<!-- 移动设备相关 -->
<meta content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" name="viewport">
<meta content="yes" name="apple-mobile-web-app-capable">
<meta content="black" name="apple-mobile-web-app-status-bar-style">
<!-- 禁止移动端识别电话号码邮箱 -->
<meta name="format-detection" content="telephone=no, email=no">
<!-- 页面过期时间配置 -->
<meta http-equiv="expires" content="Wed, 26 Feb 1997 08：21：57 GMT">
<!-- 避免被访问，会重定向新页面 -->
<meta http-equiv="Window-target" content="_top">
<!-- 指定时间重定向到新页面 -->
<meta http-equiv="Refresh" content="5;URL=https://www.baidu.com/">
<!-- 网页搜索内容指定，content属性值：all,none,index,noindex,follow,nofollow -->
<meta name="robots" content="all">
<!-- 设置dns预解析域名，可提高请求效率 -->
<link rel="dns-prefetch" href="http://this-is-a.com">
```