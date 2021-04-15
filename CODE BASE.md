# CODE BASE


---------------------------------------------------------------------
 ####   数组右移

```javascript
let arr = [1, 2, 3, 4, 5]
console.log(arr);
setInterval(function () {
// arr.push(arr.shift())
arr.unshift(arr.pop())
console.log(arr);

}, 2000)
```

---

####   promise实现延迟输出

```javascript
function delay(x) {
x -= 0;
return new Promise(function (resolve, reject) {
if (typeof x != 'number') {
  reject('请输入数字')
} else {
  setTimeout(function () {
    resolve()
  }, x)
}
})
}
let time = '5000'
delay(time).then((res) => {
console.log(1);

}).catch(res => { console.log(res); })
```

---

 ####   回文判断

```javascript
let text = '111'
function isPalindromic(value) {
reverseValue = value.split('').reverse().join('')
return value == reverseValue

}

console.log(isPalindromic(text));
```

---

 ####   去重

```javascript
let arr = [1, 6, 2, 6, 53, 1]
function unique(value) {
return [...new Set(value)]
}

console.log(unique(arr));
```

---

 ####   查找出现次数最多的字符

```javascript
let text = '啊阿斯顿请问请问请问请问请问阿萨的最新阿松大潍坊市D给'
function findMaxDuplicateChar(value) {
let maxOfAll = 0, maxItem = ''
for (i of value) {
let max = 0
for (j of value) {
  if (j == i) {
    max++
  }
}
if (max > maxOfAll) {
  maxOfAll = max
  maxItem = i
}
}
console.log(maxItem + ':' + maxOfAll);
}

findMaxDuplicateChar(text)
```

---

 ####   查找出现次数最多的字符(二)

```javascript
let text = 'asdqwezxcadsfniaurbntpizxcfhvkasdjnq'
function findMaxDuplicateChar(str) {
if (str.length == 1) { return str; }
let charObj = {};
for (let i = 0; i < str.length; i++) {
if (!charObj[str.charAt(i)]) {
  charObj[str.charAt(i)] = 1;
} else {
  charObj[str.charAt(i)] += 1;
}
}
let maxChar = '', maxValue = 1;
for (var k in charObj) {
if (charObj[k] >= maxValue) {
  maxChar = k; maxValue = charObj[k];
}
}
return maxChar;
}
console.log(
findMaxDuplicateChar(text)

);
```

---

 ####   冒泡排序

```javascript
let arr = [1, 2, 3, 234, 1231, 2, 4356456, 7474]
function bubbleSort(arr) {
for (let i = 0; i < arr.length; i++) {
for (let j = 0; j < arr.length - 1 - i; j++) {
  if (arr[j] > arr[j + 1]) {
    let temp = arr[j]
    arr[j + 1] = arr[j]
    arr[j] = temp
  }
}
}
return arr
}

console.log(bubbleSort(arr));
```

---

 ####   正数组的最大差值



```
et arr = [0, 123, 555, 234, 44, 3, 6]
function getMaxProfit(arr) {
return Math.max(...arr) - Math.min(...arr)
}

console.log(getMaxProfit(arr));
```



```javascript
let i = 10, j = 1
i = i - j
j = i + j
i = j - i

console.log(i, j);
```

---

 ####   快速排序

```javascript
let arr = [1, 34, 45, 8, 3, 34, 5, 8, 2, 234, 555, 456456, 9967]
function quickSort(arr) {
if (arr.length <= 1) {
return arr;
}
//获取"基准"元素的索引
const pivotIndex = Math.floor(arr.length / 2);
//从数组中取出我们的"基准"元素,避免干扰遍历
const pivot = arr.splice(pivotIndex, 1)[0];
let leftArr = []
let rightArr = []
arr.forEach(element => {
element < pivot ? leftArr.push(element) : rightArr.push(element)
})
// 递归调用直到传入数组的长度小于或等于1，此时所有元素排序完毕
return quickSort(leftArr).concat(pivot, quickSort(rightArr));
}

console.log(quickSort(arr));
```

---

 ####   数组转化为对象

```javascript
let arr = [{ key: 'pm', value: '1123' }, { key: 'pm2', value: '11233' }, { key: 'pm4', value: '1123' }]
console.log(
Object.fromEntries(arr.map(Object.values))

);
```




---------------------------------------------------------------------
 ####   闭包简易应用

