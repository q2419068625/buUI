<template>
 <div> <slot></slot></div>
</template>

<script>
import Vue from 'vue'
export default {
    name:'Gtabs',
    props:{
        selected:{
            type:String,
            required:true
        },
        direction:{
            type:String,
            default:'horizontal',
            validator(value){
                return ['horizontal','vertical'].indexOf(value) >=0
            }
        }
    },
    data() {
        return{
            eventBus:new Vue()
        }
    },
    provide(){
        return{
            eventBus:this.eventBus
        }
    },
    mounted(){
        // this.$emit('update:selected','这是 $emit 出来的事件')
        this.eventBus.$emit('update:selected',this.selected)
        // this.$emit('update:selected','xxx')
    }
}
</script>

<style>

</style>