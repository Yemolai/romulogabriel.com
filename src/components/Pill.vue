<template>
  <div @click="$emit('click')" :class="styleClasses">
    <slot></slot>
  </div>
</template>
<script>
export default {
  props: {
    textColor: {
      type: String,
      default: "white"
    },
    color: {
      type: String,
      default: "blue"
    }
  },
  data() {
    return {
      styleClasses: [
        "pill-component",
        "transition-fade",
        "icon-pointer",
        "icon-padding",
        "mr-1",
        "border-b-1",
        "rounded",
        "px-2",
        "bg-transparent",
        `hover:bg-${this.color}-400`,
        "hover:text-gray-100",
        "text-gray-600",
        `border-${this.color}-700`,
        `hover:border-${this.color}-500`
      ]
    };
  }
};
</script>
<style>
.icon-pointer {
  cursor: pointer;
}
.icon-padding {
  padding-top: 0.01em;
  padding-bottom: 0.2em;
}
.pill-component {
  transition: all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1) 0.1s;
}
.pill-component:hover {
  transition: all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;
}
</style>