```javascript
function createCache() {
const data = {} // 用来存储
return {
set: function (key, val) {
  data[key] = val
},
get: function (key) {
  return data[key]
}
}
}
const c = createCache()
c.set('name', 'pm')//设置缓存的数据
const name = c.get('name')//获取缓存中的数据

console.log(name)
```

---

 ####   插入排序

```javascript
function insertSort(arr) {
for (let i = 1; i < arr.length; i++) {
let j = i - 1
let tmp = arr[i]
while (j >= 0 && arr[j] > tmp) {
  arr[j + 1] = arr[j]
  j--
}
arr[j + 1] = tmp
}
return arr
}

let arr = [1, 34, 45, 8, 3, 34, 5, 8, 2, 234, 555, 456456, 9967]

console.log(insertSort(arr));
```

---

 ####   计算1到100之和

```javascript
function sum(a, b) {
let sum = 0
for (let i = a; i <= b; i++) {
sum += i

}
return sum
}

console.log(sum(1, 100));
```

---

 ####  async

```javascript
var i = 0
async function sum() {
return [[22, 2223], [2233, 1122]]
}
sum().then(res => {
i = res
console.log(i); //正常
})

console.log(i);//‘0’
```

---

> ```javascript
> var A = { n: 4399 }
> // var B = function () { this.n = 9999 }
> var C = function () { var n = 8888 }
> // B.prototype = A;
> C.prototype = A;
> // var b = new B()
> var c = new C()
> A.n++
> // console.log(b.n);
> console.log(c.n);
> ```
>
> `var c = new C();`
> 上面这个语句的实际运行过程是这样的。
>
> ```js
> var c = function () {
> var o = new Object();
> //第一个参数改变函数的作用域，即相当于在函数内部设置this = o
> ```
>
> 
>
> ```
> C.apply(o, argumens);
> return o;
> }
> ```
>
> 这样，由于C()函数中
> ` var n = 8888;`  
> 这样只是在函数中创建了一个私有变量，并没有为对象执行任何操作，因此C的实例中不存在名字为“n”的属性。所以，`c.n`会访问原型中的属性名为“n”的值。
>
> 这样，由于C()函数中
>
>  `var n = 8888; `
>
> 这样只是在函数中创建了一个私有变量，并没有为对象执行任何操作，因此C的实例中不存在名字为“n”的属性。所以，`c.n`会访问原型中的属性名为“n”的值。

---------------------------------------------------------------------
 ####   对象合并

```javascript
let i = { a: 10, b: 20, e: 20 }
let j = { c: 30, d: 40, e: 30 }
console.log(
Object.assign(i, j)
);

console.log(i, j);
```

---

 ####   递归函数

```javascript
function sum(num) {
return num > 1 ? num + sum(num - 1) : num
}

console.log(sum(10000));
```

---

 ####   判断字符串中出现最多次数的字符，以及次数

```javascript
function most(str) {
let maxItem = ''
let maxTime = 0
let time = 0
for (element of str) {
for (item of str) {
  if (item == element) time++
}
if (time > maxTime) {
  maxItem = element
  maxTime = time
}
time = 0
}

return { maxItem, maxTime }
}

console.log(most('1123223123asdad阿瑟东的哇恶其啊啊啊啊啊啊啊啊啊啊33'));
```

---

 ####   统计某一字符或字符串在另一个字符串中出现的次数

```javascript
function appear(str, targetStr) {
let time = 0
while (targetStr.indexOf(str) != -1) {
time++
targetStr = targetStr.slice(targetStr.indexOf(str) + 1)
}
return time
}

let i = 'w11'
let j = '1231w11w123ww33323w112w112312'
console.log(
appear(i, j)

);
```

---

 ####   冒泡排序


```javascript
let arr = [49, 38, 65, 97, 76, 13, 27, 49]
for (let i = 0; i < arr.length; i++) {
for (let j = 0; j < arr.length - i - 1; j++) {
if (arr[j] > arr[j + 1]) {
  [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
}
}
}

console.log(arr);
```

---

 ####   给定一个数组，求它的最大值 / 最小值

```javascript
let arr = [49, 38, 65, 97, 76, 13, 27, 49]
let max = Math.max(...arr)
let min = Math.min(...arr)
console.log(max, min);
```





---------------------------------------------------------------------
```javascript
console.log([typeof null, null instanceof Object]);
```

---

 ####   数组查找

