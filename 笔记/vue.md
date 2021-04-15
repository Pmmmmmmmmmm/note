# Vue笔记

## 1.vue指令

### 1.1插值语法

1. mustache语法
2. v-once
3. v-html
4. v-text
5. v-pre
6. v-cloak

### 1.2事件绑定

“v-on+事件”

简写“@+事件”

#### 1.2.1事件绑定

1. 被绑定的方法不接受参数，行内样式不加小括号
2. 被绑定的方法接受参数，行内样式加小括号
3. 被绑定的方法接受参数，行内样式不加小括号，接受的参数为事件对象
4. 被绑定的方法接受参数，同时接受事件对象，事件对象要用$event表示

#### 1.2.2修饰符

![](C:\Users\PM\AppData\Roaming\Typora\typora-user-images\image-20201231155818062.png)![image-20201231163855453](C:\Users\PM\AppData\Roaming\Typora\typora-user-images\image-20201231163855453.png)

### 1.3动态绑定属性 

1. v-bind绑定基本属性
2. v-bind动态绑定class
   - 对象语法
   - 数组语法
3. 动态绑定style
   - 对象语法
   - 数组语法

### 1.4v-if的使用

- `v-if`判断传入的参数真假决定是否显示这行标签（dom中移除）

- `v-if`与`v-else`

  ![image-20201231164608325](C:\Users\PM\AppData\Roaming\Typora\typora-user-images\image-20201231164608325.png)

- `v-else-if`（不推荐）推荐使用计算属性

  ![image-20201231164917824](C:\Users\PM\AppData\Roaming\Typora\typora-user-images\image-20201231164917824.png)

- `v-if`与`v-show`的区别

  - `v-if`（只有一次切换时使用）移除dom
  - `v-show`（频繁切换时使用）设置`display：none`

### 1.5 `v-for`循环遍历

#### 1.5.1`v-for`遍历对象

- ![](C:\Users\PM\AppData\Roaming\Typora\typora-user-images\image-20210101153411385.png)
- ![](C:\Users\PM\AppData\Roaming\Typora\typora-user-images\image-20210101153544146.png)
- ![image-20210101153613401](C:\Users\PM\AppData\Roaming\Typora\typora-user-images\image-20210101153613401.png)

#### 1.5.2 `key`的作用

![image-20210101153906212](C:\Users\PM\AppData\Roaming\Typora\typora-user-images\image-20210101153906212.png)

#### 1.5.3数组中实现响应式的方法

> 1. `push()`
> 2. `pop()`
> 3. `shift()`
> 4. `unshift()`
> 5. `splice()`
> 6. `sort()`
> 7. `reverse()`
> 8. ![image-20210101165553301](C:\Users\PM\AppData\Roaming\Typora\typora-user-images\image-20210101165553301.png)
>
> ==**通过索引修改数组不会响应式更改页面**==



### 1.6 `v-model`数据双向绑定

![image-20210105160840367](C:\Users\PM\AppData\Roaming\Typora\typora-user-images\image-20210105160840367.png)

#### 1.6.1`v-model`单选与多选

> radio单选框：
>
> - 相同的name属性下不可多选
> -  如果设置了v-model，且绑定的是同一个属性，可以不加name，也可以做到单选

---

> checkbox单选框：
>
> ![image-20210105164804752](C:\Users\PM\AppData\Roaming\Typora\typora-user-images\image-20210105164804752.png)
>
> checkbox多选框：
>
> ![image-20210105165258507](C:\Users\PM\AppData\Roaming\Typora\typora-user-images\image-20210105165258507.png)
>
> 

#### 1.6.2`v-model`结合`select`

![image-20210105170309306](C:\Users\PM\AppData\Roaming\Typora\typora-user-images\image-20210105170309306.png)

> 单选
>
> ![image-20210105170053399](C:\Users\PM\AppData\Roaming\Typora\typora-user-images\image-20210105170053399.png)

> 多选
>
> ![image-20210105170205339](C:\Users\PM\AppData\Roaming\Typora\typora-user-images\image-20210105170205339.png)

#### 1.6.3值绑定

>  动态绑定表单的值
>
> ![image-20210105171023981](C:\Users\PM\AppData\Roaming\Typora\typora-user-images\image-20210105171023981.png)
>
> ![image-20210105170843589](C:\Users\PM\AppData\Roaming\Typora\typora-user-images\image-20210105170843589.png)

#### 1.6.4修饰符

