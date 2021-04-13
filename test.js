// ---------------------------------------------------------------------

// 数组右移
// let arr = [1, 2, 3, 4, 5]
// console.log(arr);
// setInterval(function () {
//   // arr.push(arr.shift())
//   arr.unshift(arr.pop())
//   console.log(arr);
//   console.log('----------------------');

// }, 2000)
// ---------------------------------------------------------------------
// promise实现延迟输出
// function delay(x) {
//   x -= 0;
//   return new Promise(function (resolve, reject) {
//     if (typeof x != 'number') {
//       reject('请输入数字')
//     } else {
//       setTimeout(function () {
//         resolve()
//       }, x)
//     }
//   })
// }
// let time = '5000'
// delay(time).then((res) => {
//   console.log(1);
// }).catch(res => { console.log(res); })
// ---------------------------------------------------------------------
// 回文判断
// let text = '111'
// function isPalindromic(value) {
//   reverseValue = value.split('').reverse().join('')
//   return value == reverseValue

// }
// console.log(isPalindromic(text));
// ---------------------------------------------------------------------
// 去重
// let arr = [1, 6, 2, 6, 53, 1]
// function unique(value) {
//   return [...new Set(value)]
// }
// console.log(unique(arr));
// ---------------------------------------------------------------------
// 查找出现次数最多的字符
// let text = '啊阿斯顿请问请问请问请问请问阿萨的最新阿松大潍坊市D给'
// function findMaxDuplicateChar(value) {
//   let maxOfAll = 0, maxItem = ''
//   for (i of value) {
//     let max = 0
//     for (j of value) {
//       if (j == i) {
//         max++
//       }
//     }
//     if (max > maxOfAll) {
//       maxOfAll = max
//       maxItem = i
//     }
//   }
//   console.log(maxItem + ':' + maxOfAll);
// }
// findMaxDuplicateChar(text)
// ---------------------------------------------------------------------
// 查找出现次数最多的字符(二)
// let text = 'asdqwezxcadsfniaurbntpizxcfhvkasdjnq'
// function findMaxDuplicateChar(str) {
//   if (str.length == 1) { return str; }
//   let charObj = {};
//   for (let i = 0; i < str.length; i++) {
//     if (!charObj[str.charAt(i)]) {
//       charObj[str.charAt(i)] = 1;
//     } else {
//       charObj[str.charAt(i)] += 1;
//     }
//   }
//   let maxChar = '', maxValue = 1;
//   for (var k in charObj) {
//     if (charObj[k] >= maxValue) {
//       maxChar = k; maxValue = charObj[k];
//     }
//   }
//   return maxChar;
// }
// console.log(
//   findMaxDuplicateChar(text)
// );
// ---------------------------------------------------------------------
// 冒泡排序
// let arr = [1, 2, 3, 234, 1231, 2, 4356456, 7474]
// function bubbleSort(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length - 1 - i; j++) {
//       if (arr[j] > arr[j + 1]) {
//         let temp = arr[j]
//         arr[j + 1] = arr[j]
//         arr[j] = temp
//       }
//     }
//   }
//   return arr
// }
// console.log(bubbleSort(arr));
// ---------------------------------------------------------------------
// 正数组的最大差值
// let arr = [0, 123, 555, 234, 44, 3, 6]
// function getMaxProfit(arr) {
//   return Math.max(...arr) - Math.min(...arr)
// }
// console.log(getMaxProfit(arr));
// ---------------------------------------------------------------------
// let i = 10, j = 1
// i = i - j
// j = i + j
// i = j - i
// console.log(i, j);
// ---------------------------------------------------------------------
// 快速排序
// let arr = [1, 34, 45, 8, 3, 34, 5, 8, 2, 234, 555, 456456, 9967]
// function quickSort(arr) {
//   if (arr.length <= 1) {
//     return arr;
//   }
//   //获取"基准"元素的索引
//   const pivotIndex = Math.floor(arr.length / 2);
//   //从数组中取出我们的"基准"元素,避免干扰遍历
//   const pivot = arr.splice(pivotIndex, 1)[0];
//   let leftArr = []
//   let rightArr = []
//   arr.forEach(element => {
//     element < pivot ? leftArr.push(element) : rightArr.push(element)
//   })
//   // 递归调用直到传入数组的长度小于或等于1，此时所有元素排序完毕
//   return quickSort(leftArr).concat(pivot, quickSort(rightArr));
// }
// console.log(quickSort(arr));
// ---------------------------------------------------------------------
// 数组转化为对象
// let arr = [{ key: 'pm', value: '1123' }, { key: 'pm2', value: '11233' }, { key: 'pm4', value: '1123' }]
// console.log(
//   Object.fromEntries(arr.map(Object.values))
// );
// ---------------------------------------------------------------------
// var greet = require('./model');
// greet('pm')
// ---------------------------------------------------------------------
// 闭包简易应用
// function createCache() {
//   const data = {} // 用来存储
//   return {
//     set: function (key, val) {
//       data[key] = val
//     },
//     get: function (key) {
//       return data[key]
//     }
//   }
// }
// const c = createCache()
// c.set('name', 'pm')//设置缓存的数据
// const name = c.get('name')//获取缓存中的数据
// console.log(name)
// ---------------------------------------------------------------------
// 插入排序
// function insertSort(arr) {
//   for (let i = 1; i < arr.length; i++) {
//     let j = i - 1
//     let tmp = arr[i]
//     while (j >= 0 && arr[j] > tmp) {
//       arr[j + 1] = arr[j]
//       j--
//     }
//     arr[j + 1] = tmp
//   }
//   return arr
// }

// let arr = [1, 34, 45, 8, 3, 34, 5, 8, 2, 234, 555, 456456, 9967]
// console.log(insertSort(arr));
// ---------------------------------------------------------------------
// 写一个函数计算1到100之和
// function sum(a, b) {
//   let sum = 0
//   for (let i = a; i <= b; i++) {
//     sum += i

//   }
//   return sum
// }
// console.log(sum(1, 100));
// ---------------------------------------------------------------------
// async
// var i = 0
// async function sum() {
//   return [[22, 2223], [2233, 1122]]
// }
// sum().then(res => {
//   i = res
//   console.log(i); //正常
// })
// console.log(i);//‘0’
// ---------------------------------------------------------------------
// var A = { n: 4399 }
// // var B = function () { this.n = 9999 }
// var C = function () { var n = 8888 }
// // B.prototype = A;
// C.prototype = A;
// // var b = new B()
// var c = new C()
// A.n++
// // console.log(b.n);
// console.log(c.n);


// var c = new C();
// 上面这个语句的实际运行过程是这样的。

// var c = function () {
//   var o = new Object();
//   //第一个参数改变函数的作用域，即相当于在函数内部设置this = o
//   C.apply(o, argumens);
//   return o;
// }
// 这样，由于C()函数中
// |----------------|
// | var n = 8888;  |
// |----------------|
// 这样只是在函数中创建了一个私有变量，并没有为对象执行任何操作，因此C的实例中不存在名字为“n”的属性。所以，c.n会访问原型中的属性名为“n”的值。

// ---------------------------------------------------------------------
// 对象合并
// let i = { a: 10, b: 20, e: 20 }
// let j = { c: 30, d: 40, e: 30 }
// console.log(
//   Object.assign(i, j)
// );
// console.log(i, j);
// ---------------------------------------------------------------------
// 递归函数
// function sum(num) {
//   return num > 1 ? num + sum(num - 1) : num
// }
// console.log(sum(10000));
// ---------------------------------------------------------------------
// 判断字符串中出现最多次数的字符，以及次数
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