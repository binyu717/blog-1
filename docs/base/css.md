## 推荐

### 书籍
- 《CSS权威指南》;
- 《精通CSS高级Web标准解决方案》;
- 《CSS SECRETS》;

### css库
- [csshake](http://elrumordelaluz.github.io/csshake/);
- [animate.css](https://daneden.github.io/animate.css/);

### 文档
- [css速查表](http://www.css88.com/book/css/);

### 文章
- [flex弹性布局](http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html);


## 简介

### css
- 级联（层叠）样式表（Cascading Style Sheets），使显示和内容分离;

### 常用CSS布局有哪些
- 一列布局、两列布局、三列布局、混合布局;


## css3

### 边框、背景
- 圆角、边框图、阴影、渐变等;

### 颜色
- 透明度、rgba、hsl等;

### 文本
- 阴影等;

### 盒子
- 弹性盒子;

### 转换、过渡、动画
- transform、transition、animation;

### 新选择器
- nth-child(n)、[att*="val"]等;

### 单位
- vw、vh等;


## 原理   

### 盒子模型
- 盒子模型主要内容包括：content、padding、border、margin;
- IE盒子模型：width和height属性包括content、padding、border三部分;
- 标准盒子模型：width和height属性只包括content，不包含padding、border;

### 优先级
- 通常：后加载CSS样式，优先于先加载的CSS样式;
- 特指度（ICE--id、class、element）：!important > id选择器（100） > class选择器（10） > 标签选择器（1）> *通配符（0）;
- 作用域：style属性内联样式 > style标签外嵌样式 > link标签外链样式;

### float（浮动）特点
- 表现：脱离标准流，停留在元素旁，可设置宽高，不会扩张父元素高度;
- 清除浮动：display: block;clear: both;避免浮动对周边元素的影响;

### position各属性的作用
- static：标准流定位，从左向右、从上向下流式定位，默认此定位模式;
- relative：相对定位，相对于自己默认定位状态下的相对定位;
- absolute：绝对定位，脱离标准流，相对于除 static 之外的第一个定位祖先元素定位;
- fixed：相对 window 固定定位;

### margin原理
- 重叠：相邻元素的margin值，同正或同负取绝对值较大值作公用margin，一正一负取相加值做公用margin（可能为了统一兄弟元素间间距）;
- 百分比：margin设置百分比是相对于父元素宽度的百分比，如果本身绝对定位则相对于第一个非 static 定位的祖先元素宽度的百分比;
- auto：用于block元素填充剩余空间，如果居中元素宽度超出父元素盒子范围则不会填充剩余空间;

### css上下文
- BFC
  - 概念：块级格式化上下文，内部盒子垂直放置，相临盒子的margin重叠，内部样式不影响外部，不会和float元素重叠，内部浮动元素高度会被算在容器高度中;
  - 形成条件：float属性不为none、overflow不为visible、position为absolute或fixed、display为inline-block、table-cell、table-caption;
- IFC
  - 概念：内联格式化上下文、内部盒子水平放置;
  - 形成条件：display为inline、inline-block的外层会形成IFC环境，用于水平居中内联元素或内联元素垂直居中;
- GFC
  - 概念：网格布局格式化上下文;
  - 形成条件：display设置为grid;
- FFC
  - 概念：自适应格式化上下文;
  - 形成条件：display设置为flex、inline-flex;

### 定位对盒子模型的影响
- 绝对定位对元素的影响
  - display转化成block;
  - inline、inline-block、block转化成block;
  - inline-flex、flex转化成flex;
  - table、inline-table转化成table;
  - grid、inline-grid转化成grid;
  - table-*系列元素转化成 block 形式;
  - inline-*转化为对应的 * 类型;
  - flow-root、list-item、none保持不变;
  - 不影响 display: contents，因为文本没盒模型体现;
  - transform 属性会影响内部绝对元素的相对定位参照，使内部决定定位元素相对本身定位;
  - 默认情况（无中间非static定位祖先元素，且无特殊属性祖先元素存在），绝对定位元素相对 html 盒子定位;


## css技巧

### 兼容多种浏览器默认样式
- 为html、body元素设置：`margin: 0;padding: 0;`;

### 居中的多种方式
- flex容器设置如下样式可使内部所有元素完全居中
```css
    display: flex;
    justify-content: center;
    align-items: center;
```
- 未知宽高元素绝对定位居中
```css
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
```
- float + relative已知宽高元素设置如下样式可使自己完全居中
```css
    position: relative;
    left: 50%;
    top: 50%;
    float: left;
    width: WIDTH_VALUE;
    height: HEIGHT_VALUE;
    margin: -WIDTH_VALUE/2 0 0 -HEIGHT_VALUE/2;
```
- absolute已知宽高元素相对定位祖先元素完全居中
```css
    父元素：`position: relative;`
    子元素：`position: absolute; left:0; right:0; top:0; bottom:0; margin: auto;`
```
- inline元素自己完全居中，设置父元素样式如下
```css
    line-height: 父元素自身高;
    text-align: center;
```
- block已知宽度的元素本身左右居中设置`margin: 0 auto;`;

### 多重边框实现
- 利用 box-shadow 隐藏可选的第4个参数可设置实心区域如：box-shadow: 0 0 0 5px #666;

### 伪元素content属性的高级利用
- [见大佬链接](http://www.zhangxinxu.com/wordpress/2010/04/css-content内容生成技术以及应用/);

### 等比缩放技巧，此处是宽高比2:1的例子
```css
  width: 100%;
  height: 0;
  padding-bottom: 50%;
```

### 左右分栏，高度自动相等
```css
  包裹容器：overflow: hidden;
  左右分栏：float:left; margin-bottom:-3000px; padding-bottom:3000px;
```