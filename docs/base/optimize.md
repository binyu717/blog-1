## 推荐

### 文章
- [掘金好文](https://juejin.im/post/5b0b7d74518825158e173a0c);


## html

### 省略 src、href 等属性的协议部分
- 能简单起到节省资源的目的;

### dns预解析
- 采用 dns 预解析，`<link rel="dns-prefetch" href="http://this-is-a.com">`，可对域名进行缓存，提高请求效率;

### 预加载
- `<link rel="preload" href="style.css" as="style">`;
- `<link rel="preload" href="main.js" as="script">`;


## css

### 把容易触发重排重绘的元素单独触发渲染层，使之与静态元素隔离，采用 GPU 加速（硬件加速）
```css
    transform: translateZ(0);
    backface-visibility: hidden;
```


## 资源

### 使用字体图标
- [字体图标](http://www.iconfont.cn/);

### 优化图片请求
- [雪碧图](https://www.toptal.com/developers/css/sprite-generator);
- [使用 WebP 格式图片](https://www.upyun.com/webp);

### 使用cdn加速
- 第三方资源可采用cdn加速，提高资源加载效率，减少项目体积;


## webpack

### html压缩配置
```javascript
    new HtmlWebpackPlugin({
        template: 'index.html',
        filename: 'index.html',
        minify: {
            removeComments: true,
            collapseWhitespace: true,
            removeRedundantAttributes: true,
            useShortDoctype: true,
            removeEmptyAttributes: true,
            removeStyleLinkTypeAttributes: true,
            keepClosingSlash: true,
            minifyJS: true,
            minifyCSS: true,
            minifyURLs: true,
        },
        chunksSortMode: 'dependency'
    })
```