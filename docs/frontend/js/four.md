## 1.for...of 无法循环遍历对象

```js
function getNumberArrays(arr, len) {
    let newArrList = [];
    let start, end;
    for (let i = 0; i < Math.ceil(arr.length / len); i++) {
        start = len * i;
        end = start + len;
        newArrList.push(arr.slice(start, end));
    }
    return newArrList;
}

// 测试
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log('object :>> ', getNumberArrays(arr, 4)); // [[1,2,3,4],[5,6,7,8],[9, 10]]
```

## 2.js 利用闭包实现迭代器轮询数组中的元素

```js
function iteratorElement(array) {
    let i = 0;
    return function () {
        if (i < array.length - 1) {
            return array[i++];
        } else {
            i = 0;
            return array[array.length - 1];
        }
    };
}

// 测试
let arr = ['zs', 'ls', 'wt'];
let el = iteratorElement(arr);
console.log('数组元素 :>> ', el()); // "zs"
console.log('数组元素 :>> ', el()); // "ls"
console.log('数组元素 :>> ', el()); // "wt"

// 每隔1s打印一次
setInterval(() => {
    console.log('数组元素 :>> ', el());
}, 1000);
// "zs" 、 "ls" 、 "wt" 、
```

## 3.随机获取指定个数的数组元素

```js
function getRandomArray(arr, count) {
    let shuffled = arr.slice(0);
    let i = arr.length;
    let min = i - count;
    let temp, index;
    while (i-- > min) {
        index = Math.floor((i + 1) * Math.random()); //这里的+1 是因为上面i--的操作  所以要加回来
        temp = shuffled[index]; //即值交换
        shuffled[index] = shuffled[i];
        shuffled[i] = temp;
    }
    return shuffled.slice(min);
}
// 测试
let arr = ['zs', 'ls', 'wt'];
console.log('数组元素 :>> ', getRandomArray(arr, 2));
```

## 4.js 判断当前时间是否在一个时间范围内

```js
/**
 * @dec [isDuringDate 比较当前时间是否在指定时间段内]
 * @param    beginDateStr [开始时间]
 * @param    endDateStr   [结束时间]
 * @return   Boolean
 */
let date = {
    isDuringDate: function (beginDateStr, endDateStr) {
        let curDate = new Date();
        let beginDate = new Date(beginDateStr);
        let endDate = new Date(endDateStr);

        if (curDate >= beginDate && curDate <= endDate) {
            return true;
        }
        return false;
    },
};

date.isDuringDate('2018/09/17', '2030/09/17');
// 当前时间是否在2018/09/17 - 2030/09/17 之间，输出 true

date.isDuringDate('2018/09/17 13:00', '2019/09/17 15:00');
// 当前时间是否在2018/09/17 13:00 - 2019/09/17 15:00 之间，输出 false

date.isDuringDate('2018-09-17 13:00', '2019-09-17 15:00');
// 当前时间是否在2018/09/17 13:00 - 2019-09-17 15:00 之间，输出 false
```

## 5.url 地址转为 blob 重命名下载

```js
// 将文件路径转为blob
function getBlob(url) {
    return new Promise((resolve) => {
        const xhr = new XMLHttpRequest();
        // 避免 200 from disk cache
        xhr.open('GET', url, true);
        xhr.responseType = 'blob';
        xhr.onload = () => {
            if (xhr.status === 200) {
                resolve(xhr.response);
            }
        };
        xhr.send();
    });
}
function saveAs(blob, filename) {
    if (window.navigator.msSaveOrOpenBlob) {
        navigator.msSaveBlob(blob, filename);
    } else {
        const anchor = document.createElement('a');
        const body = document.querySelector('body');
        anchor.href = window.URL.createObjectURL(blob);
        anchor.download = filename;
        anchor.style.display = 'none';
        body.appendChild(anchor);
        anchor.click();
        body.removeChild(anchor);
        window.URL.revokeObjectURL(anchor.href);
        window.location.href();
    }
}
export async function download(url, newFileName) {
    const blob = await getBlob(url);
    //newFileName是文件的名字，要加上文件的拓展名
    saveAs(blob, newFileName);
}
```

## 6.js 判断字符串以某字符开头或结尾

