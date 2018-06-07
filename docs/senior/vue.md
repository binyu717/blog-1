## 推荐

### 文档
- [官网](http://cn.vuejs.org/);
- [vue-router](https://router.vuejs.org/zh/guide/#html);
- [vuex](https://vuex.vuejs.org/zh-cn/);
- [vue开源项目](https://github.com/opendigg/awesome-github-vue);
- [梁少峰Vue源码解析](https://github.com/youngwind/blog);
- [滴滴Vue源码解析](https://github.com/DDFE/DDFE-blog);
- [滴滴vue技术揭秘](https://ustbhuangyi.github.io/vue-analysis/doc/);
- [Vue虚拟DOM](http://www.cnblogs.com/xuntu/p/6800547.html);
- [Vue2的MVVM](https://github.com/wangfupeng1988/learn-vue2-mvvm);
- [vue-cli多页面打包配置](https://juejin.im/post/5a8e3f00f265da4e747fc700);


## 简介

### Vue（读音同view）
- 概念：聚焦View层，基于数据驱动和组件化理念的Web MVVM库;
- 优点：轻量（体积小、不依赖其它库）、数据绑定、指令（同Angular理念）、组件化和虚拟dom（同React理念）;
- 渐进式技术栈：学习坡度平缓，语法亲和力强，项目既可以只使用vue核心（视图和组件），也可以使用vue生态圈（vue-router、vuex等）技术构建中型项目，相比angular这种体系大、规范强硬的框架上手会更快;

### Vue和其它同类框架的区别
- 与Angular：
  - 相同：指令、过滤器、双向绑定、不支持低端浏览器;
  - 不同：ng学习成本高（比如：依赖注入机制...），Vue的API等比较简单直观，ng对数据赃检查所以watcher越多越慢，Vue使用异步队列更新（所有数据独立触发）所以优化比较好;
- 与React：
  - 相同：思想相同（一切都是组件），钩子函数（让开发者定制化处理需求），不内置类似Ajax、Router等功能到核心包，而是以其它方式加载组件开发中，都支持mixins特性;
  - 不同：React依赖虚拟DOM，对渲染的结果会做脏检查，而Vue使用DOM模版，Vue提供了指令、过滤器等可以方便快捷的操作DOM;


## 常用api

### 属性
- el: vue实例的挂载元素，实例中所监听的数据和绑定的事件将应用于此范围内;
- data：初始化数据绑定，vue将会监听内部数据的改变，需要手动改变;
- computed: 初始化数据绑定，禁止手动改变，依赖其它实例数据变化而变化，内部有缓存机制（数据未变化则获取缓存）优化效率;
- watch：监听已有数据变化，适合数据变化后更改其它数据;
- methods: 方法，初始化不会触发，需要手动调用，无优化机制;

### 组件
- 作用：拆分项目代码避免冗余，清晰项目结构，便于封装可复用组件，便于维护;
- 组件间的交互方式：父子间通过props和`$emit`传递数据，非父子组件间通过`vm.$on`和`vm.$emit`传递数据;

### slot
- 概念：组件插槽，用于内容分发（调用组件时自定义内部内容的一种方式）;
- 种类：基本slot（剩余内容分发）、具名slot（指定位置内容分发）、作用域slot（调用组件时在自定义内容中获取组件内部数据）;

### Vue.set和vm.$set
- 作用：初始化时未通过vue监听的数据，可通过此api将数据追加到vue的数据监听队列;

### Vue.nextTick和vm.$nextTick
- 作用：下一次的 dom 更新事件循环，被执行之后触发，可用于需要在数据更新后获取 dom 的一下次循环的真实状态的场景;

### vue-router
- 作用：用于单页面应用无刷新页面跳转;

### vuex
- 作用：一个 vue 应用的全局状态管理系统，方便应用中所有组件都能方便获取到全局的状态改变;
- api：
  - state：存储初始化状态，需要主动触发更新;
  - getters：相当于计算属性，可依赖 state 或其它 getters 数据动态返回处理后的数据;
  - mutations：同步逻辑的提交，内部的异步（回调、异步请求）逻辑改变的状态不会被及时监听;
  - actions：异步逻辑分发，适合内部包含异步逻辑;
  - modules：拆分全局状态树，适合复杂的多模块项目，各模块管理自己的模块内部状态）;


## 原理

### 生命周期
- 初始化vue实例（new Vue）;
- beforeCreate之前的工作：
  - initLifecycle（初始化`$parent`、`$root`、`$children`、`$refs`等属性到实例上）;
  - initEvents（初始化`_events`、`$on`、`$once`、`$off`等事件相关属性到实例上）;
  - initRender（初始化`_vnode`、`$slots`、`$createElement`等和节点和dom渲染相关属性和方法到实例上）;
- created之前的工作：
  - initInjections;
  - initState（初始化props、data、computed、methods、watch属性）;
  - initProvide;
- beforeMount之前的工作：
  - 挂载 el 属性到 vm.$el;
  - 将 template 编译成 render 函数，或将 el 属性 outHTML 内容编译成 template;
- mounted之前的工作：
  - 渲染元素; 
- beforeUpdate（监听到更新，更新之前）;
- updated（更新之后）;
- beforeDestroy（vue实例销毁之前）;
- destroyed（vue实例销毁之后）; 

### 虚拟DOM
- 产生原生：js中操作dom效率低下，因为真实 dom 属性众多，整个dom树体系庞大，频繁操作dom影响性能；前端主要任务就是维护状态和更新视图，必定会需要大量的操作dom，所以很容易降低渲染效率;
- 核心思想：提供一种方便的工具，保证最小化的 dom 操作，提高视图渲染效率;
- 核心实现：JS对象操作比 dom 操作效率快，所以对 dom 的改变，首先并不会真正的操作实际 dom，而是会通过虚拟dom（即模拟dom结构的js对象）进行属性对比后确认真正改变的属性，再对真实的 dom 进行操作;


## bug

### vuex不兼容IE(例如：Promise”未定义、或vuex报错vuex requires a Promise polyfill in this browser)
- 在代码执行之前，引入 babel-polyfill;

### 属性赋值对视图渲染无效
- 多数情况是所操作的视图绑定属性，在初始化实例data属性的时候没有被追加，后期追加的属性采用 Vue.set 或 this.$set 追加可有效避免这种情况;

### Error in nextTick: "InvalidCharacterError: Failed to execute 'setAttribute' on 'Element': '}' is not a valid attribute name."
- 类似这种错误，一般是由于html模板中，自已在元素属性上加了vue无法识别的属性名，比如上面的报错中是不识别 '}' 说明模板中有误写了 '}' 到属性中;

### Cannot read property '_withTask' of undefined：
- 常因为vue template中绑定的数据或方法，没有在实例中的对应属性中写入而产生;

### No parser and no file path given, couldn't infer a parser
- 由于 prettier 模块版本过高导致，prettier 是 "vue-loader" 的依赖，把 vue-loader 降级成 "12.2.2" 可解决;

### 新的 vue-cli 项目中 webpack-dev-server 高版本babel编译不了导致IE报错：
- 降版本 "webpack-dev-server": "2.6.1";