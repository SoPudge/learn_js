# javacsript基本语法-函数01

## 如何定义js函数

js函数有两种定义方式，一种通过var来申明，一种是直接通过function关键字创建

**通过function关键字直接声明**
```
> function abs(x) {
... if (x>0){
..... return x
..... }
... else {
..... return -x
..... }
... }
> abs(9)
9
> abs(-9)
9
```

**通过var关键字直接声明**

```
> var abs = function (x){
... if (x>0) {
..... return x
..... } else {
..... return -x
..... }
... }
> abs(-10)
10
```

## 函数的调用

js可以像其他编程语言一样调用函数foo(x)，但对函数参数并没有特别严格的限制，需要了解在不同情况下向函数传参所带来的结果

```
> abs(-10,99)
10
> abs()
NaN
> abs() === NaN
false
```

## 处理多个参数的函数

传统编程语言当中对函数参数有严格的限制，传入过多或过少参数都会引起报错，js对函数参数的处理有下列情况  

- 通过arguments关键字操作获取函数参数情况  

```
> function foo(x) {
...     console.log('x = ' + x); // 10
...     for (var i=0; i<arguments.length; i++) {
.....         console.log('arg ' + i + ' = ' + arguments[i]); // 10, 20, 30
.....     }
... }
> foo(10, 20, 30);
x = 10
arg 0 = 10
arg 1 = 20
arg 2 = 30
```

在本例当中，arguments代表所有函数参数的一个数组，可以通过循环数组来获取每个参数

- 通过rest关键字处理多个参数

```
> function foo(a, b) {
...     var i, rest = [];
...     if (arguments.length > 2) {
.....         for (i = 2; i<arguments.length; i++) {
.......             rest.push(arguments[i]);
.......         }
.....     }
...     console.log('a = ' + a);
...     console.log('b = ' + b);
...     console.log(rest);
... }
> foo(8,9)
a = 8
b = 9
[]
> foo(8,9,10,11)
a = 8
b = 9
[ 10, 11 ]
```

在本例当中，rest表示除了函数默认参数之外的所有参数，所以当传入参数和默认参数一样多的时候，console.log(rest)会提示undefine  
但当传入参数多于默认参数的时候，rest则发挥作用，代表了所有剩下参数组成的数组

在es6当中可以显式的将rest写在函数定义当中，指出该函数可以接受超过默认参数数量的参数，并在函数体当中做出相应处理  

```
> var foo = function(...rest){
... var n = 0
... for (var i of rest) {
..... n = n + i
..... }
... return n
... }
> foo(9,8,7,64,3)
91
> 
```

本例将rest作为函数的参数传入，无论该函数接受多少个参数都做相加的操作。
