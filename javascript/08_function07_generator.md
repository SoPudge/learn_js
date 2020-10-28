# javacsript基本语法-生成器

## 什么是js的生成器
javascript的生成器是一种在声明的时候不执行的函数，由next方法返回，并且下次返回都从上次yield  
返回处继续执行的函数。

一般来说生成器的声明方式为function* name()，并且含有yield关键字

next()方法每次返回自上次yield执行以来，并到本次yield语句之间的语句，同时yield可以接受参数  
接受参数的yield中，参数意为上次yield的返回值。

### 示例一

```
> function* test(){
... yield 10
... let y = yield 'foo'
... console.log(`y=${y}`)
... yield y;
... console.log(`y = ${y}`)
... return 'hello world'
... yield 'ok'
... }
> const x = test()
undefined
> x.next()
{ value: 10, done: false }
> x.next()
{ value: 'foo', done: false }
> x.next(5)
y=5
{ value: 5, done: false }
> x.next()
y = 5
{ value: 'hello world', done: true }
> 
```

### 示例二

```

```