```js
//判断字符串是否以特定字符开头  str：字符串    appoint：指定字符
function validationStart(str, appoint) {
    str = str.toLowerCase(); //不区分大小写：全部转为小写后进行判断

    var char = str.substr(0, appoint.length); //从0开始，往后截取特定字符长度

    if (char == appoint) {
        //两者相同，则代表验证通过
        return true;
    }
    return false;
}

//判断字符串是否以特定字符结尾   str：字符串    appoint：指定字符
function validationStart(str, appoint) {
    str = str.toLowerCase(); //不区分大小写：全部转为小写后进行判断

    var char = str.substr(0, appoint.length); //从0开始，往后截取特定字符长度

    if (char == appoint) {
        //两者相同，则代表验证通过
        return true;
    }
    return false;
}
```

## 7.过滤对象中为 null/undefined/''/[]/{}的属性值

```js
// 过滤对象中为null/undefined/''/[]/{}的属性值
function clearDeep(obj) {
    if (!obj || !typeof obj === 'object') return;

    const keys = Object.keys(obj);
    for (var key of keys) {
        const val = obj[key];
        if (typeof val === 'undefined' || ((typeof val === 'object' || typeof val === 'string') && !val)) {
            // 如属性值为null或undefined或''，则将该属性删除
            delete obj[key];
        } else if (typeof val === 'object') {
            // 属性值为对象，递归调用
            clearDeep(obj[key]);

            if (Object.keys(obj[key]).length === 0) {
                // 如某属性的值为不包含任何属性的独享，则将该属性删除
                delete obj[key];
            }
        }
    }
}
```

## 8.判断两个对象值是否相等

```js
/**
 * @description: 判断两个对象值是否相等
 * @param {Object} objA
 * @param {Object} objB
 * @return {Boolean}
 */
function isEquals(objA, objB) {
    // 将对象键名转化为数组
    const arr1 = Object.keys(objA);
    const arr2 = Object.keys(objB);
    // 比较两个对象的长度
    if (arr1.length !== arr2.length) {
        return false;
    }
    // 遍历对象，判断是否相等
    for (let k in objA) {
        if (typeof objA[k] === 'object' || typeof objB[k] === 'object') {
            if (!this.isEquals(objA[k], objB[k])) {
                return false;
            }
        } else if (objA[k] !== objB[k]) {
            return false;
        }
    }
    return true;
}
```

## 9.判断对象修改的值

```js
/**
 * @description: 判断修改的值
 * @param {Object} objA
 * @param {Object} objB
 * @return {String}
 */
function validatorObject(objA, objB) {
    let msg = '';
    for (var key in objA) {
        if (objB.hasOwnProperty(key)) {
            if (objB[key] !== objA[key]) {
                msg += `
              <p>
                字段[${key.toString()}]：将值[${objA[key]}]改为[${objB[key]}]
              </p>
          `;
            }
            return msg;
        } else {
            console.info('objA != objB : objB not contains ' + key);
        }
    }
}
```

## 10.深刻改变对象数组中的属性值

```js
const input = {
    key: '001',
    type: 'div',
    props: { id: '001', style: { height: '100px', backgroundColor: '#de4141' }, className: '' },
    selected: true,
    childNodes: [
        {
            key: '001',
            type: 'div',
            props: {
                id: 'key01',
                style: { height: '100px', backgroundColor: '#de4141' },
                className: '',
            },
            selected: false,
            childNodes: [],
        },
    ],
};

// 深刻改变对象数组中的属性值
function updatePropertyDeep(obj, property, value) {
    for (let k in obj) {
        if (k === property) {
            obj[property] = value;
        } else if (obj[k] && typeof obj[k] === 'object') {
            updatePropertyDeep(obj[k], property, value);
        }
    }
    return obj;
}

console.log('Setting true:', updatePropertyDeep(input, 'selected', true));
console.log('Setting false:', updatePropertyDeep(input, 'selected', false));
```

## 11.时间戳转时间(包含-年月日-时分)

