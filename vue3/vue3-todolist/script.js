const app = Vue.createApp({
    //数据声明
    data() {
        return {
            message: '',
            todos: [
                {
                    id: 1,
                    title: 'Do the dishes'
                },
                {
                    id: 2,
                    title: 'Take out the trash'
                },
                {
                    id: 3,
                    title: 'Mow the lawn'
                }
            ],
        }
    },
    methods: {
        addtodo() {
            //回车添加元素
            this.todos.push({
                id:this.todos.length + 1,
                title:this.message
            })
        },
    }
})

//checkbox + label组件
app.component('todo-item',{
    props: ['title'],
    template: `
        <li>
        <input type="checkbox">
        <label>{{title}}</label>
        </li>
    `
})
app.mount('#todo')
