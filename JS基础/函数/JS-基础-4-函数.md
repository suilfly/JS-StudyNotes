

### 函数基础

#### 函数的基本写法

1. 

```javascript
function test(){}

```
2. 表达式定义

```javascript
var test = function(){}

/* 
 * 如果用 var test = function test1(){}
 * test1();
 * 这样执行会报错。可知这样赋值不会声明test1变量，但是test1可以在内部调用tes1函数
 * 
 * test.name => 'test1';test1不能再外部调用，但是test函数的name属性值却是test1
 */

```
#### 函数的组成部分：函数名，[参数]，[返回值]，return

  ##### 形参与实参
   - ###### 形参：参数占位符

    ```javascript
    /* 获取形参的长度 */
    function test(a,b,c){}
    console.log(test.length); // 3
    ``` 

- ###### 实参：实际传递的参数

```javascript

/* 获取实参的信息：arguments */

/* 获取实参的长度 */
function test(a,b){
    console.log(arguments)
    console.log(arguments.length);
}
test(1,2,3); // 3，可以看出实参和形参的个数不一定相等
```
- arguments反映了实参和形参的映射关系
```javascript
function test(a,b){
    a = 3;
    console.log(arguments[0]);
}
test(1,2); // 3

test(); // undefined
/* 总结：
 * 1.形参被赋了值的,arguments对应的值可以修改
 * 2.没有被赋值的形参，其对应的arguments值不可改，值为undefined
 */

```
```javascript
function test(a,b){
    arguments[0] = 3;
    console.log(a);
}
test(1,2); // 3

test(); // undefined
/* 总结：
 * 1.形参被赋了值的可以被arguments修改
 * 2.没有被赋值的形参不可改，值为undefined
 */

```
- ###### 初始化参数
```javascript
function test(a = 1,b = 2){
    console.log(arguments[0],a);
}
test(undefined,3); // undefined 1
/* 对形参初始化，a = 1
 * 但是对应的实参值是undefined所以arguments[0]=undefined */
```
```javascript
/* 兼容性写法 */
function test(a,b){
    a = arguments[0] || 1;
    b = arguments[1] || 2;
}
// 或
function test(a,b){
    if(typeof arguments[0] == 'undefined')
        a = 1;
    if(typeof arguments[1] == 'undefined')
        b = 1;    
}
//或
function test(a,b){
    a = typeof arguments[0] == 'undefined'? 1 : a;
    b = typeof arguments[1] == 'undefined'? 2 : b;
}
```


##### 函数的返回

> 1. return的作用：①终止函数执行 ②返回值，作为函数执行的结果
> 2. 不指定return语句的函数，默认返回undefined
> 3. 构造函数被实例化后返回this

> ### 函数基础总结
> 函数式编程：一个固定的功能或程序段被封装的过程，在这个封装体中需要一个入口（参数）和出口（返回）
> 函数的作用：把抽象重复的代码独立出来且有模块的单一责任制（希望一个功能出一个模块，并且希望这个模块不依赖其他模块，具有独立性），解耦合

## 函数进阶

### 变量提升和函数提升

```javascript
test(); // 函数正常执行
function test(){}

console.log(a); // undefined
var a = 1;
```

### 预编译

> JS引擎：①通篇检查语法错误  ②预编译 ③ 解释一行执行一行

- #### 创建GO（Global Object）全局上下文

   - **暗示全局变量**（imply global variable）

   ```javascript
   a = 1; // 未被声明就定义
   console.log(a); // 1
   ```
   ```javascript
   function test(){ var a = b = 1 }
   test();
   console.log(b); // 1
   ```

   >**在全局中不管是否声明(var)变量都为window的属性**

代码示例

```javascript

function test(){}

console.log(a); // undefined
var a = 1;
var b = function(){}
```
<img src="https://suilfly.github.io/img/AO-2.png"/>

- 这也就解释了为什么console.log(a)输出undefined

- #### 函数预编译： 创建AO（Active Object）函数上下文

```javascript
function test(a){
    console.log(a); // ①
    var a = 1;
    console.log(a); // ②
    function a(){}
    console.log(a); // ③
    var b = function(){}
    console.log(b); // ④
    function d(){}
}
test(2);

```
> 上述代码AO创建的过程
<img src="https://suilfly.github.io/img/AO-1.png" />
所以①输出f a(){} ②输出1 ③输出1 ④输出f (){}

学习了AO，GO，就自然而然的引出了<a href="/2021/05/12/JS-基础-5-作用域与作用域链/" title="点击查看本节内容">作用域与作用域链</a>