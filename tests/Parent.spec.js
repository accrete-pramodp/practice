import {mount} from '@vue/test-utils'
import Parent from '../src/components/Parent.vue'

describe('multiple test', ()=>{
    test('Rendered text field', ()=>{
        const wrapper = mount(Parent)
        expect(wrapper.text()).toBeTruthy()
    })

    test('Rendered text field', ()=>{
        const wrapper = mount(Parent)
        const toDo = wrapper.get('[id="todo"]')
        expect(toDo.text()).toBe('learn vuejs 3')
    })

})