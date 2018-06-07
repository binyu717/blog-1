## 推荐

### 书籍
- 《javascript权威指南》;

### 文档
- [MDN文档](https://developer.mozilla.org/zh-CN/docs/Web/API/);
- [es6](http://es6.ruanyifeng.com/);

## 简介

### javascript
- 运行在浏览器端的编程语言，为网页添加交互和动态功能，node.js则是运行在服务端的javascript环境;


## 原理

### 原型和原型链
- 概念：在js中`prototype`对象就是原型，用于关联对象属性，也可以用于新增或改变内置对象的属性方法；原型链用于描述js中对象与对象之间的联系，通常通过子“类”的 `prototype.__proto__` 连接父“类”，原型通常用于js中的面向对象实现，js中的“类”都是通过函数来创建的;
- 原型：`prototype`只有函数对象中存在，常用于在js中实现面向对象，如下：
```js
	function Parent() {
		// 私有属性在每个实例中独占内存，互不影响
		this.privateProp = VALUE; 
		this.privateMethod = function() {};
	}
	Parent.prototype = {
		// 公有属性在所有同类实例中共用同一块内存
		commonProp: VALUE, 
		commonMethod: function() {}
	};
	// 通过类创建实例
	var pObj = new Parent(); 
```
- 原型链：`__proto__`存在于每个对象中，如上原型 demo 中，原型链的关系如下，象征着一层层的继承关系链：
```js
	pObj.__proto__ === Parent.prototype;
	Parent.prototype.__proto__ === Object.prototype;
	Object.prototype.__proto__ === null;
```

### 继承
- 比较普通的继承方式如下（父类借用上一个问题的函数对象）：
```js
	function Child() {}
	// 继承父类属性
	Child.prototype === new Parent(); 
	// 手动规范构造函数
	Child.prototype.constructor = Child; 
	// 自定义属性
	Child.prototype.customProp = VALUE; 
```
- 本例可减少不必要的属性（父类借用上一个问题的函数对象）：
```js
	function inhert ( o ) {
		function F() {};
		F.prototype = o;
		return new F();
	}
	function Child () {};
	Child.prototype = inhert( Parent.prototype );
	Child.prototype.constructor = Child;
```

### 作用域、作用域链
- 作用域：一块具有访问权限的代码空间，可用于隔离变量，区分全局变量（全局可被访问）和局部变量（局部内可被访问），形成变量的访问权限，js中的作用域通常由函数控制;
- 作用域链：由局部作用域到全局作用域之间形成的一条变量访问链，先从局部访问变量，未找到则继续向外访问直到全局作用域;

### 执行环境（执行上下文）
- 概念：一个代码块作用域内，为此作用域所在js执行环境提供数据的对象，比如：一个函数执行的时候，上下文就为其提供了this、arguments等变量，不同上下文执行环境下，提供的数据也不同，而在全局上下文环境中 window对象 就相当于全局执行环境;
- 作用原理：js解释器初始化代码默认进入全局执行环境，每执行一个函数，都会将执行函数所在执行环境压入执行栈，如果函数内部还有执行函数则继续压入执行栈，否则出栈当前执行环境，压入下一个执行环境;

### 闭包
- 概念：一块封闭的作用域，内部可以访问外部变量，外部不能访问内部;
- 作用：可避免变量污染，也可存储值;
- 弊端：可能造成内存泄漏（因为某些老浏览器垃圾清理机制比较陈旧，可能会认为变量还在使用中就不会释放内存）;

### call 和 apply
- 作用：用于执行函数时改变上下文，可替换上下文环境中的 this 对象;
- 区别：传参格式不同，call的传参是从参数2开始采用参数列表（逗号隔开）传递，apply则是参数2使用数组传递;

### 回调函数
- js中回调函数是将一个函数，作为参数传递给另一个正在被调用的函数内，被调用的函数内部完成一些程序后，再在内部调用传递过来的函数来达到按需调用的目的;

### 同步和异步
- 同步：程序等待执行，缺点是阻塞线程;
- 异步：程序不等待执行，如果想获取异步的结果，需要通过回调;

### 事件冒泡和事件捕获
- 概念：事件冒泡指嵌套元素绑定同类事件，内部元素事件触发后，接着会触发外部元素同类事件事件捕获则相反（由外向内）;
- 解决：调用事件方法event.stopPropagation();或者通过event.target判断触发元素来执行需要的程序;
- [demo](http://jsbin.com/exezex/4/edit?js,output);

### JSON格式，如何实现JSON对象和JSON字符串之间的转化
- 概念：一种轻量数据交互格式，例：`{"name": "lihao", "age": 24, "arr": [1, 2, 3], "obj": {}}`;
- JSON.stringify将json数据转化为字符串JSON.parse、eval将json字符串转化为json对象;

### 事件循环
- 概念：主线程中的代码任务，和异步任务队列中的代码任务，按规律压入执行栈中被执行的过程;
- 任务分类：主线程任务、异步任务（宏任务macro-task，微任务micro-task），宏任务包括：setTimeout、setInterval、setImmediate、I/O、UI、rendering，微任务包括：process.nextTick、Promises、Object.observe、MutationObserver;
- 任务执行顺序：（1）主线程任务、（2）取一个微任务队列中的任务、（3）取一个宏任务队列中的任务，重复（2）（3）直到任务队列被清空;

### 隐式类型转换
- 类型默认转换：
  - true == 1;
  - false == 0;
  - undefined == null;
- 运算符默认转换：
  - `+`运算会转换成 string 类型相加;
  - `-`运算会转换成 number 类型相减;


## Ajax

### ajax
- Asynchronous Javascript And XML（异步的javascript和xml），是一种无需重新加载整个网页的情况下，能够更新部分网页的技术;

### get 和 post
- get请求：数据会显示在浏览器url中，不安全，可发送数据大小有限，可用于普通的论坛等的请求;
- post请求：数据会通过数据缓存发送，相对get安全，可发送数据量大，可用于用户账号密码等的数据发送;

### 跨域
- 请求目标的主机名、协议和端口号和请求方不同则跨域，js中可通过jsonp或设置代理解决;

### jsonp
- 概念：前后端进行跨域交互的一种解决方案;
- 原理：利用标签`<script src="http://www.xxx.com/servlet.js?key1=val1&key2=val2&callback=success">`的跨域能力，通过后端在js环境内调用前端声明的回调函数来传递数据，局限是必须后端配合;


## 优化

### 防抖(debounce)和节流(throttle)
- 作用：用于高频事件触发导致效率低下的解决方案，例如resize、scroll、mousedown、mousemove、keyup、keydown等等容易频繁触发的事件;
- 防抖：用于只需要在高频触发事件停止时触发业务的场景，demo如下：
```js
	/**
	 * 防抖函数创建
	 * @param {Function} fuc 频繁执行的函数
	 * @param {Number} wait 毫秒
	 */
	function debonce(fuc, wait) {
		var timer = null;
		return function () {
			clearTimeout(timer);
			// 延迟执行
			timer = setTimeout(() => fuc.apply(this, arguments), wait);
		};
	}
```
- 节流：用于在高频触发事件中需要间断性执行业务的场景，demo如下：
```js
	/**
	 * 节流函数
	 * @param {Function} fuc 频繁执行的函数
	 * @param {Number} wait 毫秒
	 */
	function throttle(fuc, wait) {
		var start = 0
		return function () {
			let end = new Date().getTime();
			// 间隔一段时间执行一次
			if (end - start > wait) {
				start = end;
				fuc.apply(this, arguments);
			}
		}
	}
```

### 尾调用(Tail Call)
- 函数执行的最后一个行为是调用一个函数，且调用函数的返回值作为当前执行函数的返回值被返回，demo如下：
```js
	function f(x) {
		return g(x);
	}
```

### 大数据量dom加载优化
```js
	// 十万条数据
	const total = 100000

	// 一次插入 20 条，如果觉得性能不好就减少
	const once = 20

	// 渲染数据总共需要几次
	const loopCount = total / once

	// 已经渲染的数目
	let countOfRender = 0

	// 容器
	let ul = document.querySelector("ul");

	// 追加dom
	function add() {
		// 创建文档帧，先将数据追加到文档帧内，因为没有直接插入到dom树节点中，所以不会造成回流，来达到优化性能的目的
		const fragment = document.createDocumentFragment();
		
		for (let i = 0; i < once; i++) {
			const li = document.createElement("li");
			li.innerText = Math.floor(Math.random() * total);
			fragment.appendChild(li);
		}

		// 追加子节点包装动画帧
		ul.appendChild(fragment);

		// 已渲染数据量+1
		countOfRender += 1;

		loop();
	}

	// 循环追加数据
	function loop() {
		if (countOfRender < loopCount) {
			// 请求执行动画，下一次重绘前执行回调
			window.requestAnimationFrame(add);
		}
	}

	loop();
```


## 模块化

### 模块系统出现原因
- 原始的加载方式暴露了一些显而易见的弊端：
  - 原生加载方式全局作用域下容易造成变量冲突;
  - 文件只能按照`<script>`的书写顺序进行加载;
  - 开发人员必须主观解决模块和代码库的依赖关系;
  - 在大型项目中各种资源难以管理，长期积累的问题导致代码库混乱不堪;

### CommonJS
- 概念：在commonjs中允许通过 `exports` 或 `module.exports` 导出模块，通过 `require` 方法导入模块，nodejs采用此规范;
- 优点：在服务端模块便于重用，npm中的模块包非常多;
- 弊端：因为是同步的加载方式，不适用于浏览器这种需要异步加载资源的环境，不能满足并行加载需求;

### AMD
- 概念：异步的模块定义规范，通过 `require` 作为入口文件中导入模块的方法，主要通过 `define(id?, dependencies?, factory)` 定义模块（定义时可将依赖的其它模块依赖前置）和导入模块，在 `define` 中通过 `return` 导出模块，requirejs则采用此规范;
- 优点：适合在浏览器环境中异步加载模块可以并行加载多个模块;
- 弊端：因为是异步，代码阅读和书写比较困难;

### CMD
- 概念：通用模块定义规范，通过 `define(function(require, exports, module) {})` 定义模块，内部通过 `require` 导入模块，通过`exports` 或 `module.exports` 向外提供api，与 commonjs 规范保持了很大兼容性，sea.js则采用此规范;
- 优点：延迟执行，容易在node中运行;
- 弊端：依赖 SPM 打包，模块加载逻辑重（例如多次加载相同模块会产生多次相同代码）;

### ES6模块
- 概念：EcmaScript6 标准增加的 JavaScript 语言的模块定义，通过 `import [from]` 导入模块，`export [default]` 导出模块，ES6 模块的设计思想，是尽量的静态化，使得编译时就能确定模块的依赖关系，以及输入和输出的变量CommonJS 和 AMD 模块定义，都只能在运行时才能确定这些关系;
- 优点：容易进行静态分析面向未来的 EcmaScript 标准;
- 弊端：只有少数浏览器支持此规范，兼容性不好;


## 架构

### MVC
- 概念：View（视图层/客户端）-> Controller（控制层）-> Model（数据层）-> View;
- 特点：各部分通信都是单向的;

### MVP
- 概念：Model（数据层）<--> Presenter（控制层，包含视图逻辑）-><- View（视图层，不与Model交互）;
- 特点：解耦了View和Model，Presenter统一与View和Model进行双向通信;

### MVVM
- 概念：View（视图层）<--> ViewModel（视图数据模型，双向绑定引擎，观察者模式监听数据改变）<--> Model（数据层，可能是js对象）;
- 特点：视图和数据模型分离，数据双向绑定，低耦合（视图和模型可以独立改变互不影响）、可重用（视图逻辑可重用）、独立开发（开发人员可专注于业务逻辑和数据开发（VM层））、可测试（测试可单独针对VM层来写）;