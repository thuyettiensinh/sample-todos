import axios from 'axios'

import todoFactory from 'domain/factories/todo-factory'

export default {
    /**
     * @returns {Promise<Todo[]>}
     */
    findAll() {
        return axios.get('http://localhost:8181')
            .then(response => response.data.map(todo => todoFactory(todo)))
    },

    /**
     * @param {number} id
     * @returns {Promise<Todo>}
     */
    findOne(id) {
        return axios.get(`http://localhost:8181/${id}`)
            .then(response => todoFactory(response.data))
    },

    /**
     * @param {Todo} todo
     * @returns {Promise<Todo>}
     */
    create(todo) {
        return axios.post('http://localhost:8181', todo)
            .then(response => todo.from(response.data))
    },

    /**
     * @param {Todo} todo
     * @returns {Promise<Todo>}
     */
    update(todo) {
        return axios.put(`http://localhost:8181/${todo.id}`, todo)
            .then(response => todo.from(response.data))
    }
}
