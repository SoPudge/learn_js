# javacsript基本语法-函数02

## map

map是高阶函数，用法如下

```
> function pow(x){
... 
... return x*x
... }
> 
> var arr = [1,2,3,4,5,6,7,8,9]
> arr.map(pow)
[
   1,  4,  9, 16, 25,
  36, 49, 64, 81
]
> 
```

map方法主要用于创建一个新数组，其结果是数组当中每个元素通过调用函数返回的结果

## reduce

reduce方法对数组中的每个元素执行一个由用户提供的reduce函数，并将其结果汇总为单个值

```
> function product(arr){
...     return arr.reduce((x,y)=>x*y)
... }
> product(arr)
362880
> 
```

上述例子当中，reduce方法直接接受一个虚拟函数，计算arr对象当中的每个元素相乘，即求解连乘  
记住，对于reduce来说，是知道arr为一个数组的，所以直接定义两个元素连乘即可。

```
s = '123456'
> arr = s.split('').map(x=>x*1)
[ 1, 2, 3, 4, 5, 6 ]
> arr.reduce((x,y)=>x*10+y)
123456
```

在上述例子当中，将一个string转换成int，首先通过split和map将原始的string格式化成数字组成的数组  
然后通过reduce将该数组连续相加，变成int形式返回即可。

```
s = ['adam', 'LISA', 'barT']
> s.map(x=>x[0].toUpperCase()+x.substring(1).toLowerCase())
[ 'Adam', 'Lisa', 'Bart' ]
```

上述例子将一个随机字符串数组，格式化成首字母大写的字符串数组


## filter

filter也是一个常用的操作，它用于把Array的某些元素过滤掉，然后返回剩下的元素。  
下面是筛选素数的几个方法

```
function get_primes(arr){
    arr.filter(function(x){
        if (x === 1){return false}
        if (x === 2){return true}
        if (x > 2){
            for (let i=1;i<x;i++){
                if (x % i === 0){return false}
            }
        }
        return true
    })
}

```
