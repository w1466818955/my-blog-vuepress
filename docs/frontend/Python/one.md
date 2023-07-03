## (一)转义字符和原字符

```xml
1.转义字符
\t: 制表符
\n: 换行符
\r: 回车符
\b: 退格符

2.原字符
在字符串前面加上r或R，表示原字符，不会进行转义
例：print(r'hello\\world')

输出：hello\\world
```

## (二)变量的定义和使用

```xml
1.变量的定义
变量名 = 值

2.变量的使用
print(变量名)
```

## (三)变量的多次赋值

```xml
name = '张三'
name = '李四'
print(name)


输出：李四
```

## (四)常见的数据类型

```xml
# 1.字符串
name = '张三'
print(type(name))

输出：<class 'str'>

# 2.整数
age = 18
print(type(age))

输出：<class 'int'>

# 3.浮点数
height = 1.75
print(type(height))

输出：<class 'float'>

# 4.布尔值
is_ok = True
print(type(is_ok))

输出：<class 'bool'>

# 5.空值
a = None
print(type(a))

输出：<class 'NoneType'>
```

## (五)数据类型转换

```xml
# 1.整数转换成浮点数
a = 1
print(float(a))
print(type(float(a)))

输出：1.0 <class 'float'>

# 2.浮点数转换成整数
b = 1.5
print(int(b))
print(type(int(b)))

输出：1 <class 'int'>

# 3.字符串转换成整数
c = '123'
print(int(c))
print(type(int(c)))

输出：123 <class 'int'>

# 4.字符串转换成浮点数
d = '1.23'
print(float(d))
print(type(float(d)))

输出：1.23 <class 'float'>

# 5.整数转换成字符串
e = 123
print(str(e))
print(type(str(e)))

输出：123 <class 'str'>

# 6.浮点数转换成字符串
f = 1.23
print(str(f))
print(type(str(f)))

输出：1.23 <class 'str'>

# 7.布尔值转换成字符串
g = True
print(str(g))
print(type(str(g)))

输出：True <class 'str'>

# 8.字符串转换成布尔值
h = 'True'
print(bool(h))
print(type(bool(h)))

输出：True <class 'bool'>

# 9.整数转换成布尔值
i = 1
print(bool(i))

输出：True

# 10.浮点数转换成布尔值
j = 1.23
print(bool(j))

输出：True

# 11.空值转换成布尔值
a = None
print(bool(a))

输出：False
```
