<template>
    <div v-loading="!todos">
        <router-link to="/add">Add todo</router-link>

        <todo-table :todos="todos" v-if="todos"></todo-table>
    </div>
</template>

<script>
    import todoRepository from 'domain/repositories/todo-repository'
    import TodoTable from 'components/todo/TodoTable'
    import LoadingDirective from 'directives/loading'

    export default {
        name: 'todo-list',

        components: { TodoTable },

        directives: {
            Loading: LoadingDirective
        },

        data() {
            return {
                todos: null
            }
        },

        created() {
            todoRepository.findAll().then((todos) => {
                this.$data.todos = todos
            })
        }
    }
</script>
