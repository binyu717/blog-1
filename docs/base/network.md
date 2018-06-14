## 网络

### 经典5层网络模型
- 客户端：
  - 应用层：http、ftp，基于tcp/ip定义http等协议传输方式;
  - 传输层：tcp/ip、udp，提供端到端的服务方式的定义;
  - 网络层：定义数据节点间传输数据的方式;
  - 数据链路层：在物理层基础上，建立数据连接;
  - 物理层：物理设备（网卡、光线等）;
- 服务端：
  - 应用层;
  - 传输层;
  - 网络层;
  - 数据链路层;
  - 物理层;

### TCP/IP协议
- 传输控制协议/互联网协议（Transmission Control Protocol/Internet Protocol），是最基本的网络通讯协议，由网络层的IP协议和传输层的TCP协议组成，它定义了电子设备如何连入因特网，以及数据如何在它们之间传输的标准;
- 三次握手：
  - 客户端发送SYN=1、Seq=X数据包告诉服务端需要创建连接;
  - 服务端反馈SYN=1、ACK=X+1、Seq=Y数据包给客户端允许连接;
  - 客户端发送ACK=Y+1、Seq=Z数据包表示确认接收到服务端反馈，然后成功创建连接;
- 三次握手原因：待确认后真实连接，避免服务端没必要的网络开销;
- 四次挥手：
  - 客户端发送Fin=1、Seq=X、Ack=Z数据包告诉服务端需要关闭连接;
  - 服务端反馈Ack=X+1、Seq=Z数据包给客户端，确认收到客户端的需求;
  - 服务端反馈Fin=1、Ack=X、Seq=Y数据包给客户端，并关闭连接;
  - 客户端反馈Ack=Y、Seq=X给服务端确认收到信息;
- SYN（标志位，创建连接）、Seq（序列号，对方用于确认时需要的随机号）、Ack（确认收到对方请求，反馈确认信息）、Fin（标志位，关闭连接）;

### uri、url、urn
- uri：统一资源标识符（Uniform Resource Identifier），表示唯一的互联网资源信息，包含url和urn;
- url：统一资源定位符（Uniform Resource Locator），包含协议（http、ftp）、认证（user:password）、主机地址、端口号（默认80）、资源路径、查询参数;
- urn：统一资源名称（Uniform Resource Name），资源移动后还能被找到;

### http协议
- 概念：超文本传输协议（HyperText Transfer Protocol），在互联网应用最广泛的协议之一，最初目的用于发送接收html页面;
- 版本：
  - 0.9：只允许客户端发送GET这一种请求，且不支持请求头;
  - 1.0：支持头信息、响应对象不局限超文本、支持GET、POST、HEAD方法请求，支持长连接（默认使用短连接）;
  - 1.1：keepalive连接、新增OPTIONS,PUT, DELETE, TRACE等方法;
- 请求报文
  - 首行：请求方式（get、post等等）、url、http版本（http/1.0）;
  - 请求头：希望接收的数据类型（Accept），语言（Accept-Language）等;
- 响应报文
  - 首行：协议版本（http/1.0），状态码（200、404等等）;
  - 响应头：反馈的数据类型（content-type）、数据长度（Content-length）等;
  - 响应体：返回给请求端的数据;
- 请求方式：
  - GET：常用于获取服务器资源（网页文件、图片等等）;
  - POST：常用于向服务器提交数据;
  - PUT：向服务器提交数据，通常指定了资源的存放位置;
  - DELETE：用于删除资源;
  - HEAD：获取资源，不呈现请求参数，只带请求头;
  - TRACE：请求返回服务器获取到的数据信息，常用来测试和诊断信息;
  - OPTIONS：预请求，浏览器对于跨域请求安全的检测，用于获取当前请求所支持的方法，请求成功后返回所支持的方法（get、post等等），然后再发送实际的请求;
