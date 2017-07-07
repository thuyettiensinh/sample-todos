<template>
    <table>
        <tr v-for="todo in todos">
            <td>
                <router-link :to="'/edit/' + todo.id">{{ todo.name }}</router-link>
            </td>
            <td>{{ todo.createdAt.fromNow() }}</td>
        </tr>

        <tr v-if="!todos.length">
            <td colspan="9">No todo found.</td>
        </tr>
    </table>
</template>

<script>
    export default {
        name: 'todo-table',

        props: {
            todos: {
                required: true
            }
        }
    }
</script>

<style lang="sass" scoped>
    table
        width: 90%
        margin: 0 auto
        text-align: left
</style>
