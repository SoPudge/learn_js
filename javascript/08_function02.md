# javacsript基本语法-函数02

## js的变量作用域

一般js的变量和常见编程语言一样，作用域为申明的最小范围，并且函数内的变量可以引用函数外的变量，反之则不行。

```
> function foo(){
... var x = 1
... x = x + 1
... }
> x
'hello'
```

本例当中函数体内部的x和外部的x无关，并且仅在函数体内部生效

```
> function foo(){
... var r = x + 'world'
... return r
... }
undefined
> foo()
'helloworld'
> r
Uncaught ReferenceError: r is not defined
> 
```

在本例当中函数体内可以直接引用外部变量x，并且返回结果r，但是在函数体外部则无法直接使用变量r    
如果函数内外部的变量发生重名，则每个重名的变量都会寻找最近的赋值，即从内而外的查找赋值。

## 变量提升

在普通编程语言当中，变量仅在声明之后才能被使用，而在js当中即使变量在定义后面声明，实际使用也不会报错  
由于这个特性存在，在实际使用js的时候一般会提前将变量全部声明，以防出现错误


```
> function foo(){
... var x = 'Hello ' + y
... console.log (x)
... var y = 'Bob'
... }
> foo()
Hello undefined
```

在本例当中虽然y的赋值在调用之后，但仍然没有被报错，因为js引擎会将所有的var语句提升到函数体最前面。

## 命名空间

默认在浏览器对象中，js所有的函数，方法，声明的对象等都是默认被绑定到全局对象window当中，所以会有如下示例

```
>var course = 'lear js'
>alert(course)
>window.alert(course)
```

对于上述示例，alert方法和window.alert方法效果一致，由于这个特性，千万不要在js当中使用window这个关键字，  
否则会导致意想不到的错误，比较好的解决办法是自己定义一个命名空间，避免这类错误。

```
> var APP = {}
> APP.name = 'myapp'
> APP.version = 1.0
1
> APP.foo = function(){return 'foo'}
> APP.foo()
'foo'
> 
```

在js当中如果使用for循环在循环条件当中定义一个变量，此变量是可以在整个函数体内使用的，同样会造成命名冲突  
所以一般使用let/const关键字来定义相关的变量，保证其作用域最小。

```
function foo() {
    for (var i=0; i<100; i++) {
        //
    }
    i += 100; // 仍然可以引用变量i
}

function foo() {
    var sum = 0;
    for (let i=0; i<100; i++) {
        sum += i;
    }
    // SyntaxError:
    i += 1;
}
```

## 解构赋值

解构赋值在js当中可以使得代码大大简化，请看下列示例。
一般对多元素解构赋值的时候，需要使用中括号表示

```
// 快速赋值
> array = ['hello','js','python']
[ 'hello', 'js', 'python' ]
> var [x,y,z] = array
undefined
> x
'hello'
> y
'js'
> z
'python'
> 
```

```
> array = ['hello',['js','py']]

//嵌套赋值1
[ 'hello', [ 'js', 'py' ] ]
> var [x,y,z] = array
undefined
> x
'hello'
> y
[ 'js', 'py' ]
> z
undefined
//嵌套赋值
> var [x,[y,z]] = array
undefined
> x
'hello'
> y
'js'
> z
'py'
> 
```

解构赋值同样可以使用在对象当中，将对象的属性直接取出，与声明不同，取出对象属性需要使用大括号  
简单来说对于解构赋值，解构对象是什么就使用什么类型的括号。

```
> person
{
  name: '小明',
  age: 20,
  gender: 'male',
  passport: 'G-12345678',
  school: 'No.4 middle school',
  address: { city: 'Beijing', street: 'No.1 Road', zipcode: '100001' }
}
> var {name,age,address:street} = person
undefined
> street
{ city: 'Beijing', street: 'No.1 Road', zipcode: '100001' }
> 
> var {name,age,address:{street}} = person
undefined
> street
'No.1 Road'
> var {name,age,address:{city:cit}} = person
undefined
> cit
'Beijing'
> var {name,age,gs=true} = person
undefined
> gs
true
```

在上述例子当中使用了多个解构赋值的示例  
- 对于 var {name,age,address:street} = person，实际上将address的值赋值给street
- 对于 var {name,age,address:{street}} = person，实际上将address这个object当中的street的值赋值给street  
注意和第一个street的区别，不带大括号的street是指的整个address对象，而带上大括号的street则是指address当中street属性  
- 对于 var {name,age,address:{city:cit}} = person，将address当中city属性的值赋值给cit关键字。
- 对于 var {name,age,gs=true} = person，可以在解构赋值当中直接声明新的赋值，即gs=true

