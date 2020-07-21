# javacsript基本语法-数组学习

## 数组的创建与赋值

直接通过赋值操作符可以对数组进行初始化，初始化的数组长度仍然可以改变  
修改数组的长度可以快速新增空元素，或者逆向删除已有元素
```
> var arr = [1,2,3,4,'hello','world']
undefined
> arr
[ 1, 2, 3, 4, 'hello', 'world' ]
> arr.length
6
> arr.length = 9
9
> arr
[ 1, 2, 3, 4, 'hello', 'world', <3 empty items> ]
> 
> arr.length = 2
2
> arr
[ 1, 2 ]

```

对数组的元素可以通过下标来获取，但只能正向获取而无法逆向获取元素

```
> arr[3]
4
> arr[-4]
undefined
```

可以直接通过截取的方法对数组进行操作，获得不同大小的数组  
slice方法传入两个参数即数组的前后下标，以此来截取数组，可以省略参数1，达到向后截取的目的  
如果不传入任何参数，则可以直接复制一个新数组
```
> var arr = [1,2,3,4,'hello','world']
undefined
> arr.slice(0,3)
[ 1, 2, 3 ]
> arr.slice(3)
[ 4, 'hello', 'world' ]
> arr.slice()
[ 1, 2, 3, 4, 'hello', 'world' ]
```

## 数组的增删改查

可以通过push/pop方法向数组的末尾添加或删除一个/若干个元素  
push方法可以接受多个参数，依次向数组的末尾添加相关元素  
pop方法不接受参数，直接从数组的末尾删除元素，可以多次调用该方法
```
> var arr = [1,2,3,4,'hello','world']
undefined
> 
> arr.push('a','b')
8
> arr
[ 1, 2, 3, 4, 'hello', 'world', 'a', 'b' ]
> arr.pop()
'b'
> arr
[ 1, 2, 3, 4, 'hello', 'world', 'a' ]
> arr.pop()
'a'
> arr
[ 1, 2, 3, 4, 'hello', 'world' ]
> 
```

可以通过unshift/shift方法向数组的头尾分别增加/删除元素，使用方法类似push/pop  
unshift方法类似于push方法，向数组开头添加若干元素  
shift则和pop方法类似，不接受参数，直接移除数组开头的元素
```
> var arr = [1,2,3,4,'hello','world']
undefined
> arr.unshift('a','b')
8
> arr
[ 'a', 'b', 1, 2, 3, 4, 'hello', 'world' ]
> arr.shift()
'a'
> arr
[ 'b', 1, 2, 3, 4, 'hello', 'world' ]
> arr.shift()
'b'
> arr
[ 1, 2, 3, 4, 'hello', 'world' ]
> 
```

通过splice方法可以对数组进行多种方法的修改，它可以从指定的地方开始删除若干元素，再从该位置添加  
一般来说splice(x,y)前两个参数为从x开始向后删除y个元素，x/y后面则是从x的地方添加的具体元素  
- arr.splice(x,y,a,b)：从x（含x）开始向后删除y个元素，同时从x开始添加a，b两个元素到arr  
- arr.splice(x,y)：从x开始删除y个元素，不添加任何元素  
- arr.splice(x,0,a,b)：从x开始向后删除0个元素（即不删除），再从x开始插入a，b两个具体的元素

```
> var arr = [1,2,3,4,'hello','world'A
undefined
> 
> arr.splice(2,2,'plus1','plus2')
[ 3, 4 ]
> arr
[ 1, 2, 'plus1', 'plus2', 'hello', 'world' ]
> arr.splice(2,3)
[ 'plus1', 'plus2', 'hello' ]
> arr
[ 1, 2, 'world' ]
> arr.splice(2,0,'add1','add2')
[]
> arr
[ 1, 2, 'add1', 'add2', 'world' ]
> 
```

## 数组的方法

concat方法将当前的数组和另外一个数组相连，并返回一个新的数组  
**请记住，concat方法不改变原数组，而是返回一个新对象**
```
> arr
[ 1, 2, 'add1', 'add2', 'world' ]
> 
> var added = [3,4]
undefined
> arr.concat(added)
[ 1, 2, 'add1', 'add2', 'world', 3, 4 ]
> arr
[ 1, 2, 'add1', 'add2', 'world' ]

```

join方法将数组的元素用字符串串联，然后返回该字符串

```
> arr
[ 1, 2, 'add1', 'add2', 'world' ]
> 
> arr.join('-')
'1-2-add1-add2-world'
```