```javascript
let arr = [{ name: 1, age: 12 }, 6]
let item = { name: 1, age: 12 }
console.log(arr.indexOf([item]));
arr.forEach(item => {
if (item.name == '1') {
alert('存在这个元素');
}

})
```

---

```javascript
var a = 1;
var b = [];
var c = '';
var d = true;

console.log((a || b));
```

---

####   [1, 2, 3, 4, 5] 这个数组每一项乘以10 然后过滤大于20的然后再求和

```javascript
let arr = [1, 2, 3, 4, 5]
console.log(
arr.map(item => item *= 10).filter(item => item > 20).reduce((total, num) => total + num)
);
```



---------------------------------------------------------------------
####   根据id去重
>
> ```javascript
> let arr = [{ id: 1 }, { id: 2 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 1 }, { id: 3 }]
> 
> let result = []
> ```
>
> #####   使用for循环
>
> ```javascript
> for (var i = 0; i < arr.length; i++) {
> for (var j = i + 1; j < arr.length;) {
> if (arr[i].id == arr[j].id) {
>   arr.splice(j, 1);
> } else {
>   j++;
> }
> }
> }
> 
> console.log(arr);
> ```
>
> #####   使用for循环
>
> ```javascript
> for (item of arr) {
> let total = 0
> for (el of result) {
> if (el.id == item.id) total++
> }
> if (total == 0) result.push(item)
> }
> 
> console.log(result);
> ```
>
> #####   方法一：
>
> ```javascript
> result = arr.filter((item, index) => {
> return arr.findIndex(el => el.id == item.id) === index
> })
> 
> console.log(result);
> ```
>
> 
>
>  #####   方法二：
>
> ```javascript
> let obj = {}
> result = arr.reduce((cur, next) => {
> obj[next.id] ? "" : obj[next.id] = true && cur.push(next);
> return cur;
> }, [])
> console.log(result);
> ```
>




---------------------------------------------------------------------
 ####   Math

```javascript
let num = 2.3
console.log(
Math.floor(num),// 向下取整
Math.round(num),// 四舍五入
Math.ceil(num),// 向上取整
Math.abs(num)// 绝对值

);
```

---

####   判断是不是子字符串

```javascript
let str = '123123'
let target = '233'
function sonStr(str, target) {
if (target == '') return true
if (str.indexOf(target[0]) != -1) {
return sonStr(str.slice(str.indexOf(target[0]) + 1), target.slice(1))
} else { return false }
}
console.log(
sonStr(str, target)

);
```

---

####   移除数组 arr 中的所有值与 item 相等的元素。不要直接修改数组 arr，结果返回新的数组

```javascript
function remove(arr, item) {
return arr.filter(el => { return el != item })
}

console.log(remove([1, 2, 3, 4, 5], 2));
```



---

 ####   移除数组 arr 中的所有值与 item 相等的元素，直接在给定的 arr 数组上进行操作，并将结果返回

```javascript
function removeWithoutCopy(arr, item) {
for (let i = 0; i < arr.length; i++) {
if (arr[i] == item) {
  arr.splice(i, 1)
  i--
}
}
return arr
}

console.log(
removeWithoutCopy([1, 2, 3, 4, 2, 2, 5], 2)

);
```

---

 ####   在数组 arr 末尾添加元素 item。不要直接修改数组 arr，结果返回新的数组

```javascript
function append(arr, item) {
let temp = arr.slice(0)
temp.push(item)
return temp
}
console.log(append([1, 2], 3));
```



---

#### *斐波那契数列*

```javascript
function fibonacci(n) {
 return n <= 2 ? 1 : fibonacci(n - 1) + fibonacci(n - 2);
}
console.log(fibonacci(6));
```

---

#### 打点计时器

> **1、从 start 到 end（包含 start 和 end），每隔 100 毫秒` console.log` 一个数字，每次数字增幅为 1**
>
> **2、返回的对象中需要包含一个 cancel 方法，用于停止定时操作**
>
> **3、第一个数需要立即输出**

```javascript
function count(start, end) {
  let num = start + 1
  console.log(start);
  let timer = setInterval(function () {
    if (num > end) {
      clearInterval(timer)
    } else {
      console.log(num);
      num++
    }
  }, 1000)
  return {
    cancel: function () {
      clearInterval(timer)
    }
  }
}
let target = count(1, 5)
// 四秒时调用取消方法，结束定时器
setTimeout(function () { target.cancel() }, 4000)
```

