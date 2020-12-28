<template>
  <button
    @click="$emit('click')"
    class="g-button"
    :class="{ [`icon-${iconPosition}`]: true }"
  >
    <g-icon class="icon" v-if="icon && !loading" :name="icon"></g-icon>
    <g-icon class="loading icon" v-if="loading" name="loading"></g-icon>
    <!-- 用插槽自定义显示文字 -->
    <div class="content">
      <slot></slot>
    </div>
  </button>
</template>

<script>
import Icon from "./icon.vue";
export default {
  name: "g-button",
  //用props 接收设置icon 属性
  // props:['icon','iconPosition']
  components: {
    "g-icon": Icon,
  },
  props: {
    icon: {},
    loading: {
      type: Boolean,
      default: false,
    },
    iconPosition: {
      type: String,
      default: "left",
      validator(value) {
        // console.log(value);
        return value !== "left" && value !== "right" ? false : true;
      },
    },
  },
};
</script>

<style lang="scss" scoped>
$button-height: 32px;
$font-size: 14px;
$button-bg: white;
$button-active-bg: #eee;
$border-radius: 4px;
$color: #333;
$border-color: #999;
$border-color-hover: #666;

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.g-button {
  font-size: $font-size;
  height: $button-height;
  padding: 0 1em;
  border-radius: $border-radius;
  border: 1px solid $border-color;
  background: $button-bg;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  vertical-align: middle;
  &:hover {
    border-color: $border-color-hover;
  }

  &:active {
    background-color: $button-active-bg;
  }

  &:focus {
    outline: none;
  }
  > .content {
    order: 2;
  }
  > .icon {
    order: 1;
    margin-right: 0.1em;
  }
  &.icon-right {
    > .content {
      order: 1;
    }
    > .icon {
      order: 2;
      margin-left: 0.1em;
      margin-right: 0;
    }
  }
  .loading {
    animation: spin 2s infinite linear;
  }
}
</style>
