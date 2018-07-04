## 原理

### display: flex内文本溢出隐藏无效
- 改为利用 `display: flex` 控制布局，子元素不设置`display: flex`然后控制文本溢出;

### 滚动容器设置padding后，内容部分超出，右边滚动顶后不产生padding
- 滚动容器配置：overflow: auto;不要配置padding;
- 内部包裹容器：height: 100%;padding: 20px;最小宽高必须在此设置;
- 内容元素：需要可设置min-height: 100%;必须设置margin-bottom和包裹容器padding一致，因为包裹容器设置了height:100%所以padding很可能已经被滚动容器检测不到;


## 兼容

### get请求数据量限制转post表单提交
```js
	// 创建表单
	let formEl = document.createElement('form')
	// post请求
	formEl.method = 'POST'
	// 大数据量传到url
	formEl.action = baseUrl + url
	
    for (let key in param) {
		const val = param[key]
	
    	if (key) {
    		let input = document.createElement('input')
    		input.name = key
    		input.value = val
    		input.type = 'hidden'
    		formEl.appendChild(input)
    	}
	}
	
    document.body.appendChild(formEl)
    formEl.submit()
    document.body.removeChild(formEl)
```

### 360兼容模式onresize失效
```js
	/**
         * 兼容360兼容模式的onresize事件绑定
         * @param {function} callback 业务代码函数回调
		 * @param {object} option 一些选项，option.inherit：是否需要继承已有的onresize
         */
        compatible360Resize(callback, option = {}) {
            // 如果需要继承以前的resize则继承调用
			if (option.inherit && prevFunc) prevFunc(ev);
            
            // 避免360兼容模式resize失效
            let resize360Timer = null;
            let resizeFucCache = null;
            let resizeReady = false;

            window.onresize = (ev) => {
                if (prevFunc) prevFunc(ev);

                // 业务代码...
                callback();

                // 兼容360安全模式兼容模式 onresize
                if (!resizeReady) {
                    if (resize360Timer) {
                        clearTimeout(resize360Timer);
                    }
                    resize360Timer = setTimeout(() => {
                        window.onresize = resizeFucCache;
                        resizeReady = true;
                    }, 250);
                }
            }

            // 避免360兼容模式resize失效
            resizeFucCache = window.onresize;
        }
```

### 谷歌浏览器中表单元素 autocomplete 属性失效
- `autocomplete="new-password"`;

### 为使上传相同附件生效，会重置 input.value = ''；部分浏览器会重新触发 input 的 change 事件
- change入口处判断 input.value 为空则直接 return，避免不必要的代码执行;


## 小程序

### we-cropper插件和Array原型定义冲突：
- 使用`we-cropper`插件时，因为项目小程序上在`Array`原型上定义了方法，导致真机上截图滑动黑屏，所以想使用此插件不能定义`Array`上的原型；