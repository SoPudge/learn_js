# VUE3 学习第二次笔记

## Note1: 基本原则

## Note2: 计算属性和函数方法的区别

### 计算属性

- 计算属性是一种响应式的方法，用于复杂逻辑，并用于 VUE 模版中调用
- 计算属性需要引入 computed，`import {reactive,ref,computed}`
- 计算属性本质是使用了 computed 内部的 get()方法，但被隐藏
- 格式如下，本质上是声明一个计算属性名称，并使用 computed 引入需要响应式的属性函数
  - `const computedAttr = computed(()=>{ return True } )`
- 原则一：调用计算属性无需使用函数调用方法加上括号，只需要调用其相关名称即可
- 原则二：计算属性值会基于其响应式依赖被缓存，也就是说更新了其内部相关值，计算属性才会被更新。

### 函数方法

- 声明方式为标准 js 函数：`function f(){return True}`
- 调用该方法需要使用{{f()}}
- 与计算属性不同之处，函数方法每次刷新重新渲染的时候都会更新。

```
<script setup>
import { ref,computed } from 'vue'

const awesome = ref(true)

function switches(){
return !awesome.value
}

const switches2 = computed(()=>{
return !awesome.value
})
</script>

<template>
  <button @click="awesome = !awesome">toggle</button>

    <h1 v-show="switches2">Vue is awesome!</h1>
    <h1 v-show="!switches2">Oh no 😢</h1>

</template>
```
