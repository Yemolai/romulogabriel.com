<template>
  <div class="mt-4">
    <template v-for="(article, k) in articles">
      <blog-entry
        class="blog-entry"
        @click="openBlogPost"
        v-bind="article"
        :key="k" />
      </template>
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
  methods: {
    openBlogPost(slug) {
      window.open(`https://dev.to/yemolai/${slug}`, '_blank')
    }
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
