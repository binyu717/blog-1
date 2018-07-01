## 推荐

### 源码
- [webkit源码](https://webkit.org/);
- [chromium源码](https://www.chromium.org/);
  

## 原理

### 内核结构和依赖
- <img src="http://s9.51cto.com/wyfs02/M02/30/88/wKiom1OoFoXiajoAAACtCpO9nQU069.jpg" alt="webkit架构">
- 渲染引擎：
  - html解释器：将html文本，解析成dom（文档对象模型）树;
  - css解释器：解析css文本，为dom对象生成指定样式;
  - 布局：结合dom和样式生成能表示所有信息的布局模型;
  - 绘图：依赖图形库将布局生成信息绘制成图像;
  - javascript引擎：js可修改网页内容，引擎通过解析js代码，结合dom和cssom接口修改网页内容来渲染网页;

### html网页
- 概念：html网页利用html语言编写，它的结构特征大致可分为：树状结构、层次结构、框结构;
- 树状结构：网页整体可以看作一颗树结构，树根是html元素;
- 框结构：一个网页也可以通过frame类元素分割成很多框，每一个框都是一个包含html文档的结构;
- 层次结构：网页也可以是层次结构，根层是最大的层，然后向上一层层布局内部层;

### 网页渲染过程
- 概念：详细可分为从URL到构建dom树的网页加载过程、从dom树到生成可视化图像的网页渲染过程;
- 过程：
  - 输入url，浏览器内核盗用资源加载器加载url对应网页；
  - html解释器将html代码解释生成dom树结构；
  - 遇到js代码调用js引擎解释执行（js可能会修改dom结构），js执行过程会阻塞dom树创建（因为js是单线程执行，可通过异步属性配置js异步加载）；
  - dom树创建完毕后触发`DOMContentLoaded`事件；
  - 异步加载其它资源（图片，css、视频等）；
  - 所有资源加载完毕后触发`onload`事件；

### css和dom树构建renderObject树过程
- css资源被css解释器解释成样式表示结构；
- 样式表示结构结合dom树生成renderObject树；
- 同时，内核根据网页层次生成renderLayer树和一个虚拟的绘图上下文对象；

### 多进程模型
- Browser进程：浏览器主进程，负责浏览器每个tab界面管理，负责其它进程的创建和销毁，仅仅只有一个；
- Renderer进程：网页渲染进程，负责页面渲染；
- NPAPI插件进程：为NPAPI类型插件（例如Flash插件等）而创建，同类插件进程只会被创建一次；
- Pepper插件进程：为Pepper类型插件而创建；
- 其它类型进程：例如Linux的Zygote进程（Renderer进程由它创建），和Sandbox准备进程；

