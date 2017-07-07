import _ from 'lodash'

/**
 * @property {string} name
 * @property {moment} createdAt
 * @property {moment} updatedAt
 */
export default class Todo {
    constructor(attributes) {
        this.from(attributes)
    }

    from(attributes) {
        _.forEach(attributes, (value, index) => {
            this[index] = value
        })
    }
}
