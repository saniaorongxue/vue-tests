import { mount } from 'avoriaz';
import List from '../../../src/components/List.vue';
import Vue from 'vue';

describe('List', () => {

  it('测试1', () => {
    const Constructor = Vue.extend(List);
    const ListComponent = new Constructor().$mount();

    expect(ListComponent.$el.textContent).to.contain('play games');
  })

  it('测试2', () => {
    const Constructor = Vue.extend(List);
    const ListComponent = new Constructor().$mount();

    ListComponent.newItem = 'brush my teeth';

    // simulate click event
    const button = ListComponent.$el.querySelector('button');
    const clickEvent = new window.Event('click');
    button.dispatchEvent(clickEvent);
    ListComponent._watcher.run();

    // assert list contains new item
    expect(ListComponent.$el.textContent).to.contain('brush my teeth');
    expect(ListComponent.listItems).to.contain('brush my teeth');
  })

  it('测试3', () => {
    const ListComponent = mount(List);

    ListComponent.setData({
      newItem: 'brush my teeth',
    });

    const button = ListComponent.find('button')[0];
    button.dispatch('click');

    expect(ListComponent.text()).to.contain('brush my teeth');
    expect(ListComponent.data().listItems).to.contain('brush my teeth');
  })
})
