import Vue from 'vue'
import _ from 'lodash'

import TodoForm from 'components/todo/TodoForm'

let component
const Constructor = Vue.extend(TodoForm)

function giveComponent(propsData) {
    component = new Constructor({ propsData }).$mount()
}

function thenTitleIs(title) {
    expect(component.$el.querySelector('h1').textContent)
        .to.equal(title)
}

function thenFormValidateFails(messages) {
    _.forEach(messages, (message, name) => {
        expect(component.$el.querySelector(`.input-${name} .error-message`).textContent)
            .to.equal(message)
    })
}

describe('TodoForm.vue', () => {
    it('should render default title', () => {
        giveComponent()

        thenTitleIs('Todo Form')
    })

    it('should render correct title', () => {
        giveComponent({ title: 'Add Todo' })

        thenTitleIs('Add Todo')
    })

    it('should validate required fields', (done) => {
        giveComponent()

        component.submitForm()

        Vue.nextTick(() => {
            thenFormValidateFails({
                name: 'The name field is required.'
            })
            done()
        })
    })

    it('should validate length of name', (done) => {
        giveComponent({ title: 'Add Todo' })

        component.name = 'a'

        Vue.nextTick(() => {
            thenFormValidateFails({
                name: 'The name field must be at least 3 characters.'
            })
            done()
        })
    })
})
