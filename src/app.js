import Vue from "vue";
import Button from "./button.vue";
import Icon from "./icon.vue";
import ButtonGroup from "./button-group.vue";
import Input from "./input.vue";
import Row from "./row.vue";
import Col from "./Col.vue";
import Layout from "./layout.vue";
import Header from "./header.vue";
import Content from "./content.vue";
import Footer from "./footer.vue";
import Sider from "./sider.vue";
import Toast from "./toast.vue";
import plugin from "./plugin.js";
import Tabs from "./tabs.vue";
import TabsHead from "./tabs-head.vue";
import TabsBody from "./tabs-body.vue";
import TabsItem from "./tabs-item.vue";
import TabsPane from "./tabs-pane.vue";
import Popover from "./popover.vue";
import CollapseItem from "./collapse-item.vue";
import Collapse from "./collapse.vue";

Vue.component("g-button", Button); //全局Button组件
Vue.component("g-icon", Icon); //全局Icon组件
Vue.component("g-button-group", ButtonGroup); //全局ButtonGroup组件
Vue.component("g-input", Input); //全局Input组件
Vue.component("g-row", Row); //全局Row组件
Vue.component("g-col", Col); //全局Col组件
Vue.component("g-layout", Layout); //全局Layout组件
Vue.component("g-header", Header); //全局Header组件
Vue.component("g-content", Content); //全局Content组件
Vue.component("g-footer", Footer); //全局Footer组件
Vue.component("g-sider", Sider); //全局Sider组件
Vue.component("g-toast", Toast); //全局Toast组件
Vue.use(plugin);
Vue.component('g-tabs',Tabs)
Vue.component('g-tabs-head',TabsHead)
Vue.component('g-tabs-body',TabsBody)
Vue.component('g-tabs-item',TabsItem)
Vue.component('g-tabs-pane',TabsPane)
Vue.component('g-popover',Popover)
Vue.component('g-collapse',Collapse)
Vue.component('g-collapse-item',CollapseItem)





new Vue({
  el: "#app",
  data: {
   selectedTab:['1']
  },
  methods: {
    yyy(data){
      console.log(data);
    },
    showToast1() {
      this.showToast("top");
    },
    showToast2() {
      this.showToast("middle");
    },
    showToast3() {
      this.showToast("bottom");
    },
    showToast(position) {
      this.$toast("123", {
        closeButton: {
          text: `${parseInt(Math.random() * 100)}已充值`,
          callback() {
            console.log("他说已充值");
          },
        },
        position,
        enableHtml: false,
        autoClose: 3,
      });
    },
  },
  created() {},
});

import chai from "chai";
import spies from "chai-spies";

chai.use(spies);

const expect = chai.expect;
