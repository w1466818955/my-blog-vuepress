## 1. POST 和 GET 方式提交数据有什么区别？(面试常问 ⭐⭐⭐)

- get 的参数会显示在浏览器地址栏中，而 post 的参数不会显示在浏览器地址栏中；

- 使用 post 提交的页面在点击【刷新】按钮的时候浏览器一般会提示“是否重新提交”，而 get 则不会；

- 用 get 的页面可以被搜索引擎抓取，而用 post 的则不可以；

- 用 post 可以提交的数据量非常大，而用 get 可以提交的数据量则非常小(2k)，受限于网页地址的长度。

- 用 post 可以进行文件的提交，而用 get 则不可以。

## 2. 在 input 里，name 有什么作用？

1. 作为一个标识，通过 name 获取元素内的值
2. 在 radio，单选框中，通过设置相同的 name 来规定只能选择一个
3. 给页面加一个锚点，如下

```html
<a name="anchor"></a>
```

4. 作为服务器端的标示，我们可以在服务器端根据其 name 取得元素提交的值

## 3. label 有什么作用？如何使用？

- 作用：< label > 标签为 input 元素定义标注（标记），通常用于提示用户输入内容的地方。
- label 的使用：

1. 用 label 标签将 iput 标签包裹起来

```html
<label><input type="checkbox" name="cake" value="蛋糕" id="cakeId">蛋糕</label>
```

2. 第二种：在 input 标签中定义 id，在用 label 标签将内容包裹起来

```html
<input type="checkbox" name="cake" value="蛋糕" id="cakeId"><label for="cakeId">蛋糕</label>
```

## 4. radio 如何分组？

```html
  <form>
    <input type="radio" name="sex" value="male"> 男 <br>
    <input type="radio" name="sex" value="female"> 女<br>
    <input type="radio" name="age" value="adult"> 已成年<br>
    <input type="radio" name="age" value="child"> 未成年
  </form>
```

## 5. placeholder 属性有什么作用？

- placeholder 属性提供可描述输入字段预期值的提示信息（hint），该提示会在输入字段为空时显示，并会在字段获得焦点时消失

```html
<form action="demo_form.asp" method="get">
    <input type="search" name="user_search" placeholder="Search W3School" />
    <input type="submit" />
</form>
```

## 6. type=hidden 隐藏域有什么作用？

1. 隐藏域在页面中对于用户是不可见的，在表单中插入隐藏域的目的在于收集或发送信息，以利于被处理表单的程序所使用。浏览者单击发送按钮发送表单的时候，隐藏域的信息也被一块儿发送到服务器。

2. 有时候一个表单里有多个提交按钮，后端怎么知道用户是点击哪个按钮提交过来的呢？这时候我们只要加隐藏域，对每一个按钮起个名字(value 值)，后端接收到数据后，检查 value 值，就能知道是哪个按钮提交的了。

3. 有时候一个网页中有多个 form，我们知道多个 form 是不能同时提交的，但有时这些 form 确实相互作用，我们就可以在 form 中添加隐藏域来使它们联系起来。

4. JavaScript 不支持全局变量，但有时我们必须用全局变量，我们就可以把值先存在隐藏域里，它的值就不会丢失了。

5. 还有个例子，比如按一个按钮弹出四个小窗口，当点击其中的一个小窗口时其他三个自动关闭．可是 IE 不支持小窗口相互调用，所以只有在父窗口写个隐藏域，当小窗口看到那个隐藏域的值是 close 时就自己关掉。

## 7. CSRF 攻击是什么？如何防范？

- CSRF (Cross Site Request Forgery)攻击，中文名：跨站请求伪造。

- **原理**是攻击者构造网站后台某个功能接口的请求地址，诱导用户去点击或者用特殊方法让该请求地址自动加载。用户在登录状态下这个请求被服务端接收后会被误以为是用户合法的操作。对于 GET 形式的接口地址可轻易被攻击，对于 POST 形式的接口地址也不是百分百安全，攻击者可诱导用户进入带 Form 表单可用 POST 方式提交参数的页面。

- **防范措施**

1. 验证 HTTP Referer 字段

2. 在请求地址中添加 token 并验证

3. 在 HTTP 请求头中自定义属性并验证

## 8. 网页验证码是干嘛的？是为了解决什么安全问题？

1. 区分用户是计算机还是人的公共全自动程序。可以防止恶意破解密码、刷票、论坛灌水。

2. 有效防止黑客对某一特定注册用户用特定程序暴力破解方式进行不断的登录尝试。

## 9. 常见 Web 安全及防护原理？

1. sql 注入原理

- 是将 sql 代码伪装到输入参数中，传递到服务器解析并执行的一种攻击手法。也就是说，在一些对 server 端发起的请求参数中植入一些 sql 代码，
  server 端在执行 sql 操作时，会拼接对应参数，同时也将一些 sql 注入攻击的“sql”拼接起来，导致会执行一些预期之外的操作。

- 防范： \
  (1) 对用户输入进行校验  
  (2) 不适用动态拼接 sql

2. XSS（跨站脚本攻击）

- 往 web 页面插入恶意的 html 标签或者 js 代码。 \
  例如：在论坛放置一个看是安全的链接，窃取 cookie 中的用户信息

- 防范 \
  (1) 尽量采用 post 而不使用 get 提交表单 \
  (2) 避免 cookie 中泄漏用户的隐式

3. CSRF(跨站请求伪装）

- 通过伪装来自受信任用户的请求

- 防范： \
  在客服端页面增加伪随机数，通过验证码

4. XSS 和 CSRF 的区别： \
   (1) XSS 是获取信息，不需要提前知道其他用户页面的代码和数据包 \
   (2) CSRF 代替用户完成指定的动作，需要知道其他页面的代码和数据包