> ![image-20210105171136972](C:\Users\PM\AppData\Roaming\Typora\typora-user-images\image-20210105171136972.png)
>
> 1. `lazy`修饰符
>
>    ![image-20210105171530955](C:\Users\PM\AppData\Roaming\Typora\typora-user-images\image-20210105171530955.png)
>
> 2. `number`修饰符
>
>    ![image-20210105171940981](C:\Users\PM\AppData\Roaming\Typora\typora-user-images\image-20210105171940981.png)
>
> 3. `trim`修饰符
>





### 过滤器

![image-20210102172316242](C:\Users\PM\AppData\Roaming\Typora\typora-user-images\image-20210102172316242.png)

![image-20210102172334911](C:\Users\PM\AppData\Roaming\Typora\typora-user-images\image-20210102172334911.png)



## 2.组件化

  ![image-20210107142214896](C:\Users\PM\AppData\Roaming\Typora\typora-user-images\image-20210107142214896.png)

### 2.1VUE组件化思想

![image-20210107142402363](C:\Users\PM\AppData\Roaming\Typora\typora-user-images\image-20210107142402363.png)![image-20210107142624303](C:\Users\PM\AppData\Roaming\Typora\typora-user-images\image-20210107142624303.png)

### 2.2组件使用

组件的使用分为三个步骤：

> 1. 创建组件构造器
> 2. 注册组件
> 3. 使用组件

![image-20210107143143903](C:\Users\PM\AppData\Roaming\Typora\typora-user-images\image-20210107143143903.png)

![image-20210107144641947](C:\Users\PM\AppData\Roaming\Typora\typora-user-images\image-20210107144641947.png)

![image-20210107144819585](C:\Users\PM\AppData\Roaming\Typora\typora-user-images\image-20210107144819585.png)![image-20210107144846420](C:\Users\PM\AppData\Roaming\Typora\typora-user-images\image-20210107144846420.png)

![image-20210107144903311](C:\Users\PM\AppData\Roaming\Typora\typora-user-images\image-20210107144903311.png)

### 2.3全局组件与局部组件

> #### 全局组件
>
> 创建方法：
>
> ```javascript
> Vue.component('标签名', 组件构造器); //全局组件
> ```
>
> 特点：在多个Vue实例间可以共同使用

> #### 局部组件
>
> 创建方法：
>
> ```javascript
> const app = new Vue({
>    el: "#app",
>    components: {    //局部组件
>      标签名: 构造器,
>    }
>  });
> ```
>
> 特点：只能在对应的Vue实例中使用

### 2.4父组件和子组件

```javascript
 <script>
    // 第一个组件构造器
    const cpnC1 = Vue.extend({ //子组件
      template: `
      <div>
        <h2>title1</h2>
        <p>content1</p>
      </div>
      `,

    })
    // 第二个组件构造器
    const cpnC2 = Vue.extend({ //父组件
      template: `
      <div>
        <h2>title2</h2>
        <p>content2</p>
        <cpn1></cpn1>
      </div>
      `,
      components: {
        cpn1: cpnC1, //引入子组件
      }
    })
    const app = new Vue({
      el: "#app",
      components: {
        cpn2: cpnC2
      }
    })
  </script>
```

![image-20210107154901716](C:\Users\PM\AppData\Roaming\Typora\typora-user-images\image-20210107154901716.png)

###  2.5语法糖

```javascript
 Vue.component('cpn1', { //全局组件
      template: `
      <div>
        <h2>title1</h2>
        <p>content1</p>
      </div>
      `,
    })
```

```javascript
 const app = new Vue({
      el: "#app",
      components: { //局部组件
        'cpn2': {
          template: `
      <div>
        <h2>title2</h2>
        <p>content2</p>
      </div>
      `
        }
      }
    })
```

### 2.6模板抽离

方法一：`<script type="text/x-template" id="cpn"></script>`标签

```javascript
<body>
  <div id="app">
    <cpn></cpn>
  </div>
  <script type="text/x-template" id="cpn">
  <div>
    <h2>title</h2>
    <p>content</p>
  </div>
  </script>
  <script>
    Vue.component("cpn", {
      template: "#cpn"
    })
    const app = new Vue({
      el: "#app"
    })
  </script>
</body>
```

方法二：`template标签`

