## 1. 选择器

**css 常用的选择器有：**

- id 选择器（#box），选择 id 为 box 的元素

- 类选择器（.one），选择类名为 one 的所有元素

- 标签选择器（div），选择标签为 div 的所有元素

- 后代选择器（#box div），选择 id 为 box 元素内部所有的 div 元素

- 子选择器（.one>one_1），选择父元素为.one 的所有.one_1 的元素

- 相邻同胞选择器（.one+.two），选择紧接在.one 之后的所有.two 元素

- 群组选择器（div,p），选择 div、p 的所有元素

还有一些使用频率相对没那么多的选择器：

- 伪类选择器

```css
:link:// 选择未被访问的链接
:visited:// 选取已被访问的链接
:active:// 选择活动链接
:hover: // 鼠标指针浮动在上面的元素
:focus:// 选择具有焦点的
:first-child:// 父元素的首个子元素
:last-child:// 父元素最后一个子元素
```

## 2. 优先级

!important > id 选择器 > 类选择器 > 标签选择器 > 后代选择器 > 子选择器 > 相邻同胞选择器 > 群组选择器

## 3. 属性继承

在 css 中，继承是指的是给父元素设置一些属性，后代元素会自动拥有这些属性。

- 字体属性

```css
font:组合字体
font-family:规定元素的字体系列
font-weight:设置字体的粗细
font-size:设置字体的尺寸
font-style:定义字体的风格
font-variant:偏大或偏小的字体
```

- 文本属性

```css
text-indent: 文本缩进
text-align: 文本水平对刘
line-height: 行高
word-spacing: 增加或减少单词间的空白
letter-spacing: 增加或减少字符间的空白
text-transform: 控制文本大小写
direction: 规定文本的书写方向
color: 文本颜色
```

- 元素可见性

```css
visibility
```

- 表格布局属性

```css
caption-side:  定位表格标题位置
border-collapse:  合并表格边框
border-spacing:  设置相邻单元格的边框间的距离
empty-cells:  单元格的边框的出现与消失
table-layout:  表格的宽度由什么决定
```

- 列表属性

```css
list-style-type:  文字前面的小点点样式
list-style-position:  小点点位置
list-style:  以上的属性可通过这属性集合
```

- 光标属性

```css
cursor: 箭头可以变成需要的形状;
```

- 引用

```css
quotes: 设置嵌套引用的引号类型;
```
