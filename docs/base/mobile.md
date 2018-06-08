## 推荐

### 库
- [fastclick](https://github.com/ftlabs/fastclick);
- [hammerjs](http://hammerjs.github.io/);
- [better-scroll](https://ustbhuangyi.github.io/better-scroll/#/zh);

## 原理

### 设备像素比dpr（devicePixelRatio）
- 真实的物理像素和移动设备的独立像素的比例;

### 判断是否是移动端
```js
	function isMobile() {
		return navigator.userAgent.match(/(blackberry|configuration\/cldc|hp |hp-|htc |htc_|htc-|iemobile|kindle|midp|mmp|motorola|mobile|nokia|opera mini|opera |Googlebot-Mobile|YahooSeeker\/M1A1-R2D2|android|iphone|ipod|mobi|palm|palmos|pocket|portalmmm|ppc;|smartphone|sonyericsson|sqh|spv|symbian|treo|up.browser|up.link|vodafone|windows ce|xda |xda_)/i) ? true : false;
	}
```


## bug

### click延迟和兼容部分无promise的移动端web容器
```html
	<script src="https://as.alipayobjects.com/g/component/fastclick/1.0.6/fastclick.js"></script>
	<script>
		if ('addEventListener' in document) {
			document.addEventListener('DOMContentLoaded', function() {
				FastClick.attach(document.body);
			}, false);
		}
		if(!window.Promise) {
			document.writeln('<script src="https://as.alipayobjects.com/g/component/es6-promise/3.2.2/es6-promise.min.js"'+'>'+'<'+'/'+'script>');
		}
	</script>
```

### 移动端滑动生硬
```css
	-webkit-overflow-scrolling: touch;
```

### 移动端元素点击背景闪烁
```css
	-webkit-tap-highlight-color: transparent;
	-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
	tap-highlight-color: rgba(0, 0, 0, 0);
```

### 1px边框问题
```css
	.border-1px {
		position: relative;
		height: 50vh;
		width: 50vw;
	}

	.border-1px:after {
		display: block;
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		border: 1px solid #000;
		transform-origin: 0 0;
		content: '';
	}

	@media (-webkit-min-device-pixel-ratio: 1.5), (min-device-pixel-ratio: 1.5) {
		.border-1px:after {
			width: 142%; 
			height: 142%;
			transform: scale(.7); 
		}
	}

	@media (-webkit-min-device-pixel-ratio: 2), (min-device-pixel-ratio: 2) {
		.border-1px:after { 
			width: 200%; 
			height: 200%;
			transform: scale(.5);
		}
	}
	
	@media (-webkit-min-device-pixel-ratio: 3), (min-device-pixel-ratio: 3) {
		.border-1px:after { 
			width: 300%; 
			height: 300%;
			transform: scale(.333); 
		}
	}
```

### 屏蔽用户选择网页元素
```css
	-webkit-touch-callout: none;
	-webkit-user-select: none;
	-khtml-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none;
```

### 输入框内部阴影
```css
	-webkit-appearance: none;
```

### 禁止文本缩放，避免字号放大缩小导致页面布局问题
```css
	-webkit-text-size-adjust: 100% !important;
	-moz-text-size-adjust: 100% !important;
	text-size-adjust: 100% !important;
```

### 禁止保存或拷贝图像
```css
	img	{
		-webkit-touch-callout: none;
	}
```

### 字体在移动端比例缩小后出现锯齿
```css
	-webkit-font-smoothing: antialiased;
```

### 优化渲染性能
- 开启硬件加速：
```css
	-webkit-transform: translate3d(0, 0, 0);
	-moz-transform: translate3d(0, 0, 0);
	-ms-transform: translate3d(0, 0, 0);
	transform: translate3d(0, 0, 0);
```

### 去除type为number的箭头
```css
	input::-webkit-outer-spin-button,input::-webkit-inner-spin-button {
		-webkit-appearance: none !important;
		margin: 0;
  	}
```