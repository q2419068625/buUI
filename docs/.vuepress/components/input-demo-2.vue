<template>
  <div>
      <h2>双向绑定</h2>
      <p><strong>预览</strong></p>
      <g-input v-model="value"></g-input>
      <div>value:{{value}}</div>
      <p><strong>代码</strong></p>
      <pre><code>{{content}}</code></pre>
  </div>
</template>

<script>
import Input from '../../../src/input'
export default {
    components:{
        'g-input':Input
    },
    data() {
        return{
            value:'1',
            content:
            `
            data:{
            value: '1'
          }

          <g-input v-model="value"></g-input>
          <div>
            value: {{value}}
          </div>
        `.replace(/^ {8}/gm, '').trim()
        }
    }
}
</script>

<style>

</style>