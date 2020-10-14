# javacsript基本语法-函数02

## 箭头函数

箭头函数是js当中传统函数写法的简写，使得函数定义书写更加简洁  
箭头函数一般用于虚函数，即无需持久化函数的地方，或直接成为另议中函数写法

**规则一**

箭头函数需要使用赋值的方式使之持久化

```
> var x = name=>{console.log(name)}
> x('998')
998
//上述函数与下列函数一致
> function x(name){console.log(name)}
undefined
> x('987')
987
//函数写法之二
> var x = function (name){console.log(name)}
> x('777')
777
```

在本例当中三种函数写法一致，可见箭头函数基本上是由写法二演变而来。

**规则二**

如果参数只有一个，可以不用加括号，如果有多个参数，参数需要加小括号

```
> const na = (name,age)=>{console.log(name + 'the age is ' + age)}
> na('zzq',34)
zzqthe age is 34
>
```

**规则三**

如果函数体只有一句话，可以不加大括号

```
> const hisname = name=>console.log(name)
> hisname('zzq')
zzq
>
```

**规则四**

可以不写return，箭头函数会自动return

```
> const add = (p1, p2) => p1 + p2
> add(10, 25)
35
```

## THIS是什么

首先得明白this是使用call方法调用函数时传递的第一个参数，它可以在函数调用时修改  
在函数没有调用的时候this的值无法确定

**this在函数中的调用**

```
> function test(name){
... console.log(name)
... console.log(this)
... }
> test('Jerry')
> test.call(undefined,'Tom')
```

上述函数的常见调用方式为test('Jerry')，而其标准的调用则是test.call，传输参数为undefined  
即直接调用的时候，this方法指向的是window全局对象。

**对象中函数的调用**

```
> const obj = {
... name: 'Jerry',
... greet: function(){
..... console.log(this.name)
..... }
... }
undefined
> obj.greet()
Jerry
> obj.greet.call(obj)
Jerry
> obj.greet.call({name:'Spike'})
Spike
```

对象中的函数调用可以看到，其
