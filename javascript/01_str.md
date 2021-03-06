# javacsript基本语法-字符串学习

Javascript字符串通过var定义，并且以引号包围

## 字符串赋值

```
>var x = 'string'
```

## 字符串转义
由于字符串必须由引号包围，所以必然会产生各种符号的嵌套会打断字符串的引号
如果需要在字符串中完整显示原始符号，需要通过"\"斜杠来表示转义符号，在任何
编程语言当中都适用。

```
> var x = 'i\'m \"ok\"'
> x
`i'm "ok"`
```

## 多行字符串
JS当中有时候需要使用到多行字符串，则需要用特殊的方式将字符串包围，这种符号是反引号

```
> `hello
... world
... hi
... hello`

'hello\nworld\nhi\nhello'
```

## 字符串拼接方法
对于字符串来说，拼接是使用最多的场景，下面列出JS几种拼接字符串的方

### 1. 直接拼接字符串 

此类方式适合临时使用

```
> 'abc' + 'def'
'abcdef'
```

### 2. 模版字符串拼接 
通过模版可以在字符串中直接加入变量，方便程序调用生成不同内容的字符串，更加灵活  
需要注意的是，模版字符串不使用引号包围，而是使用反引号包围，即小写状态下的esc下方按键
```
> var name = '小明'
> var age = '20'
> var result = `你好，${name}，我今年${age}岁了`
> result
'你好，小明，我今年20岁了'
```

## 字符串其他常用方法
一般字符串还涉及到字符串内容获取，截取等基本操作，一并列出

### 1. 字符串内容获取
此时可以将字符串看成一个Array通过中括号加上下标的方式获取字符串中每个字符  
但字符串中的字符不可改变。

```
> var x = 'today is a good day'
> x
'today is a good day'
> x[0]
't'
> x[9]
'a'
> x[0] = 'a'
'a'
> x
'today is a good day'
```

### 2. 字符串截取方法
字符串截取是操作字符串中非常常用的一个方法，简单的编程语言直接通过切片即可操作  
js需要通过单的substring方法操作，仅需要传递截取开始，和截取结束两个参数即可，同样结束字符串位置为n-1  
原因是JS的下标计算也是从0开始

```
> x
'today is a good day'
> x.substring(0,7)
'today i'
```


