### 使用var声明
1. 即使是在严格模式和非严格模式下，重复的变量声明也不会报错
```javascript
"use strict";
var a = 1;
var a = 2;
console.log(a); // 2
```

2. 在全局上下文中，用var声明的变量就是Global Object的一个（non-configurable不可配置的）属性，所以变量的属性描述符不可改变，而且变量不能用delete删除
2. 在全局上下文中，用var声明的变量，变量名被添加到了global environment record上的[[VarNames]]（记录变量名的列表）
2. 这些储存在[[VarNames]]中的变量名，能够确保JS引擎在运行时能分辨出全局变量和单纯global object的属性。
2. 在全局上下文中声明的变量，作为global object的属性，为什么要设置为non-configurable呢?
   1. 这些标识符被看做是一个变量，而不是单纯全局对象上的属性
   1. JS有自动的内存管理，而且JS引擎认为对一个全局变量使用delete操作符是没有意义的
```javascript
"use strict";
var a = 1;
console.log(window.a); // TypeError:Cannot delete property 'a' of #<Window>
delete window.a;
console.log(window.a);
```
```javascript
// 非严格模式下
var a = 1;
console.log(window.a); // 输出1 
delete window.a;// Fails silently 静默失败：就是这个操作失败了，但是没有任何提示
console.log(window.a); // 1
```
### 
### Unqualified identifier assignments
什么是unqualified identifiers，如下：
```javascript
String('1');
foo;
```
​

全局对象在作用域链的顶端，JS在作用域链上去查找name中对应的值，所以全局对象上的属性可以在
任何作用域中被使用，而不需要用window，global等字样去限定。这就是unqualified identifiers。
​

```javascript
foo = 1;
console.log(window.foo); // 1
```
在严格模式下却是另一种结果
```javascript
"use strict"
foo = 1;
console.log(window.foo); 
// ReferenceError: foo is not defined
```
注意：JS中没有隐式或者未声明的变量，直接能给foo赋值，是因为JS自己在全局对象上声明了一个变量foo
