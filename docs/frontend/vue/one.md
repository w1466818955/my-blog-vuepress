## 1.axios 的特点

```xml
- 在浏览器中创建XMLHttpRequest请求
- 在node.js中发送http请求
- 支持Promise API
- 拦截请求和响应
- 转换请求和响应数据
- 取消要求
- 自动转换JSON数据
- 客户端支持防止CSRF/XSRF(跨域请求伪造)
```

## 2.安装使用

安装有三种方式：

-   npm 安装

```xml
 npm install axios
```

-   bower 安装

```xml
 bower install axios
```

-   通过 cdn 引入

```xml
 <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
```

在 vue 项目的`main.js`文件中引入`axios`

```js
import axios from 'axios';
Vue.prototype.$axios = axios;
```

在组件中使用`axios`

```js
<script>
	export default {
		mounted(){
			this.$axios.get('/goods.json').then(res=>{
				console.log(res.data);
			})
		}
	}
</script>
```

## 3.axios 请求方式

### 3.1.axios 可以请求的方法：

-   get：获取数据，请求指定的信息，返回实体对象
-   post：向指定资源提交数据（例如表单提交或文件上传）
-   put：更新数据，从客户端向服务器传送的数据取代指定的文档的内容
-   patch：更新数据，是对 put 方法的补充，用来对已知资源进行局部更新
-   delete：请求服务器删除指定的数据

### 3.2.get 请求

**示例代码**
`方法一`

```js
//请求格式类似于 http://localhost:8080/goods.json?id=1
this.$axios
    .get('/goods.json', {
        params: {
            id: 1,
        },
    })
    .then(
        (res) => {
            console.log(res.data);
        },
        (err) => {
            console.log(err);
        }
    );
```

`方法二`

```js
this.$axios({
    method: 'get',
    url: '/goods.json',
    params: {
        id: 1,
    },
}).then(
    (res) => {
        console.log(res.data);
    },
    (err) => {
        console.log(err);
    }
);
```

### 3.3.post 请求
post请求一般分为两种类型

1.`form-data` 表单提交，图片上传、文件上传时用该类型比较多

2.`application/json` 一般是用于 ajax 异步请求
**示例代码**
`方法一`

```js
this.$axios.post('/url',{
				id:1
			}).then(res=>{
				console.log(res.data);
			},err=>{
				console.log(err);
			})
```

`方法二`

```js
$axios({
	method: 'post',
	url: '/url',
	data: {
		id:1
	}
}).then(res=>{
	console.log(res.data);
},err=>{
	console.log(err);
})
```

`form-data请求`

```js
let data = {
	//请求参数
}

let formdata = new FormData();
for(let key in data){
	formdata.append(key,data[key]);
}

this.$axios.post('/goods.json',formdata).then(res=>{
	console.log(res.data);
},err=>{
	console.log(err);
})
```

### 3.4.put和patch请求
**示例代码**
`put请求`

```typescript
this.$axios.put('/url',{
				id:1
			}).then(res=>{
				console.log(res.data);
			})
```

`patch请求`

```js 
this.$axios.patch('/url',{
				id:1
			}).then(res=>{
				console.log(res.data);
			})
```

### 3.5.delete请求

**示例代码**
`参数以明文形式提交`

```typescript
this.$axios.delete('/url',{
				params: {
					id:1
				}
			}).then(res=>{
				console.log(res.data);
			})
```

`参数以封装对象的形式提交`

```js
// 方法一
this.$axios.delete('/url',{
				data: {
					id:1
				}
			}).then(res=>{
				console.log(res.data);
			})

//方法二
axios({
    method: 'delete',
    url: '/url',
    params: { id:1 }, //以明文方式提交参数
    data: { id:1 } //以封装对象方式提交参数
}).then(res=>{
	console.log(res.data);
})
```



### 3.6.并发请求

并发请求：同时进行多个请求，并统一处理返回值
**示例代码**

```typescript
 this.$axios.all([
	this.$axios.get('/goods.json'),
	this.$axios.get('/classify.json')
]).then(
	this.$axios.spread((goodsRes,classifyRes)=>{
		console.log(goodsRes.data);
		console.log(classifyRes.data);
	})
)
```

