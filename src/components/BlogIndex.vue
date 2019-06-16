<template>
  <div class="blog-index">
    <div v-for="(entry, id) in entries" :key="id">
      <blog-entry class="blog-entry" v-bind="entry"/>
    </div>
  </div>
</template>
<script>
import BlogEntry from '@/components/BlogEntry'

export default {
  name: 'BlogIndex',
  components: {
    BlogEntry
  },
  props: {
    entries: Object
  }
}
</script>
<style>
.blog-index {
  margin: 1em;
}
.blog-entry {
  margin: 1em 0;
}
</style>
