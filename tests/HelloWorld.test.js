import { mount } from '@vue/test-utils'
import HelloWorld from '../src/components/HelloWorld.vue'

const wrapper = mount(HelloWorld, {
  propsData: {
    msg: 'Welcome in Vue3'
  }
})

it('Props testing', ()=> {
    //expect(wrapper.props().msg).toBe('Welcome in Vue3')
    expect(wrapper.props('msg')).toBe('Welcome in Vue3')
})

