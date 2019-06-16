<template>
  <div class="bg-image fixed" :style="dynamicBackgroundImage"/>
</template>
<script>
export default {
  name: 'FakeBackgroundImage',
  props: {
    url: String
  },
  computed: {
    dynamicBackgroundImage() {
      return {
        background: `url("${this.url}")`
      }
    }
  }
}
</script>

<style scoped>
.bg-image {
  overflow: hidden;
  /* Add the blur effect */
  filter: blur(8px) saturate(0.2);
  -webkit-filter: blur(8px) saturate(0.2);

  width: calc(100vw + 32px);
  height: calc(100% + 96px);

  margin-top: -32px;
  margin-left: -12px;
  padding: -16px;

  /* Center and scale the image nicely */
  background-position: center;
  background-repeat: no-repeat !important;
  background-size: cover !important;
  z-index: -999;
}
</style>
