<template>
  <card @click="() => { opened = !opened }">
    <div slot="title">{{ title }}</div>
    <vue-markdown :source="opened ? body : firstParagraph"/>
    <div slot="actions">
      <hr>
      <div class="w-full justify-around">
        <div class="text-left created-at">{{ createdAt }}</div>
        <div class="text-right tags">{{ delimitedTags }}</div>
      </div>
    </div>
  </card>
</template>
<script>
import VueMarkdown from 'vue-markdown'

import Card from '@/components/Card.vue'

export default {
  name: 'BlogEntry',
  components: {
    Card,
    VueMarkdown
  },
  props: {
    title: String,
    body: String,
    createdAt: String,
    tags: Array
  },
  computed: {
    firstParagraph() {
      const paragraphs = this.body.split('\n')
      const first = paragraphs[0] || ''
      return first
    },
    delimitedTags() {
      return (this.tags || []).map(tag => `#${tag}`).join(' | ')
    }
  },
  data () {
    return {
      opened: false
    }
  }
}
</script>
<style scoped>
.tags {
  color: #202020;
  transition: cubic-bezier(0.445, 0.05, 0.55, 0.95) 300ms;
}
.tags:hover {
  color: #303030;
  transition: cubic-bezier(0.445, 0.05, 0.55, 0.95) 300ms;
}
</style>
