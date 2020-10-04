# javacsript基本语法-函数02

## 对象方法

一般来说，直接在对象当中绑定的函数，我们称之为对象的方法，如下

```
> var xiaoming = {
...     name: '小明',
...     birth: 1990,
...     age: function () {
.....         var y = new Date().getFullYear();
.....         return y - this.birth;
.....     }
... };
> xiaoming.age()
30
```

此例中，在对象xiaoming当中声明了一个函数方法，直接调用此方法可以计算出当前年份小明的岁数  
此方法中的this直接指代当前对象。

```
> function getAge(){
... var y = new Date().getFullYear()
... return y - this.birth
... }
> getAge
[Function: getAge]
> getAge()
NaN
> var xiaoming = {
... name:'小明',
... birth:1993,
... age:getAge
... }
> xiaoming.age()
27
```

此例中，并没有直接在对象xiaoming当中声明方法，而是在对象外声明，同时在对象中指明声明的方法，和上述例子一样  
但是如果直接调用getAge()则会报错，因为单独调用的方法其中this指向的是全局对象window  
如果通过obj.xxx()的形式调用，则this指向调用的对象，即obj，在此例当中指向xiaoming。

```
> var xiaoming = {
... name:'xm',
... birth:1995,
... age:function(){
..... function getAgeFromBirth(){
....... var y = new Date().getFullYear()
....... return y - this.birth
....... }
..... return getAgeFromBirth()
..... }
... }
> xiaoming.age()
NaN
```

此例中，xiaoming对象的age定义了一个双层的方法，在内层方法当中使用this，是无法指向到外层的xiaoming对象的  
实际上此this指向的是外层的函数getAgeFromBirth()且不再向上查找

```
> var xiaoming = {
...     name: '小明',
...     birth: 1990,
...     age: function () {
.....         var that = this; // 在方法内部一开始就捕获this
.....         function getAgeFromBirth() {
.......             var y = new Date().getFullYear();
.......             return y - that.birth; // 用that而不是this
.......         }
.....         return getAgeFromBirth();
.....     }
... };
> xiaoming.age()
30
```

此例中，为了解决在内层方法中this无法捕捉到指向对象的问题，可以在外层方法中定义一个that=this，  
即在上层函数当中将上层函数的this定义为that，内层函数当中使用that.birth，自然就是调用上层函数的this，可以直接指向对象

## apply和装饰器

this的问题在于书写程序的时候无法显式的了解this的指向对象，到底是全局window还是当前对象，或是undefined。  
所以可以使用apply调用直接指定函数的对象。

```
> function getAge(x) {
...     var y = new Date().getFullYear();
...     console.log(x)
...     return y - this.birth;
... }
> 
> var xiaoming = {
...     name: '小明',
...     birth: 1990,
...     age: getAge
... };
> 
> xiaoming.age(9); // 25
9
30
> getAge.apply(xiaoming, [9]);
9
30
> 
> getAge.call(xiaoming, 9); 
9
30
```

在上述例子当中，单独定义getAge方法后，可以使用apply来指明方法所对应调用的对象。

