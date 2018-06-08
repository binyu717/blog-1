## 推荐

### 文章
- [简书js设计模式demo](http://www.jianshu.com/p/ab1f737ab424);


## 原理

### 单例模式
```js
    /**
     * 构建创建 dom 的单例的函数
     * @param {function} fn 创建 dom 的业务函数
     */
    const singleton = function ( fn ) {
        // 定义空引用
        const result = null;

        //返回一个可以创建单例对象的函数
        return function() {
            // 如果 result 存在则返回 result 对象，否则执行业务函数获取单例 dom
            return result || ( result = fn.apply( this, arguments ) );
        };
    };

    /**
     * 创建遮罩层（因为遮罩层只需要一个，所以通过单例模式来构建此函数）
     */
    const createMask = singleton(() => {
        const dom = document.body.appendChild( document.createElement('div') );
        
        dom.style.height = '300px';
        dom.style.background = 'skyBlue';
        dom.style.textAlign = 'center';
        dom.style.lineHeight = dom.style.height;
        dom.innerHTML = 'Hello 单例模式';

        return dom;
    });
```

### 代理模式
```js
    // 声明一个gril类
    function Girl(name) {
        this.name = name;
    };

    // 这是原本要送花的人
    function Man(girl) {
        this.girl = girl;

        this.sendGift = (gift) => {
            alert("Hi " + girl.name + ", Man送你一个礼物：" + gift);
        }
    };

    // 代理者
    function Proxy( girl ) {
        this.girl = girl;
        
        this.sendGift = (gift) => {
            ( new Man( girl ) ).sendGift( gift );
        }
    };
    
    // 通过代理者帮助主角去代理执行送礼物的操作
    const proxy = new Proxy( new Girl("大妹子") );
    proxy.sendGift( "666朵玫瑰" );
```

### 外观模式
```js
    /* 底层的方法 */
    const getName = () => {
        return 'wanpeng';
    };
    
    const getSex = () => {
        return 'man';
    };
    
    /* 使用方不需要知道底层方法的实现，直接调用即可 */
    const getUserInfo = () => {
        return {
            sex: getSex(),
            name: getName()
        };
    }
```

### 简单工厂模式
```js
    // 一个简单的手机工厂
    const mobileFactory = {
        createMobile(type) {
            const mobile = null;

            switch (type) {
                case 'iphone':
                    mobile = 'iphone 7 plus';
                    break;
                
                case '小米':
                    mobile = '小米5';
                    break;
                
                case '华为':
                    mobile = '华为P7';
                    break;
            }

            return mobile;
        }
    }

    // 一个手机商店
    const MobileShop = function () {};
    MobileShop.prototype = {
        constructor: MobileShop,
        /**
         * 商店获取手机
         * @param type {String} 手机类型
         */
        getMobile(type) {
            return mobileFactory.createMobile(type);
        }
    };

    const shop = new MobileShop();
    alert( shop.getMobile('iphone') );
```

### 观察者模式
```js
    // 事件处理类
    function Events() {
        // 缓存
        const cache = {};
        
        // 监听
        function listen(eventKey, fn) {  
            cache[eventKey] = fn;
        }

        // 触发
        function trigger(eventKey, data) {
            // 如果有回调函数则调用
            if (cache[eventKey]) {
                cache[eventKey](data);
            }
        };
        
        return {
            listen: listen,
            trigger: trigger
        };
    }
    
    const tv = Events();

    // 监听（订阅者）
    tv.listen('play', (data) => {
        alert ('你的名字：' + data.name);
    });

    // 触发（发送者）
    tv.trigger('play', {'name': 'WanPeng'});
```

### 桥接模式
```js
    /*
        桥接模式用于抽象和实现的分离，各自互不影响；
        此处实现部分是遮罩层和script标签的创建，抽象部分是单例构建函数；
        这里就算多创建几个实现方法，也和构建单例的方法中的实现不影响
    */

    // 用于构建单例的工具函数
    function singleton( fn ) {
        const result;
        return function() {
            return result || ( result = fn.apply( this, arguments ) );
        };
    }

    // 创建遮罩层单例方法
    const createMask = singleton(() => {
        return document.body.appendChild( document.createElement('div') );
    });

    // 创建script标签的单例方法
    const createScript = singleton(() => {
        return document.body.appendChild( document.createElement('script') );
    });
```

### 策略模式
```js
    // 定义策略对象
    const strategy = {
        "A": function(salary) {
            return salary * 4;
        },
        "B" : function(salary) {
            return salary * 3;
        },
        "C" : function(salary) {
            return salary * 2;
        } 
    };

    // 根据不同条件获取不同策略
    function getStrategyResult(level, salary) {
        return obj[level](salary);
    };

    console.log(getStrategyResult('A', 10000));
```

### 访问者模式
```js
    // 访问者  
    function Visitor() {
        this.visit = ( concreteElement ) => {  
            concreteElement.doSomething();
        };
    }
    
    // 元素类
    function ConceteElement() {

        this.doSomething = () => {  
            console.log("这是一个具体元素");  
        };
        
        this.accept = function( visitor ) {  
            visitor.visit(this);
        };
    }
    
    // 通过元素去接受一个访问者，然后通过访问者去对元素本身进行访问
    var ele = new ConceteElement();
    var v = new Visitor();
    ele.accept( v );
```

### 适配器模式
```js
    // JQuery的获取选择器的方法
    function $() {
        var elments = new Array();
        
        for (var i = 0; i < arguments.length; i++) {
            var element = arguments[i];
            
            if (typeof element == 'string') {
                element = document.getElementById(element);
            }
            if (arguments.length == 1) {
                return element;
            }
            
            elments.push(element);
        }
        
        return elements;
    }
    
    // YUI库的获取元素的方法
    YAHOO.util.Dom.get = (el) => {
        if ( YAHOO.lang.isString(el) ) {
            return document.getElementById(el);
        }
        
        if ( YAHOO.lang.isArray(el) ) {
            var c = [];
            
            for (var i = 0, len = el.length; i < len; i++) {
                c[c.length] = YAHOO.util.Dom.get( el[i] );
            }
            
            return c;
        }
        
        if (el) {
            return el;
        }
        
        return null;
    }
    
    /*---------  创建适配器处理函数  ----------*/
    // JQ函数转YUI函数
    function $2getAdapter(){
        return YAHOO.util.Dom.get(arguments);
    }

    // YUI函数转JQ函数
    function get2$Adapter(el){
        return $.apply(window, el instanceof Array ? el : [el]);
    }
    
    // 如果需要在JQ编码中适配YUI库选择器获取则重新赋值JQ函数
    $ = $2getAdapter;
    
    // 如果需要在YUI编码中适配JQ库选择器获取则重新赋值YAHOO.util.Dom.get函数
    YAHOO.util.Dom.get = get2$Adapter;
```