<template>
   <div class="tabs-item" :class="classes" @click="xxx" > 
       <slot></slot>
    </div>
</template>

<script>
export default {
    name:'GtabsItem',
    data(){
        return{
            active:false
        }
    },
    props:{
        disabled:{
            type:Boolean,
            default:false
        },
        name:{
            type:Boolean|Number,
            required:true
        }
    },
    inject:['eventBus'],
    methods:{
        xxx(){
            this.eventBus.$emit('update:selected',this.name,this)
        }
    },
    computed: {
        classes() {
            return {
                active:this.active
            }
        }
    },
    created(){
        this.eventBus.$on('update:selected',(name)=>{
            this.active = name === this.name
        })
    }
}
</script>

<style lang="scss" scoped>
$blue:blue;
.tabs-item{
    flex-shrink: 0;
    padding: 0 1em;
    cursor: pointer;
    height: 100%;
    display: flex;
    align-items: center;
    &.active{
        color: $blue;
        font-weight: bold;
    }
}
</style>