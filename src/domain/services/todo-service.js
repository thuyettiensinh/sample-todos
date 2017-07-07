import Todo from 'domain/entities/todo'
import todoRepository from 'domain/repositories/todo-repository'

export default {
    /**
     * @param {any} data
     * @returns {Promise<Todo>}
     */
    create(data) {
        const todo = new Todo(data)
        return todoRepository.create(todo)
    },

    /**
     * @param {Todo} todo
     * @returns {Promise<Todo>}
     */
    update(todo) {
        return todoRepository.update(todo)
    }
}