```js
// 时间戳转时间(包含-年月日-时分秒)
export function timestampToTime(cjsj) {
    var date = new Date(cjsj); //时间戳为10位需*1000，时间戳为13位的话不需乘1000
    var Y = date.getFullYear() + '-';
    var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
    var D = (date.getDate() < 10 ? '0' + date.getDate() : date.getDate()) + ' ';
    var h = date.getHours() + ':';
    var m = date.getMinutes() + ':';
    var s = date.getSeconds();
    return Y + M + D + h + m + s;
}
// 时间戳转时间(包含-年月日-时分)
export function timestampToTimes(cjsj) {
    var date = new Date(cjsj); //时间戳为10位需*1000，时间戳为13位的话不需乘1000
    var Y = date.getFullYear() + '-';
    var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
    var D = (date.getDate() < 10 ? '0' + date.getDate() : date.getDate()) + ' ';
    var h = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':';
    var m = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
    return Y + M + D + h + m;
}
// 时间戳转时间(包含-时分)
export function timestampToHm(cjsj) {
    var date = new Date(cjsj); //时间戳为10位需*1000，时间戳为13位的话不需乘1000
    var h = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':';
    var m = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
    return h + m;
}
```

## 12.时间日期判断——今天、昨天、明天

```js
// 对时间日期判断今天、昨天、明天
export function timeStatus(date) {
    let time_str = '';
    let isYear = new Date(date).getFullYear() === new Date().getFullYear(); // 年份
    let isMonth = new Date(date).getMonth() + 1 === new Date().getMonth() + 1; // 月份

    if (isYear && isMonth && new Date(date).getDate() === new Date().getDate()) {
        time_str = '今天' + timestampToHm(date);
    } else if (isYear && isMonth && new Date(date).getDate() === new Date().getDate() - 1) {
        time_str = '昨天' + timestampToHm(date);
    } else if (isYear && isMonth && new Date(date).getDate() === new Date().getDate() + 1) {
        time_str = '明天' + timestampToHm(date);
    } else {
        time_str = timestampToTimes(date);
    }
    return time_str;
}
```

## 13.倒计时

```js
// 倒计时
export function dateCount(endTime) {
    // 现在时间
    var now = new Date();
    //截止时间
    var until = new Date(endTime);
    // 计算时会发生隐式转换，调用valueOf()方法，转化成时间戳的形式
    var days = (until - now) / 1000 / 3600 / 24;
    var day = Math.floor(days);
    var hours = (days - day) * 24;
    var hour = Math.floor(hours);
    var minutes = (hours - hour) * 60;
    var minute = Math.floor(minutes);
    var seconds = (minutes - minute) * 60;
    var second = Math.floor(seconds);
    // var back = '剩余时间：' + day + '天' + hour + '小时' + minute + '分钟' + second + '秒';

    if (day !== 0) return day > 0 ? day + '天' : '已逾期';
    if (hour !== 0) return hour + '小时';
    if (minute !== 0) return minute + '分钟';
    if (second !== 0) return second + '秒';
    return '时间格式错误';
}
```

## 14.从 URL 中获取指定参数

```js
/**
 *
 * @param { String } name
 * @scene browser
 * @description 从URL中获取指定参数
 * @returns 指定参数
 */
export function getQueryString(name) {
    let reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
    let w = window.location.href.slice(window.location.href.indexOf('?'));
    let r = w.substr(1).match(reg);
    if (r != null) return unescape(r[2]);
    return null;
}
```

## 15.rem 适配不同分辨率

```js
!(function (win, doc) {
    function setFontSize() {
        // 获取window 宽度
        var winWidth = window.innerWidth;
        //这里是假设在750px宽度设计稿的情况下
        //可以根据实际需要修改
        doc.documentElement.style.fontSize = (winWidth / 750) * 100 + 'px';
    }
    // onorientationchange 屏幕旋转事件
    var evt = 'onorientationchange' in win ? 'orientationchange' : 'resize';
    var timer = null;
    win.addEventListener(
        evt,
        function () {
            clearTimeout(timer);

            timer = setTimeout(setFontSize, 300);
        },
        false
    );
    win.addEventListener(
        'pageshow',
        function (e) {
            if (e.persisted) {
                clearTimeout(timer);
                timer = setTimeout(setFontSize, 300);
            }
        },
        false
    );
    //初始化
    setFontSize();
})(window, document);
```
