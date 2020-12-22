 import Toast from './toast.vue'
 let currentToast
 export default {
     install(Vue, options) {
         Vue.prototype.$toast = function(message, toastOptios) {
             if (currentToast) {
                 currentToast.close();
             }
             currentToast = createToast({
                 Vue,
                 message,
                 propsData: toastOptios,
                 onClose: () => {
                     currentToast = null;
                 }
             })
         }
     }
 }


 function createToast({ Vue, message, propsData, onClose }) {
     let Constructor = Vue.extend(Toast)
     let toast = new Constructor({ propsData })
     toast.$slots.default = [message];
     toast.$mount()
     toast.$on('close', onClose)
     document.body.appendChild(toast.$el)
     return toast
 }