```javascript
<body>
  <div id="app">
    <cpn></cpn>
  </div>
  <template id="cpn">
    <div>
      <h2>title</h2>
      <p>content</p>
    </div>				
  </template>
  <script>
    Vue.component("cpn", {
      template: "#cpn"
    })
    const app = new Vue({
      el: "#app"
    })
  </script>
</body>
```

### 2.7组件数据存放

**==组件不能访问vue实例内的数据==**

![image-20210109154907733](C:\Users\PM\AppData\Roaming\Typora\typora-user-images\image-20210109154907733.png)

```javascript
Vue.component("cpn", {
      template: "#cpn1",
      data() {//必须是函数
        return {
          title: "组件标题"
        }
      }
    })
```

组件中的data必须是函数，为了防止各个组件实例中公用同一个data对象。用了函数之后可以对每个组件分别return私有的属性。

### 2.8父子组件通信

<img src="C:\Users\PM\AppData\Roaming\Typora\typora-user-images\image-20210116150233197.png" alt="image-20210116150233197"  /><img src="C:\Users\PM\AppData\Roaming\Typora\typora-user-images\image-20210116150328996.png" alt="image-20210116150328996" style="zoom: 50%;" /><img src="C:\Users\PM\AppData\Roaming\Typora\typora-user-images\image-20210116150659712.png" alt="image-20210116150659712" style="zoom:50%;" />

#### 2.8.1props（父传子）

![image-20210116153152272](C:\Users\PM\AppData\Roaming\Typora\typora-user-images\image-20210116153152272.png)



```javascript
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <script src="./js/vue.js"></script>
</head>

<body>

  <div id="app">
    <!-- 需要将驼峰标识转化为以“-”连接的表示法 -->
    <cpn :c-names='names' :c-message='message'></cpn>
  </div>

  <template id="cpn">
    <div>
      <ul>
        <li v-for="(item, index) in cNames" :key="item">{{item}}</li>
      </ul>
      <h1>{{cMessage}}</h1>
    </div>
  </template>

  <script>
    // 组件构造器
    const cpn = { //子组件
      template: "#cpn",
      // 1.数组表示：
      // props: ['c_names', 'c_message'],//!!!!props属性内部不能使用驼峰命名法
      //2.对象表示
      props: {
        //1.类型限制
        // c_names: Array,
        // c_message: String,

        //2.提供一些默认值
        cMessage: {
          type: String,
          // default: 'default',//如果未传入数据，则使用默认值
          require: true //布尔值  表示这个参数必须传，不传的话会报错
        },
        cNames: {  //类型是对象或者数组时，默认值必须是函数
          type: Array,
          default() {
            return [1, 5, 1, 23, 111]
          }
        },

      },
      data() {
        return {
        }
      },
    }
    const app = new Vue({
      el: "#app",
      data() {
        return {
          message: 'rainbow-six',
          names: ["pm", "r4c", "G8", "KA1"]
        }
      },
      components: {
        cpn
      }
    })
  </script>
</body>

</html>
```

##### propos数据验证

![image-20210116153231064](C:\Users\PM\AppData\Roaming\Typora\typora-user-images\image-20210116153231064.png)

#### 2.8.2自定义事件（子传父）

![image-20210120152602649](C:\Users\PM\AppData\Roaming\Typora\typora-user-images\image-20210120152602649.png)

```javascript
<body>
  <!-- 父组件模板 -->
  <div id="app">
    <!-- 监听自定义事件 -->
    <cpn @item-click='cpnClick'></cpn>
  </div>
  <!-- 子组件模板 -->
  <template id="cpn">
    <div>
      <button v-for="(item, index) in categories" @click="btnClick(item)">
        {{item.name}}
      </button>
    </div>
  </template>

  <script>

    const cpn = { //子组件
      template: "#cpn",
      data() {
        return {
          categories: [
            { id: 812129, name: '热门推荐' },
            { id: 713553, name: '手机数码' },
            { id: 213123, name: '办公文具' },
            { id: 115453, name: '电动玩具' }
          ]
        }
      },
      methods: {
        btnClick(item) {
          //发射自定义事件
          this.$emit('item-click', item)
        }
      }
    }
    const app = new Vue({
      el: "#app",
      components: {
        cpn
      },
      methods: {
        cpnClick(item) {
          console.log(item.id);
        }
      },
    })
  </script>
</body>
```

#### 2.8.3总结

![image-20210120152704025](C:\Users\PM\AppData\Roaming\Typora\typora-user-images\image-20210120152704025.png)

