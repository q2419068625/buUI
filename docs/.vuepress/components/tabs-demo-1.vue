<template>
  <div style="padding-top: 16px;">
    <h2>简单用法</h2>
    <p>
      <strong>预览</strong>
    </p>
    <g-tabs :selected="selected">
      <g-tabs-head>
        <g-tabs-item name="1">1</g-tabs-item>
        <g-tabs-item name="2">2</g-tabs-item>
      </g-tabs-head>
      <g-tabs-body>
        <g-tabs-pane name="1">content 1</g-tabs-pane>
        <g-tabs-pane name="2">content 2</g-tabs-pane>
      </g-tabs-body>
    </g-tabs>
    <p>
      <strong>代码</strong>
    </p>
    <pre><code>{{content}}</code></pre>
  </div>
</template>

<script>
import Tabs from "../../../src/tabs";
import tabsBody from "../../../src/tabs-body";
import tabsHead from "../../../src/tabs-head";
import tabsPane from "../../../src/tabs-pane";
import tabsItem from "../../../src/tabs-item";
export default {
  components: {
    "g-tabs": Tabs,
    "g-tabs-body": tabsBody,
    "g-tabs-head": tabsHead,
    "g-tabs-pane": tabsPane,
    "g-tabs-item": tabsItem,
  },
  data() {
    return {
      selected: "1",
      content: `
        data:{
              selected: '1'
        }

        <g-tabs :selected="selected">
          <g-tabs-head>
            <g-tabs-item name="1">1</g-tabs-item>
            <g-tabs-item name="2">2</g-tabs-item>
          </g-tabs-head>
          <g-tabs-body>
            <g-tabs-pane name="1">content 1</g-tabs-pane>
            <g-tabs-pane name="2">content 2</g-tabs-pane>
          </g-tabs-body>
        </g-tabs>
        `.replace(/^ {8}/gm, '').trim()
    };
  },
};
</script>

<style></style>
