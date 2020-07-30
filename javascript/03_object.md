# javacsript基本语法-对象学习

## 对象的创建

JS的对象通过大括号表示，以key，value的形式呈现，每个键值对之间通过逗号分割

```
> var xiaoming = {
... name: 'xiaoming',
... birth: '1990',
... school: 'No1 middle school',
... height: '1.8',
... weight: '85',
... 'middle-school': 'no2 middle school'
... }
> 
> xiaoming
{
  name: 'xiaoming',
  birth: '1990',
  school: 'No1 middle school',
  height: '1.8',
  weight: '85'
}
> xiaoming.name
'xiaoming'
> xiaoming.birth
'1990'
```

## 对象的基本操作 


### 赋值
```
> xiaoming
{
  name: 'xiaoming',
  birth: '1990',
  school: 'No1 middle school',
  height: '1.8',
  weight: '85'
}
> xiaoming.age = 18
18
```
### 删除对象中的键值 

```
> xiaoming
{
  name: 'xiaoming',
  birth: '1990',
  school: 'No1 middle school',
  height: '1.8',
  weight: '85',
  age: 18
}
> delete xiaoming.age
true
> xiaoming
{
  name: 'xiaoming',
  birth: '1990',
  school: 'No1 middle school',
  height: '1.8',
  weight: '85'
}
> delete xiaoming['name']
true
> xiaoming
{
  birth: '1990',
  school: 'No1 middle school',
  height: '1.8',
  weight: '85'
}
> 
> delete xiaoming.body
true
> 
> xiaoming
{
  birth: '1990',
  school: 'No1 middle school',
  height: '1.8',
  weight: '85'
}
```