- 响应状态码：
  - 200：服务器响应成功;
  - 202：服务器已接受请求，但未处理请求;
  - 301：请求资源路径已经被永久移动到新位置;
  - 302：请求资源暂时被重定向到另一个目标位置;
  - 304：资源未修改，浏览器端可直接取缓存;
  - 305：请求方应该使用代理访问请求的资源;
  - 400：请求方错误（语法，url等）;
  - 401：服务器未授权;
  - 403：服务器拒绝访问;
  - 404：未找到目标;
  - 405：禁止请求的方法;
  - 408：服务器等待请求超时;
  - 500：服务器出错;
  - 503：服务器暂时无法使用;

### cookie
- 浏览器常用的一种缓存数据的形式;
- 设置响应头Set-Cookie：'id=123'或Set-Cookie：['id=123;max-age=2', 'name=666;domain=root.com']，可使浏览器缓存cookie数据;

### http长连接
- 方便复用tcp/ip连接，支持并发http请求，提高请求效率;
- 设置响应头Connection: 'close' 可关闭每次请求的长连接保持，让每一个请求都重新建立tcp/ip连接;

### cors跨域请求
- 概念：浏览器端请求方的url中协议、主机号、端口号和资源所在服务器映射的协议、主机号、端口号只要存在一个不同，则服务器拒绝被访问造成跨域;
- 解决：
  - jsonp：利用script标签允许跨域请求机制将客户端定义的接受数据的函数传递给后端，让后端通过在js环境调用此方法并传入响应参数回调给客户端;
  - 服务器端设置Access-Control-Allow-Origin允许跨域访问;

### http头缓存
- Cache-Control缓存：
  - public、private、no-cache（不缓存页面信息）、no-store（不缓存请求和响应信息）、no-transform（不允许代理服务器压缩、优化内容）;
  - max-age=SECONDS（最大缓存到期时间）、s-maxage=SECONDS（代理的最大缓存到期时间）、max-stale=SECONDS（过期之后允许的最大缓存到期时间）;
  - must-revalidate（设置过期后，如果已经过期，必须重新从服务器发送请求获取数据验证是否真过期，不能直接取缓存）、proxy-revalidate（针对缓存服务器，过期后也必须重新校验）;
- Last-Modified：最后的资源更新时间，超过时间重新获取缓存;
- Etag：资源唯一性签名（hash之类的保证唯一性的签名）;

### 数据协商
- 请求方：
  - Accpet（接受类型）;
  - Accept-Encoding（接受压缩类型）;
  - Accept-Language（接受语言）;
- 响应方：
  - Content-Type（响应类型）;
  - Content-Encoding（响应压缩类型）;
  - Content-Language（响应语言）;

### http头安全，CSP（Content-Security-Policy）
- 作用：资源安全，限制资源获取、报告资源获取越权;
- Content-Security-Policy（可避免XSS攻击等脚本注入）：
  - 'default-src http: https:'，只允许资源来自http、https请求;
  - 'default-src \'self\''，只允许来自同域下的资源;
  - 'form-action \'self\''，限制form表单提交的目标源;
- Content-Security-Policy-Report-Only：不强制限制资源请求和提交，只报告问题，值和Content-Security-Policy相同;

### SSL
- SSL(Secure Sockets Layer 安全套接层),及其继任者传输层安全（Transport Layer Security，TLS）是为网络通信提供安全及数据完整性的一种安全协议。TLS与SSL在传输层对网络连接进行加密;

### DNS
- 域名系统（Domain Name System），在万维网上作为域名和IP地址相互映射的数据库，DNS解析也就是通过域名解析获得映射ip地址的过程;

### 一次HTTP请求过程
- 请求开始，浏览器搜索自身DNS缓存;
- 浏览器搜索系统DNS缓存;
- 浏览器发起DNS解析;
- 宽带运营商服务器搜索自身缓存;
- 宽带运营商发起DNS解析请求，获取域名对应的ip地址，然后将结果反馈给系统由系统通知浏览器;
- 浏览器对真实的ip地址所在服务器通过三次握手建立tcp/ip连接;
- 浏览器对服务器发送请求，获取服务器资源（HTML、CSS、JS、其它资源文件、数据等）;