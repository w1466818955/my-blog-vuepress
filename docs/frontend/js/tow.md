## 1.枚举类型介绍

枚举是一种定义成员与值的映射关系的有穷序列集的数据类型。

## 2.ECMAScript6 中的枚举类型

在 ES5 标准中尚未实现支持原生的枚举类型，但 enum 一直作为一个保留关键字而存在；但 ts 作为 js 的超集，提前实现了对枚举类型的支持。

## 3.枚举类型的特性

(1) 自增性

```js
enum Direction {
  Up,
  Down,
  Left,
  Right
}
console.log(Direction[0]); // 输出结果: Up
console.log(Direction[1]); // 输出结果: Down
console.log(Direction[2]); // 输出结果: Left
console.log(Direction[3]); // 输出结果: Right
```

`注意：如果不对成员进行初始化赋值，则默认值会从0开始自增。`

(2) 映射性

```js
enum Direction {
  Up,
  Down = "向下",
  Left = "向左",
  Right
}
console.log(Direction.up); // 输出结果: 0
console.log(Direction[0]); // 输出结果: 0
console.log(Direction.Down); // 输出结果: 1

```

## 4.枚举类型的使用

由于 es5 中没有枚举类型，所以 js 不支持 enum 类型，但 js 可以模拟出类似的特性。

```js
var Direction = {
  Up: 0,
  Down: 1,
  top: "向上",
  bottom: "向下",
  0: left,
  1: right,
  Left: 2,
  Right: 3,
};
console.log(Direction.Up); // 输出结果: 0
console.log(Direction[0]); // 输出结果: "Up"
console.log(Direction["向上"]); // 输出结果: top
```
