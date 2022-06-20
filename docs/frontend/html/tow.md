## 1. meta 有哪些常见的值？

- meta 标签用来描述一个 HTML 网页文档的属性，例如作者、日期和时间、网页描述、关键词、页面刷新等

- 常见的 meta 标签属性

1. name 属性 \
   （1）viewport：定义浏览器窗口的视窗为自适应大小

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<!--
   content 参数：
   width： viewport 宽度(数值/device-width)
   height： viewport 高度(数值/device-height)
   initial-scale： 初始缩放比例
   maximum-scale： 最大缩放比例
   minimum-scale： 最小缩放比例
   user-scalable： 是否允许用户缩放(yes/no)
-->
```

（2） keywords：用于告诉搜索引擎，你网页的关键字

```html
<meta name="keywords" content="Ygm个人博客" />
```

（3）description：用于告诉搜索引擎，你网站的主要内容

```html
<meta name="keywords" content="记录前端学习的点点滴滴" />
```

（4）author：用于标注网页作者

```html
<meta name="keywords" content="个人博客" />
```

（5）copyright：用于标注版权信息

```html
<meta name="keywords" content="Ygm" />
```

2. http-equiv 属性

```html
<meta http-equiv="参数" content="具体的描述" />
```

（1）content-Type(设定网页字符集)(推荐使用 HTML5 的方式)

```html
<meta http-equiv="content-Type" content="text/html;charset=utf-8" /> // 旧的HTML，不推荐
<meta charset="utf-8" /> // HTML5设定网页字符集的方式，推荐使用UTF-8
```

（2）X-UA-Compatible(浏览器采取何种版本渲染当前页面)

```html
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" /> //
指定IE和Chrome使用最新版本渲染当前页面
```

（3） cache-control(指定请求和响应遵循的缓存机制)

```html
<meta http-equiv="cache-control" content="no-cache" />
```

（4）expires(网页到期时间)

```html
<meta http-equiv="expires" content="Sunday 26 October 2020 12:00 GMT" />
```

（5） refresh(自动刷新并指向某页面)

```html
<meta http-equiv="refresh" content="2；URL=http://www.xxx.com" />
```

（6） Set-Cookie(cookie 设定)

```html
<meta http-equiv="Set-Cookie" content="name, date" /> //格式

<meta
  http-equiv="Set-Cookie"
  content="User=Lxxyx; path=/; expires=Sunday, 10-Jan-16 12:00:00 GMT"
/>
//具体范例
```

## 2. meta viewport 是做什么用的，怎么写？

- **概念** \
  通常 viewport 是指视窗、视口，浏览器上(也可能是一个 app 中的 webview)用来显示网页的那部分区域。在移动端和 pc 端视口是不同的，pc 端的视口是浏览器窗口区域，而在移动端有三个不同的视口概念：布局视口、视觉视口、理想视口。
- **语法**

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<!--
   content 参数：
   width： viewport 宽度(数值/device-width)
   height： viewport 高度(数值/device-height)
   initial-scale： 初始缩放比例
   maximum-scale： 最大缩放比例
   minimum-scale： 最小缩放比例
   user-scalable： 是否允许用户缩放(yes/no)
-->
```

## 3. 如何在 HTML 页面上展示&lt;div&gt;&lt;/div&gt;这几个字符？

```html
&lt;div&gt;&lt;/div&gt; 会显示为
<div></div>
```

## 5. 你是如何理解 HTML 语义化的？(面试常问 ⭐⭐⭐)

- **HTML 语义化：** 就是页面去掉样式或者加载失败的时候能够让页面呈现出清晰的结构。

- **语义化的标签：** header、footer、nav、menu、section、article 等。

- **语义化的好处：**
  1. 为了在没有 CSS 的情况下，页面也能呈现出很好地内容结构、代码结构
  2. 用户体验：例如 title、alt 用于解释名词
  3. 有利于 SEO：利于被搜索引擎收录，更便于搜索引擎的爬虫程序来识别
  4. 方便其他设备解析（如屏幕阅读器、盲人阅读器、移动设备）以意义的方式来渲染网页
  5. 便于项目的开发及维护，使 HTML 代码更具有可读性

## 6. 前端需要注意哪些 SEO?

- 合理的 title（标题） 、 description（类型、说明） 、 keywords（关键字）

- 语义化的 HTML 代码，符合 W3C 规范：语义化代码让搜索引擎容易理解⽹⻚

- 重要内容 HTML 代码放在最前

- 重要内容不要⽤ js 输出：爬⾍不会执⾏ js 获取内容

- 少⽤ iframe ：搜索引擎不会抓取 iframe 中的内容（内嵌框架）

- ⾮装饰性图⽚必须加 alt

