<template>
  <div class="blog-index">
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
.blog-index {
  padding: 1em;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.blog-entry {
  margin: 1em 0;
}
</style>
