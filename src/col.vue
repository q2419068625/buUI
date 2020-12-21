<template>
  <div class="col" :class="colClass" :style="cloStyle">
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
let validator = (value) => {
  let keys = Object.keys(value);
  let valid = true;
  keys.forEach((key) => {
    if (!["span", "offset"].includes(key)) {
      valid = false;
    }
  });
  return valid;
};

export default {
  name: "GCol",
  props: {
    span: {
      type: [Number, String],
    },
    offset: {
      type: [Number, String],
    },
    ipad: {type: Object, validator},
    narrowPc: {type: Object,validator},
    pc: {type: Object,validator},
    widePc: {type: Object,validator},
  },
  data() {
    return {
      gutter: 0,
    };
  },
  methods:{
       createClasses (obj,str = ''){
          if(!obj){return []}
          let array = [];
          if(obj.span){
              array.push(`col-${str}${obj.span}`)
          }
          if(obj.offset){
              array.push(`offset-${str}${obj.offset}`)
          }
          return array
      }
  },
  computed: {
    colClass() {
      let { span, offset,ipad,narrowPc,pc, widePc} = this;
      let createClasses = this.createClasses;
      return [
       ...createClasses({span,offset}),
       ...createClasses(ipad,'ipad-'),
       ...createClasses(narrowPc,'narrow-pc-'),
       ...createClasses(pc,'pc-'),
       ...createClasses(widePc,'wide-pc'),
      ];
    },
    cloStyle() {
      return {
        paddingLeft: this.gutter / 2 + "px",
        paddingRight: this.gutter / 2 + "px",
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.col {
  $class: col-;
  @for $n from 1 through 24 {
    &.#{$class}#{$n} {
      width: ($n / 24) * 100%;
    }
  }
  $class-prefix: offset-;
  @for $n from 1 through 24 {
    &.#{$class-prefix}#{$n} {
      margin-left: ($n / 24) * 100%;
    }
  }
  
    @media (min-width: 577px) and (max-width: 768px) {
      $class-prefix: col-ipad-;
      @for $n from 1 through 24 {
        &.#{$class-prefix}#{$n} {
          width: ($n / 24) * 100%;
        }
      }
      $class-prefix: offset-ipad-;
      @for $n from 1 through 24 {
        &.#{$class-prefix}#{$n} {
          margin-left: ($n / 24) * 100%;
        }
      }
    }
    @media (min-width: 769px) and (max-width: 992px) {
      $class-prefix: col-narrow-pc-;
      @for $n from 1 through 24 {
        &.#{$class-prefix}#{$n} {
          width: ($n / 24) * 100%;
        }
      }
      $class-prefix: offset-narrow-pc-;
      @for $n from 1 through 24 {
        &.#{$class-prefix}#{$n} {
          margin-left: ($n / 24) * 100%;
        }
      }
    }
    @media (min-width: 993px) and (max-width: 1200px) {
      $class-prefix: col-pc-;
      @for $n from 1 through 24 {
        &.#{$class-prefix}#{$n} {
          width: ($n / 24) * 100%;
        }
      }
      $class-prefix: offset-pc-;
      @for $n from 1 through 24 {
        &.#{$class-prefix}#{$n} {
          margin-left: ($n / 24) * 100%;
        }
      }
    }
    @media (min-width: 1201px) {
      $class-prefix: col-wide-pc-;
      @for $n from 1 through 24 {
        &.#{$class-prefix}#{$n} {
          width: ($n / 24) * 100%;
        }
      }
      $class-prefix: offset-wide-pc-;
      @for $n from 1 through 24 {
        &.#{$class-prefix}#{$n} {
          margin-left: ($n / 24) * 100%;
        }
      }
    }
}

</style>