![image-20210120212405231](C:\Users\PM\AppData\Roaming\Typora\typora-user-images\image-20210120212405231.png)

### 2.9父子组件访问

![image-20210123154543291](C:\Users\PM\AppData\Roaming\Typora\typora-user-images\image-20210123154543291.png)

#### 2.9.1父访问子

1. `$chlidren`

   > ```javascript
   > <body>
   >   <div id="app">
   >     <cpn></cpn>
   >     <button @click="btnClick">打印</button>
   >   </div>
   >   <template id="cpn">
   >     <div>
   >       <p>子组件</p>
   >     </div>
   >   </template>
   >   <script>
   >     const app = new Vue({
   >       el: "#app",
   >       data() {
   >         return {
   > 
   >         }
   >       },
   >       components: {
   >         cpn: {
   >           template: "#cpn",
   >           methods: {
   >             showMessage() {
   >               console.log("showMessage");
   >             }
   >           },
   >         }
   >       },
   >       methods: {
   >         btnClick() {
   >           console.log(this.$children);
   >           this.$children[0].showMessage();
   >         }
   >       },
   >     },
   >     )
   >   </script>
   > </body>
   > ```

   1. `$refs`

   > ```javascript
   > <body>
   >   <div id="app">
   >     <cpn></cpn>
   >     <cpn></cpn>
   >     <cpn></cpn>
   >     <cpn ref="theCpn"></cpn>
   >     <button @click="btnClick">打印</button>
   >   </div>
   >   <template id="cpn">
   >     <div>
   >       <p>子组件</p>
   >     </div>
   >   </template>
   >   <script>
   >     const app = new Vue({
   >       el: "#app",
   >       data() {
   >         return {
   > 
   >         }
   >       },
   >       components: {
   >         cpn: {
   >           template: "#cpn",
   >           methods: {
   >             showMessage() {
   >               console.log("showMessage");
   >             }
   >           },
   >           data() {
   >             return {
   >               name: "子组件name"
   >             }
   >           },
   >         }
   >       },
   >       methods: {
   >         btnClick() {
   >           // 2、$refs
   >           console.log(this.$refs.theCpn.name);//必须在组件上加"ref"属性，$refs才能生效
   > 
   >         }
   >       },
   >     },
   >     )
   >   </script>
   > </body>
   > ```

#### 2.9.2子访问父（促进耦合 不推荐）

1. `$parent`

   ```javascript
   <body>
     <div id="app">
       <cpn></cpn>
   
     </div>
     <template id="cpn">
       <div>
         <ccpn></ccpn>
       </div>
     </template>
     <template id="ccpn">
       <div>
         <p>子组件</p>
         <button @click="btnClick">按钮</button>
       </div>
     </template>
     <script>
       const app = new Vue({
         el: "#app",
         data() {
           return {
             name: "1"
           }
         },
         components: {
           cpn: {
             template: "#cpn",
             data() {
               return {
                 name: "2"
               }
             },
             components: {
               ccpn: {
                 template: "#ccpn",
                 methods: {
                   btnClick() {
                     //1.访问父组件$parent
                     console.log(this.$parent.$parent.name);
                   }
                 },
               }
             }
           }
         }
       })
     </script>
   </body>
   ```

2. `$root`

   ```javascript
   methods: {
                   btnClick() {
                     //1.访问父组件$parent
                     console.log(this.$parent.name);
                     //2.访问根组件$root
                     console.log(this.$root.name);
                   }
   ```


### 2.10插槽（slot）

- 目的：增加组件的扩展性
- 让使用者决定组件的展示效果

![image-20210125151824316](C:\Users\PM\AppData\Roaming\Typora\typora-user-images\image-20210125151824316.png)

#### 2.10.1插槽的基本使用

```javascript
<body>
  <div id="app">
    <cpn>
      <!-- 用来替换模板中的slot标签 -->
      <button>按钮</button>
    </cpn>
    <cpn>
      <!-- 如果有多个标签 每个标签都会作为替换元素并显示-->
      <span>content啊</span>
      <button>确认</button>
    </cpn>
    <cpn>
      <button>按钮</button>
    </cpn>
    <cpn></cpn>
    <cpn></cpn>
  </div>
  <template id="cpn">
    <div>
      <h1>我是组件</h1>
      <p>content</p>
      <slot>
        <!-- 设置默认值，如果没有替换标签 则使用默认值 -->
        <button>啊</button>
      </slot>
    </div>
  </template>
  <script>
    const app = new Vue({
      el: "#app",
      components: {
        cpn: {
          template: "#cpn",
        }
      }
    })
  </script>
</body>

```

