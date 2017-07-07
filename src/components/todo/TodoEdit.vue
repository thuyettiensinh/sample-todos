<template>
    <div v-loading="!todo">
        <todo-form :todo="todo" :title="'Edit Todo'" @submit="save" v-if="todo"></todo-form>
    </div>
</template>

<script>
    import todoRepository from 'domain/repositories/todo-repository'
    import todoService from 'domain/services/todo-service'
    import TodoForm from 'components/todo/TodoForm'
    import LoadingDirective from 'directives/loading'

    export default {
        props: ['id'],

        components: { TodoForm },

        directives: {
            Loading: LoadingDirective
        },

        name: 'todo-edit',

        data() {
            return {
                todo: null
            }
        },

        created() {
            this.fetchTodo()
        },

        methods: {
            /**
             * Fetch Todo from "id" prop
             */
            fetchTodo() {
                todoRepository.findOne(+this.id).then((todo) => {
                    this.todo = todo
                }).catch(() => {})
            },

            /**
             * Save Todo
             *
             * @param {Object} data
             */
            save(data) {
                this.todo.from(data)

                todoService.update(this.todo).then(() => {
                    this.$router.push('/')
                })
            }
        }
    }
</script>
