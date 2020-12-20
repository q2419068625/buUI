<template>
  <div class="col" :class="colClass"
  :style="cloStyle"
  >
      <div>
          <slot></slot>
      </div>
  </div>
</template>

<script>
export default {
    name:'GCol',
    props:{
        span:{
            type:[Number,String]
        },
        offset:{
            type:[Number,String]
        }
    },
    data(){
        return{
            gutter:0
        }
    },
    computed:{
        colClass(){
            let {span,offset} = this;
            return [span && `col-${span}`, offset && `offset-${offset}`]
        },
        cloStyle(){
            return{
                paddingLeft: this.gutter / 2+'px',
                paddingRight:this.gutter/2+'px'
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.col{
    $class:col-;
    @for $n from 1 through 24{
        &.#{$class}#{$n}{
            width: ($n / 24) * 100%;
        }
    }
    $class-prefix:offset-;
    @for $n from 1 through 24{
        &.#{$class-prefix}#{$n}{
            margin-left: ($n / 24) * 100%;
        }
    }
}
</style>