#### 2.10.2具名插槽

![image-20210125154725200](C:\Users\PM\AppData\Roaming\Typora\typora-user-images\image-20210125154725200.png)

```javascript
<body>


  <div id="app">
    <cpn><span slot="center">replace</span></cpn>
    <cpn><span slot="left">replace</span></cpn>
    <cpn><button slot="right"> 提交</button></cpn>
  </div>


  <template id="cpn">
    <div>
      <slot name="left"><span>left</span></slot>
      <slot name="center"><span>middle</span></slot>
      <slot name="right"><span>right</span></slot>
    </div>
  </template>


  <script>
    const app = new Vue({
      el: "#app",
      components: {
        cpn: {
          template: "#cpn",
        }
      }
    })
  </script>


</body>
```

#### 2.10.3编译作用域

![image-20210125155920866](C:\Users\PM\AppData\Roaming\Typora\typora-user-images\image-20210125155920866.png)

```javascript
<body>


  <div id="app">
    <cpn v-show="isShow"></cpn>
    <!-- isShow使用的时vue实例中的isShow属性，而不是组件中的 -->
    <!-- 查找变量的时候都是在此标签所在模板（vue实例）中去查找 -->
  </div>


  <template id="cpn">
    <div>
      <span>content</span>
      <span v-show="isShow">aaa </span>
      <!-- 查找变量的时候都是在此标签所在模板（cpn模板）中去查找 -->
    </div>
  </template>


  <script>
    const app = new Vue({
      el: "#app",
      data() {
        return {
          isShow: true,
        }
      },
      components: {
        cpn: {
          template: "#cpn",
          data() {
            return {
              isShow: false,
            }
          },
        }
      }
    })
  </script>


</body>
```

#### 2.10.4作用域插槽

==**父组件替换插槽的标签，但是内容由子组件决定**==

![image-20210125160122281](C:\Users\PM\AppData\Roaming\Typora\typora-user-images\image-20210125160122281.png)

```javascript
<body>


  <div id="app">
    <cpn></cpn>


    <cpn>
      <!-- 目的是获取子组件的pLanguage -->
      <!--通过template去获取数据  -->
      <template slot-scope="slot">
        <div>
          <span>
            {{slot.data.join(' - ')}}
          </span>
        </div>
      </template>
    </cpn>

    <cpn>
      <template slot-scope="slot">
        <div>
          <span>
            {{slot.data.join(' … ')}}
          </span>
        </div>
      </template>
    </cpn>
  </div>


  <template id="cpn">
    <div>
      <slot :data="pLanguages">
        <ul>
          <li v-for="(item, index) in pLanguages">
            {{item}}
          </li>
        </ul>
      </slot>
    </div>
  </template>


  <script>
    const app = new Vue({
      el: "#app",
      data() {
        return {
        }
      },
      components: {
        cpn: {
          template: "#cpn",
          data() {
            return {
              pLanguages: ["C", "C++", "javascript", "python", "C#"]
            }
          },
        }
      }
    })
  </script>


</body>
```

## 3.模块化开发

![image-20210126174826854](C:\Users\PM\AppData\Roaming\Typora\typora-user-images\image-20210126174826854.png)![image-20210126175939181](C:\Users\PM\AppData\Roaming\Typora\typora-user-images\image-20210126175939181.png)

![image-20210126180035502](C:\Users\PM\AppData\Roaming\Typora\typora-user-images\image-20210126180035502.png)

![image-20210126180051385](C:\Users\PM\AppData\Roaming\Typora\typora-user-images\image-20210126180051385.png)

### 3.1 `CommonJS`

![image-20210126181438935](C:\Users\PM\AppData\Roaming\Typora\typora-user-images\image-20210126181438935.png)

### 3.2 ES6模块化

`export`与`import`

![image-20210126190326356](C:\Users\PM\AppData\Roaming\Typora\typora-user-images\image-20210126190326356.png)

![image-20210127170715323](C:\Users\PM\AppData\Roaming\Typora\typora-user-images\image-20210127170715323.png)

![image-20210127171326976](C:\Users\PM\AppData\Roaming\Typora\typora-user-images\image-20210127171326976.png)

![image-20210127171904049](C:\Users\PM\AppData\Roaming\Typora\typora-user-images\image-20210127171904049.png)