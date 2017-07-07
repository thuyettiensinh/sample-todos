import moment from 'moment'
import Todo from 'domain/entities/todo'

/**
 * @param {Object} data
 */
export default function (data) {
    const attributes = Object.assign({}, data)

    if (attributes.createdAt) {
        attributes.createdAt = moment(attributes.createdAt)
    }

    if (attributes.updatedAt) {
        attributes.updatedAt = moment(attributes.updatedAt)
    }

    return new Todo(attributes)
}
