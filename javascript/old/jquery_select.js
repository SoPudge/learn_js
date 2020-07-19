'use strict';
//练习多个节点的选中和不选中操作

$(function(){
var
    form = $('#test-form'),
    langs = form.find('[name=lang]'),
    selectAll = form.find('label.selectAll :checkbox'),
    selectAllLabel = form.find('label.selectAll span.selectAll'),
    deselectAllLabel = form.find('label.selectAll span.deselectAll'),
    invertSelect = form.find('a.invertSelect');

// 重置初始化状态:
// 重置初始化状态:
form.find('*').show().off();
form.find(':checkbox').prop('checked', false).off();
deselectAllLabel.hide();
// 拦截form提交事件:
form.off().submit(function (e) {
    e.preventDefault();
    alert(form.serialize());
});

//全选

selectAll.change(function(){
  if (selectAll.is (':checked')){
    langs.prop('checked',true)
    selectAllLabel.hide()
    deselectAllLabel.show()
  }
  else{
  	langs.prop('checked',false)
    selectAllLabel.show()
    deselectAllLabel.hide()
  }
})

//反选
invertSelect.click(function(){
  langs.map(function(){
    $(this).prop('checked',$(this).is(':checked')?false:true)
  })
})

//勾上全部
//通过检测langs当中全部节点的checked状态，并返回由[true,false]等构成的数组
//检测数组当中是否存在一个false，如果存在则表示没有被完全选中，如果全true，则所有节点被选中
//此时通过三元运算符，在所有节点选中的情况下勾选全选复选框。
//jquery的map方法返回一个{}，通过get方法转换数组
langs.change(function(){
  langs.map(function(){
    return $(this).is(':checked')
  }).get().indexOf(false) == -1?selectAll.prop('checked',true):selectAll.prop('checked',false)&&selectAllLabel.show()&&deselectAllLabel.hide()
})
})
