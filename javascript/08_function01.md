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


