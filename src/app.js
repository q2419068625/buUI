import Vue from 'vue';
import Button from './button.vue';
Vue.component('g-button', Button) //全局组件
new Vue({
    el: '#app'
})