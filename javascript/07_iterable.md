# javacsript基本语法-字符串学习


## 什么是iterable对象
javascript当中的循环是对对象的属性本身的循环，就像for in对一个object循环，得到的结果是object的属性名称  
同样如果for in对一个Array数组循环，得到的实际上是数组的属性。

```
var xiaoming = {
...     name: '小明',
...     birth: 1990,
...     school: 'No.1 Middle School',
...     height: 1.70,
...     weight: 65,
...     score: null
... };
undefined
> 
> for (x in xiaoming){console.log(x)}
name
birth
school
height
weight
score
undefined
> 
> 
> arr = [1,2,3,4,5]
[ 1, 2, 3, 4, 5 ]
> arr.name = 'num'
'num'
> for (x in arr){console.log(x)}
0
1
2
3
4
name
undefined
```

上述示例当中，对于一个xiaoming对象，for in循环的是对象属性名称  
而对于arr数组来说，循环的是数组的元素，不过一旦给数组新增一个属性和值，那么for in同样会把新增的属性循环出来  
原因就是Array当中的元素本身可以被视作对象的属性值，下标作为属性名称，所以新增的属性同样可以被循环出来

为了解决类似的问题，向一些完备的编程语言看齐，js将数组，对象，等全部定义为iterable对象，使用新的语法来直接循环相应的值

## 使用for of来循环iterable对象

for of 用来遍历iterable对象，其中数组 map set都属于iterable对象，但对象本身不是。

```
> var a = ['A','B','C']
> a.name = 'Hello'
'Hello'
> for (var x of a){console.log(x)}
A
B
C
```

foreach 具有类似的功能，但foreach是一个对象方法，可以直接循环出对象的内容，而for of则是一个语法  
foreach方法接受一个函数作为参数，此函数包含三个参数，分别为iterable对象的元素，下标(对于map和set来说是元素名称)和对象本身

```
> a.forEach(function(element,index,array)
    {console.log(element + ', index = ',index)}
)
A, index =  0
B, index =  1
C, index =  2
```

```
> var m = new Map([['Michael',95],['Bob',87],['Tracy',66]])
> m.forEach(function(element,key){console.log(key + ':' + element)})
Michael:95
Bob:87
Tracy:66
```
