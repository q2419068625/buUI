 import Toast from './toast.vue'
 export default {
     install(Vue, options) {
         Vue.prototype.$toast = function(message, toastOptios) {
             let Constructor = Vue.extend(Toast)
             let toast = new Constructor({
                 propsData: toastOptios

             })
             toast.$slots.default = [message];
             toast.$mount()
             document.body.appendChild(toast.$el)
         }
     }
 }