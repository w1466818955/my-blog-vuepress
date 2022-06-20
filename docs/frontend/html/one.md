## 1. DOCTYPE 有什么作用？怎么写？

&emsp;&emsp;DOCTYPE 是 document type 的简写，它并不是一个标签，而是一个声明，它的作用是告诉浏览器，这个网页是什么样子的，以及这个网页的编码方式。
DOCTYPE 的声明必须放在 HTML 文档的第一行，并且必须是大写的。\
&emsp;&emsp;例如：<!DOCTYPE html></ html>

## 2. 列出常见的标签，并简单介绍这些标签用在什么场景？

- 标题标签

1. 语法：`<h1>标题</h1>、<h2>标题</h2>、<h3>标题</h3>、<h4>标题</h4>、<h5>标题</h5>、<h6>标题</h6>`
2. 场景：用于网页中的标题

- 段落标签

1. 语法：`<p>段落</p>`
2. 场景：用于网页中的段落

- 列表标签

1. 语法：`<ul>、<ol>、<li>、<dl>、<dd>、<dt>`
2. 场景：用于网页中的列表

- 图片标签

1. 语法：`<img>`
2. 场景：用于网页中的图片

- 表格标签

1. 语法：`<table>、<caption>、<thead>、<tbody>、<tr>、<th>、<td>`
2. 场景：用于网页中的表格

- 超链接标签

1. 语法：`<a>`
2. 场景：用于网页中的超链接

- 其他标签

`<div>、<span>、<br>、<hr>、<pre>、<code>、<blockquote>、<q>、<cite>、<abbr>、<acronym>、<del>、<ins>、<sub>、<sup>、<small>、<big>、<b>、<i>、<u>、<strong>、<em>、<s>、<strike>、<tt>、<kbd>、<var>、<dfn>、<mark>、<time>、<meter>、<progress>、<wbr>、<canvas>、<audio>、<video>、<source>、<embed>、<object>、<param>、<map>、<area>、<area>、<base>、<basefont>、<bgsound>、<br>、<command>、<col>、<colgroup>、<datalist>、<fieldset>、<form>、<frame>、<frameset>、<head>、<keygen>、<label>、<legend>、<link>、<meta>、<noframes>、<noscript>、<optgroup>、<option>、<param>、<script>、<style>、<table>、<tbody>、<td>、<tfoot>、<th>、<thead>、<tr>、<track>、<ul>、<var>、<video>、<wbr>`

## 3. 页面出现了乱码，是怎么回事？如何解决？

**（1）造成原因**

- 网页乱码出现通常是因为网页开发者没有按照规范来设置网页编码，浏览器打开这类网页的时候自动按照默认的编码来打开导致的。

**（2）解决办法**

- 把文件保存成 utf-8 的编码，代码如下：

```html
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<head>
```

## 4. title 属性和 alt 属性分别有什么作用？

- **title 属性** \
  title 属性是用来设置网页的标题，在浏览器的标题栏显示，如果不设置，则显示网页的网址。 \
  title 属性可以用在除了 base，basefont，head，html，meta，param，script 和 title 之外的所有标签。但是并不是必须的。
- **alt 属性** \
  alt 属性是用来设置图片的提示文字，在浏览器的弹出框中显示，如果不设置，则显示空。 \
  它只能用在 img、area 和 input 元素中。

## 5. HTML 的注释怎样写？

- 在 html 网页中注释语法

```html
<!-- 注释内容 -->
```

## 6. HTML5 为什么只写 <!DOCTYPE html> ？

HTML 4.01 中的 doctype 需要对 DTD 进行引用，因为 HTML 4.01 基于 SGML。
而 HTML 5 不基于 SGML，因此不需要对 DTD 进行引用，但是需要 doctype 来规范浏览器的行为。

## 7. data- 属性的作用？

- “data-” 属性用于存储页面或应用程序的私有自定义数据，data-属性可以让我们在所有 html 元素上增加自定义 data 属性，存储的 data 属性能被 JavaScript 调用。

- “data-” 属性不应该包含任何大写字母，并且在 data-后必须最少拥有一个字符，属性值可以是任意字符串

- **取值方法**

```js
// getAttribute
var id = document.getElementById('id');
var data = id.getAttribute(‘data-xxx’);
```

- **赋值方法**

```js
// dataset
var id = document.getElementById('id');
id.dataset.xxx; //取值
id.dataset.xxx = 'xxx'; //赋值
id.dataset.xxx2 = 'xxx2'; //新增
delete id.dataset.xxx; //删除
```

## 8. Web 标准以及 W3C 标准是什么？

- **web 标准**（网址：http://www.w3.org/ ）\
  Web 标准一般是将结构、表现、行为独立分开。 W3C 标准对 web 标准提出规范化要求。 \
  一般来说，网页由三部分组成，分别是结构（html），表现（css）以及行为（js）。

- **W3C 标准** \
  W3C 标准是一个国际标准组织，是为了规范网页的结构、表现、行为而制定的。 \
  标签字母要小写，双标签要闭合，标签不允许随意嵌套。

## 9. HTML 全局属性（Global Attribute）有哪些？

- **accesskey：** 设置快捷键，提供快速访问元素如 aaa ，在 windows 下的 firefox 中按 alt + shift + a 可激活元素;
- **class：** 为元素设置类标识，多个类名用空格分开，CSS 和 javascript 可通过 class 属性获取元素;
- **contenteditable：** 指定元素内容是否可编辑;
- **contextmenu：** 自定义鼠标右键弹出菜单内容
- **data-\*：** 为元素增加自定义属性;
- **dir：** 设置元素文本方向;
- **draggable：** 设置元素是否可拖拽;
- **dropzone：** 设置元素拖放类型：
- **copy, move, link hidden：** 表示一个元素是否与文档。样式上会导致元素不显示，但是不能用这个属性实现样式效果
- **id：** 元素 id，文档内唯一;
- **lang：** 元素内容的的语言
- **spellcheck：** 是否启动拼写和语法检查
- **style：** 行内 css 样式
- **tabindex：** 设置元素可以获得焦点，通过 tab 可以导航;
- **title：** 元素相关的建议信息;
- **translate：** 元素和子孙节点内容是否需要本地化;
