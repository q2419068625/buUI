import Vue from 'vue';
import Button from './button.vue';
import Icon from './icon.vue';
import ButtonGroup from './button-group.vue';
Vue.component('g-button', Button) //全局Button组件
Vue.component('g-icon', Icon) //全局Icon组件
Vue.component('g-button-group', ButtonGroup) //全局Icon组件
new Vue({
    el: '#app',
    data: {
        loading1: false,
        loading2: false
    }
})

import chai from 'chai';

const expect = chai.expect;
//单元测试

{
    const Constructor = Vue.extend(Button);
    const vm = new Constructor({
        propsData: {
            icon: 'settings'
        }
    })
    vm.$mount();
    let useElement = vm.$el.querySelector("use");
    let href = useElement.getAttribute('xlink:href');
    expect(href).to.eq('#i-settings');
    vm.$el.remove();
    vm.$destroy()
}

{
    const Constructor = Vue.extend(Button);
    const vm = new Constructor({
        propsData: {
            icon: 'settings',
            loading: true
        }
    })
    vm.$mount();
    let useElement = vm.$el.querySelector("use");
    let href = useElement.getAttribute('xlink:href');
    expect(href).to.eq('#i-loading');
    vm.$el.remove();
    vm.$destroy()
}

{
    const div = document.createElement('div');
    document.body.appendChild(div);

    const Constructor = Vue.extend(Button);
    const vm = new Constructor({
        propsData: {
            icon: 'settings'
        }
    })
    vm.$mount(div);
    let svg = vm.$el.querySelector("svg");
    let { order } = window.getComputedStyle(svg);
    expect(order).to.eq("1");
    vm.$el.remove();
    vm.$destroy()
}

{
    const div = document.createElement('div');
    document.body.appendChild(div);

    const Constructor = Vue.extend(Button);
    const vm = new Constructor({
        propsData: {
            icon: 'settings',
            iconPosition: 'right'
        }
    })
    vm.$mount(div);
    let svg = vm.$el.querySelector("svg");
    let { order } = window.getComputedStyle(svg);
    expect(order).to.eq("2");
    vm.$el.remove();
    vm.$destroy()
}