import Vue from 'vue'
import Router from 'vue-router'
import TodoList from 'components/todo/TodoList'
import TodoAdd from 'components/todo/TodoAdd'
import TodoEdit from 'components/todo/TodoEdit'
import NotFound from 'components/NotFound'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Todo List',
            component: TodoList
        },
        {
            path: '/add',
            name: 'Add todo',
            component: TodoAdd
        },
        {
            path: '/edit/:id',
            name: 'Edit todo',
            component: TodoEdit,
            props: true
        },
        {
            path: '*',
            component: NotFound
        }
    ]
})
