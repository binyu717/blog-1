## 推荐

### 文档
- [官网](http://cn.vuejs.org/);
- [vue-router](https://router.vuejs.org/zh/guide/#html);
- [vuex](https://vuex.vuejs.org/zh-cn/);
- [vue开源项目](https://github.com/opendigg/awesome-github-vue);
- [梁少峰Vue源码解析](https://github.com/youngwind/blog);
- [滴滴Vue源码解析](https://github.com/DDFE/DDFE-blog);
- [滴滴vue技术揭秘](https://ustbhuangyi.github.io/vue-analysis/);
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
- el: vue实例挂载目标，用于vue编译模版，数据和事件监听的覆盖范围;
- data：用于vue初始化监听的数据对象，需要手动触发后续改动;
- computed: 用于vue初始化时混入实例的计算属性，只有当计算属性依赖的其它响应式属性改变才会更新，否则会取缓存数据，计算属性不能手动被改变;
- watch：用于vue初始化时，定义需要观察的表达式，当观察属性变化时触发回掉，可利用此观察属性来更新其它变量;
- methods: 初始化混入到vue实例中的方法，需要手动调用;

### 常用指令和特殊属性
- v-html、v-show、v-if、v-else、v-else-if、v-for、v-on（@）、v-bind（:）、v-model;
- key、ref、slot、slot-scope;

### 组件
- 作用：用于拆分项目，减少项目代码，封装可复用组件，便于维护，使项目结构清晰;
- 注意：组件data必须是函数（函数返回的对象是新生成的可被独立维护的对象，不会和其它实例共享避免互相影响）;
- 组件间的交互方式：父子间通过`props`和`$emit`传递数据，非父子组件间通过`vm.$on`和`vm.$emit`传递数据;

### slot
- 作用：用于组件内容分发（自定义内容）;
- 种类：
  - 基本slot（完全代理内容分发）;
  - 具名slot（指定位置内容分发）;
  - 作用域slot（解构 slot-scope 获取组件内数据）;

### Vue.set和vm.$set
- 作用：用于vue初始化后，需要新增的响应式属性（被监听，且视图更新），因为vue本身无法监听普通的深度新增属性（对象和数组）;

### Vue.nextTick和vm.$nextTick
- 作用：下一次的 dom 更新事件循环完成后触发回调，可用于需要在数据更新后，获取dom最新的真实状态（例如列表数据更新后需要获取更新后列表容器的实际高度）的场景;

### vue-router
- 作用：用于单页面应用无刷新页面跳转;
- 基本配置：熟悉 path、name、components、children、redirect 配置的作用;
- 标签使用：熟悉 router-link 和 router-view 常用配置;
- js功能：熟悉路由周期函数（beforeRouteEnter、beforeRouteLeave），熟悉$router api;

### vuex（项目内部通过store、$store访问）
- 作用：一个 vue 应用的全局状态管理系统，方便应用中所有组件都能快速获取全局的状态改变，而不需要通过组件之间一层层传递;
- api：
  - state：单纯的数据状态数据存储对象;
  - getters：需要动态计算的状态数据;
  - mutations：用于改变state状态的唯一提交方法，只支持同步;
  - actions：用于提交mutation，支持异步;
  - modules：用于将大型应用store分割成子模块，便于模块内部管理自己的状态;

## 项目构建

### runtime only 和 runtime + compiler区别
- runtime only：vue渲染最终通过render，选择此模式只能通过render函数渲染vue页面，不能采用template，因为template需要编译，而通常vue文件是通过vue-loader进行编译的，但是在main.js中new Vue时必须采用render，此方式生成的代码更轻量，因为没有加入编译过程代码;
- runtime + compiler：自带编译器，但是编译过程消耗资源和性能，所以通常推荐采用 runtime only 模式;

## 原理(2.5.16)

### vue入口
- 调用全局函数 `initGlobalAPI()` 初始化Vue全局api;
  - `Object.defineProperty(Vue, 'config', configDef)`：初始化`Vue.config`上的全局配置属性，例如：devtools、silent等属性;
  - 初始化`Vue.set`、`Vue.delete`、`Vue.nextTick`等方法;
  - 初始化`Vue.options`上的属性，例如：`components`、`directives`、`filters`，然后`Vue.options._base = Vue`挂载`Vue`给`_base`属性，然后`extend(Vue.options.components, builtInComponents)`将`builtInComponents`中的组件`KeepAlive`初始化继承到`Vue.options.components`对象中;
  - `initUse(Vue)`初始化`Vue.use`方法的功能;
  - `initMixin(Vue)`初始化`Vue.mixin`方法的功能;
  - `initExtend(Vue)`初始化`Vue.extend`方法的功能;
  - `initAssetRegisters(Vue)`初始化`Vue.component`、`Vue.directive`、`Vue.filter`方法的功能;

### new Vue()做了什么
- 在`Vue`构造函数中通过`this._init(options)`初始化vue实例数据;
  - `initLifecycle(vm)`
  - `initEvents(vm)`
  - `initRender(vm)`
  - `callHook(vm, 'beforeCreate')`触发生命周期回调;
  - `initInjections(vm)`
  - `initState(vm)`初始化实例的`props、methods、data、computed、watch`等属性;
    - `initProps(vm, opts.props)`;
    - `initMethods(vm, opts.methods)`;
    - `initData(vm)`;
      - 遍历`vm._data`的属性，通过`proxy(vm, '_data', key)`代理`vm._data`上所有数据get和set，使直接操作vm上的属性可触发`vm._data`上同名属性的set和get达到挂载属性改变被监听的目的;
    - `initComputed(vm, opts.computed)`;
    - `initWatch(vm, opts.watch)`;
  - `initProvide(vm)`
  - `callHook(vm, 'created')`触发`created`回调;
  - `vm.$mount(vm.$options.el)`挂载`el`元素，`$mount`的定义在 `entry-runtime-with-compiler.js`，此模式是带编译的版本;
    - `const mount = Vue.prototype.$mount`先缓存`runtime`非编译版本的`mount`方法，留着后面用，然后重新在Vue原型上定义新的`$mount`方法；
    - `el = el && query(el)`获取元素；
    - `if (el === document.body || el === document.documentElement)`判断避免直接挂载在根元素上，因为后面会替换掉自身;
    - `if (!options.render)`如果没有自定义`render`，则取`options.template`然后获取模板HTML，
    - 通过`compileToFunctions`方法将`template`编译成`render`函数;
    - 调用开始缓存的`mount`方法挂载`el`，`mount`中通过`mountComponent(this, el, hydrating)`挂载组件;
    - 在`mountComponent`中，通过`vm.$el = el`将`el`挂载到`$el`上;
    - `callHook(vm, 'beforeMount')`触发生命周期回调;
    - 定义 `updateComponent`方法，此方法内通过调用`vm._update`方法更新dom，然后`new Watcher`监听视图更新;
    - `Watcher`中的`before`钩子中通过`callHook(vm, 'beforeUpdate')`触发生命周期函数;
    - `callHook(vm, 'mounted')`触发生命周期回调，最后返回vue实例;

### 虚拟DOM
- 产生原生：js中操作dom效率低下，因为真实 dom 属性众多，整个dom树体系庞大，频繁操作dom影响性能；前端主要任务就是维护状态和更新视图，必定会需要大量的操作dom，所以很容易降低渲染效率;
- 核心思想：提供一种方便的工具，保证最小化的 dom 操作，提高视图渲染效率;
- 核心实现：JS对象操作比 dom 操作效率快，所以对 dom 的改变，首先并不会真正的操作实际 dom，而是会通过虚拟dom（即模拟dom结构的js对象）进行属性对比后确认真正改变的属性，再对真实的 dom 进行操作;


## bug

### vuex不兼容IE(例如：Promise”未定义、或vuex报错vuex requires a Promise polyfill in this browser)
- 在代码执行之前，引入 babel-polyfill;

### 属性赋值对视图渲染无效
- 初始化data时未追加，可通过`Vue.set`或`this.$set`方法修改数据避免；
- 子组件不规范（未通过sync修饰符）的操作父组件通过 props 传递的数据，应尽量避免子组件过多操作props数据;

### Error in nextTick: "InvalidCharacterError: Failed to execute 'setAttribute' on 'Element': '}' is not a valid attribute name."
- 类似这种错误，一般是由于html模板中，自已在元素属性上加了vue无法识别的属性名，比如上面的报错中是不识别 '}' 说明模板中有误写了 '}' 到属性中;

### Cannot read property '_withTask' of undefined：
- 常因为vue template中绑定的数据或方法，没有在实例中的对应属性中写入而产生;

### No parser and no file path given, couldn't infer a parser
- 由于 prettier 模块版本过高导致，prettier 是 "vue-loader" 的依赖，把 vue-loader 降级成 "12.2.2" 可解决;

### 新的 vue-cli 项目中 webpack-dev-server 高版本babel编译不了导致IE报错：
- 降版本 "webpack-dev-server": "2.6.1";