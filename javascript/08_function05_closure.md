# javacsript基本语法-函数的闭包

函数的闭包即携带了状态的返回函数，可以将私有变量在外部引用，或者是可以读取函数内部变量的方法。例子说明  
**在js当中，内部函数总是可以访问其所在的外部函数中声明的参数和变量，即使在外部函数被返回（寿命终结）之后**

## 从外部获取局部变量

```
> var foo = function(){
...     let n = 999
...     this.getN = function(){return n}
...     this.modN = function(m){
.....         n = m
.....         return n
.....     }
... }
> var f = new foo()
undefined
> f.getN()
999
> f.modN(100)
100
> f.getN()
100
> 
```

本例说明，在创建了一个原型函数的对象f之后，可以直接通过f取出内部定义的变量，或者更改此变量  

```
function makeAdder(x) {
  return function(y) {
    return x + y;
  };
}

var add5 = makeAdder(5);
var add10 = makeAdder(10);

console.log(add5(2));  // 7
console.log(add10(2)); // 12
```
在这个示例中，我们定义了 makeAdder(x) 函数，它接受一个参数 x ，并返回一个新的函数。返回的函数接受一个参数 y，并返回x+y的值。
从本质上讲，makeAdder 是一个函数工厂 — 他创建了将指定的值和它的参数相加求和的函数。在上面的示例中，我们使用函数工厂创建了两个新函数 — 一个将其参数和 5 求和，另一个和 10 求和。
add5 和 add10 都是闭包。它们共享相同的函数定义，但是保存了不同的词法环境。在 add5 的环境中，x 为 5。而在 add10 中，x 则为 10。

