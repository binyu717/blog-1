## 基础

### 预防IE6,7,8禁用脚本用户解决方案
- 插入脚本：
```html
	<!--[if lte IE 8]> 
		<noscript>
			<div class="ie-noscript-warning">
				您的浏览器禁用了脚本，请
				<a href="...">查看这里</a>来启用脚本
			</div>
		</noscript>
	<![endif]-->
```

### 将老版本IE兼容H5和CSS3
- 兼容H5：下载html5shiv.js文件，然后将`<!--[if lt IE9]> <script src="html5shiv.js"></script><![endif]-->`添加到head标签中最后;
- 兼容css3：
```html
    <!--[if lte IE 8]>
    	<script src="http://cdn.bootcss.com/selectivizr/1.0.2/selectivizr.js"></script>
    <![endif]-->
```
- 兼容h5和css3：
```html
    <!--[if lt IE 9]>
    	<script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
    	<script src="http://css3-mediaqueries-js.googlecode.com/svn/trunk/css3-mediaqueries.js"></script>
    <![endif]-->
```

### css hack
```css
    .selector {
    	-ms-border-radius: 15px; /* IE */
    	-moz-border-radius: 15px; /* Firefox */
    	-o-border-radius: 15px; /* Opera */
    	-webkit-border-radius: 15px; /* Safari和Chrome */
    	property: value;     /* 所有浏览器 */
    	property: value\9;   /* 所有IE浏览器 */ 
    	property: value\0;   /* IE8 */
    	+property: value;    /* IE7 */
    	_property: value;    /* IE6 */
    	*property: value;    /* IE6-7 */
    }
```

### safari浏览器中input右侧出现小人图标解决方法
```css
    input::-webkit-contacts-auto-fill-button { 
    	display: none !important; 
    	position: absolute; 
    	right: 0; 
    	visibility: hidden;
    	pointer-events: none;
    }
```

### IE下input内置清除按钮解决方案
```css
    input::-ms-clear,
    input::-ms-reveal {
    	display:none;
    }
```

### 获取浏览器版本（FF Chrome IE11 IE10 IE9  Edge）
```js
    function getCurBrowser() {
    	var webInfo = navigator.userAgent;
    	var chromeVendor = navigator.vendor;
    	if(webInfo.indexOf('OPR') !== -1) {
    		return 'Opera';
    	} else if (webInfo.indexOf('Edge') !== -1) {
    		return 'Edge';
    	} else if (webInfo.indexOf('Firefox') !== -1) {
    		return 'FF';
    	} else if (webInfo.indexOf('MSIE 9.0') !== -1) {
    		return 'IE9';
    	} else if (webInfo.indexOf('MSIE 10.0') !== -1) {
    		return 'IE10';
    	} else if (webInfo.indexOf('Trident') !== -1) {
    		return 'IE11';
    	} else if ((chromeVendor != '' 
    		&& chromeVendor != undefined 
    		&& chromeVendor != null 
    		&& chromeVendor.indexOf('Google') !== -1) 
    		|| webInfo.indexOf('Chrome') !== -1) {
    		return 'Chrome';
    	} else if ( webInfo.indexOf('Safari') !== -1 ) {
    		return 'Safari';
    	} else {
    		return 'other';
    	}
    }
```