# Javascript基本语法-条件判断

## Map数据结构

```
> var m = new Map([['Michael',95],['Bob',86],['Tracy',76]])
undefined
> m
Map(3) { 'Michael' => 95, 'Bob' => 86, 'Tracy' => 76 }
> m.get('Tracy')
76
> 
> var m = new Map()
undefined
> m
Map(0) {}
> m.set('Adam',98)
Map(1) { 'Adam' => 98 }
> m.set('Gosh',86)
Map(2) { 'Adam' => 98, 'Gosh' => 86 }
> m.delete('Gosh')
true
> m
Map(1) { 'Adam' => 98 }
> 
```

Map是一种特殊的key-value数据结构，可以使用任意字符/数字等作为key，用以快速查找数据  
由于Map的特殊性，key元素不能重复，如果重复进行设置，后者会覆盖前者的value

## Set数据结构

```
> var s2 = new Set([1,2,3,4,5,1,1])
undefined
> s2
Set(5) { 1, 2, 3, 4, 5 }
> s2.add(9)
Set(6) { 1, 2, 3, 4, 5, 9 }
> s2
Set(6) { 1, 2, 3, 4, 5, 9 }
> s2.add(5)
Set(6) { 1, 2, 3, 4, 5, 9 }
> s2.delete(9)
true
> s2
Set(5) { 1, 2, 3, 4, 5 }
```

Set为单独存储value的数据结构，且不重复，申明Set可以为空，也可以传入一个数组作为申明  
通过add/delete方法可以对Set当中的元素进行添加和删除
