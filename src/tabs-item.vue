<template>
   <div> <slot></slot></div>
</template>

<script>
export default {
    name:'Gtabs-item',
    props:{
        disabled:{
            type:Boolean,
            default:false
        }
    }
}
</script>

<style>

</style>