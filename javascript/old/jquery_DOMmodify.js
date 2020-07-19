'use strict';
//除了列出的3种语言外，请再添加Pascal、Lua和Ruby，然后按字母顺序排序节点：

$(function(){
    var btn = $('#btn')
    var langs = ['Pascal','Lua','Ruby']
    var ul = $('#test-div ul')

    //console.log(ul.append('<li><span>Java</span></li>'));
    btn.click(function() {
        //首先添加langs
        ul.append(langs.map(function(a) {
            return '<li><span>'+a+'</span></li>'
        }))
        //再进行排序
        //何时使用$取决于你传入的参数的类型，如果是selector，则可以使用$
        var li = ul.find('li')
        li.sort((x,y)=>{return $(x).text()>$(y).text()?1:-1})
        ul.append(li)
    })
    
})
