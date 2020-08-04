# Javascript基本语法-条件判断

## for 循环

for循环由循环条件和循环体构成，循环条件由小括号包围，循环体由大括号包围  
循环条件当中每个条件需要以分号分割。

for循环可以用来遍历数组，需要以数组下标为遍历条件

```
> var x = 1
> var i
> for (i=1;i<=10;i++){
... x = x + i
... }

```

## for in 循环

```
> var o = {
...     name: 'Jack',
...     age: 20,
...     city: 'Beijing'
... };
> 
> for (var key in o){
... console.log(key)
... }
name
age
city

> for (var value in o){
... console.log(o[value])
... }
Jack
20
Beijing

```
for in循环可以遍历一个对象中所有的key，其中value需要使用通过key表达出来  
注意在循环一个数组的时候，循环的是数组的下标，而不是数组内容本身

## while 循环

```
> var x = 0
undefined
> var n = 99
undefined
> while (n > 0){
... x = x +n
... n = n - 2
... }
-1
> x
2500

```

while 循环用于判断退出的条件，如果一个循环进入和退出条件鲜明的时候，可以使用while循环。



