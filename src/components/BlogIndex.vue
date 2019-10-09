<template>
  <div class="mt-4">
    <blog-entry class="blog-entry" v-for="(article, k) in articles" :key="k" v-bind="article"/>
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
    articles: Array
  },
  computed: {
    entries () {
      return (this.articles || []).map(({
        title,
        description,
        tags,
        created_at
      }) => ({
        title,
        description,
        tags,
        createdAt: new Date(created_at).toLocaleDateString()
      }))
    }
  }
}
</script>
<style>
</style>
