## 1.for...of 无法循环遍历对象

```js
let userMsg = {
  0: "nick",
  1: "ff",
  2: "dd",
  3: "gg",
};

for (let key in userMsg) {
  console.log(key, userMsg[key]);
}
// 输出结果
0 nick
1 ff
2 dd
3 gg

for (let item of userMsg) {

  console.log(item);
}
// 输出结果
userMsg is not iterable

```

## 2.遍历输出结果不同

```js
let arr = ['a', 'b', 'c', 'd'];
for (let key in arr) {
    console.log(key);
}
// 输出结果
0;
1;
2;
3;

for (let item of arr) {
    console.log(item);
}

// 输出结果
a;
b;
c;
d;
```

## 3.for in 会遍历自定义属性，for of 不会

```js
let arr = ["a", "b", "c", "d"];
arr.name = "数组";
for (let key in arr) {
  console.log(key, arr[key]);
}
// 输出结果
0 a;
1 b;
2 c;
3 d;
name 数组;

for(let item of arr) {
  console.log(item);
}
// 输出结果
a;
b;
c;
d;
```
