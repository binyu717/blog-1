## 网络

### TCP/IP协议
- 传输控制协议/互联网协议（Transmission Control Protocol/Internet Protocol），是最基本的网络通讯协议，由网络层的IP协议和传输层的TCP协议组成，它定义了电子设备如何连入因特网，以及数据如何在它们之间传输的标准;

### HTTP协议
- 超文本传输协议（HyperText Transfer Protocol），在互联网应用最广泛的协议之一，最初目的用于发送接收html页面;

### SSL
- SSL(Secure Sockets Layer 安全套接层),及其继任者传输层安全（Transport Layer Security，TLS）是为网络通信提供安全及数据完整性的一种安全协议。TLS与SSL在传输层对网络连接进行加密;

### DNS解析
- 域名系统（Domain Name System），在万维网上作为域名和IP地址相互映射的数据库，DNS解析也就是通过域名解析获得映射ip地址的过程;

### 一次HTTP请求的过程
- 根据请求地址，浏览器先搜索自身的DNS缓存，查看是否存在未过期的地址;
- 浏览器搜索系统的DNS缓存，查看是否存在未过期的地址;
- 浏览器搜索本地的host文件;
- 浏览器发起一个DNS系统调用;
- 宽带运营商服务器搜索本身缓存;
- 宽带运营商服务器发起一个迭代的DNS解析请求，用于获取对应域名的ip地址;
- 宽带运营商服务器把请求到的结果返回操作系统缓存起来;
- 操作系统把结果返回浏览器，然后浏览器将访问对应的ip地址（三次握手和服务器建立TCP/IP连接）;
- 浏览器向服务器发送请求，获取页面的数据（HTML、CSS、JS、资源文件）;

### HTTP请求的方式
- GET:常用于获取服务器资源（网页文件、图片等等）;
- POST:常用于向服务器提交数据;
- PUT:向服务器提交数据，通常指定了资源的存放位置;
- DELETE:用于删除资源;
- HEAD:获取资源，不呈现请求参数，只带请求头;
- TRACE:请求返回服务器获取到的数据信息，常用来测试和诊断信息;
- OPTIONS：获取当前请求所支持的方法，请求成功后返回所支持的方法（get、post等等）;

### HTTP请求状态码
- 200：服务器响应成功;
- 400：请求错误（语法，url等）;
- 401：服务器未授权;
- 403：服务器拒绝访问;
- 404：未找到目标;
- 500：服务器出错;
- 503：服务器无法使用;