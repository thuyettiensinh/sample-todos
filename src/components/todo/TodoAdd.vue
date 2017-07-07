<template>
    <todo-form :title="'Add Todo'" @submit="save"></todo-form>
</template>

<script>
    import todoService from 'domain/services/todo-service'
    import TodoForm from 'components/todo/TodoForm'

    export default {
        components: { TodoForm },

        name: 'todo-add',

        methods: {
            /**
             * @param {any} data
             */
            save(data) {
                todoService.create(data).then(() => {
                    this.$router.push('/')
                })
            }
        }
    }
</script>
