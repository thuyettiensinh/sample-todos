<template>
    <form @submit.prevent="submitForm">
        <h1>{{ title }}</h1>

        <div class="form-row input-name">
            <label class="label">Name</label>
            <p class="control">
                <input name="name" v-model="name" v-validate:name.initial="'required|min:3'" type="text" placeholder="Email">
            </p>
            <p v-show="errors.has('name')" class="error-message">{{ errors.first('name') }}</p>
        </div>

        <button class="btn btn-primary btn-block" type="submit">Submit</button>
    </form>
</template>

<script>
    import Todo from 'domain/entities/todo'

    export default {
        name: 'todo-form',

        props: {
            /**
             * The form title
             */
            title: {
                type: String,
                default: 'Todo Form'
            },

            /**
             * Todo object to be edited
             */
            todo: {
                type: Todo
            }
        },

        data() {
            return {
                name: this.todo ? this.todo.name : ''
            }
        },

        methods: {
            /**
             * Validate data and emit "submit" event
             */
            submitForm() {
                this.$validator.validateAll().then(() => {
                    this.$emit('submit', { name: this.name })
                }).catch(() => {})
            }
        }
    }
</script>
