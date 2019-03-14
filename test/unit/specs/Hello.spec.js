import Vue from 'vue'
import Hello from '../../../src/components/Hello.vue'

describe('Hello', () => {
  it('组件render', () => {
    const Constructor = Vue.extend(Hello)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.hello h1').textContent)
      .to.equal('Welcome to Your Vue.js Appsss')
  })
})
