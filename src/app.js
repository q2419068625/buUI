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