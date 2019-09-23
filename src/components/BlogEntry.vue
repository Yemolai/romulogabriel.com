<template>
  <card @click="() => $emit('click', slug)">
    <div slot="title">{{ title }}</div>
    <p>{{ description }}</p>
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
import Card from '@/components/Card.vue'

export default {
  name: 'BlogEntry',
  components: {
    Card
  },
  props: {
    title: String,
    slug: String,
    description: String,
    createdAt: String,
    tags: Array
  },
  data: function () {
    return {
      opened: false
    }
  },
  computed: {
    delimitedTags: function delimitedTags () {
      return (this.tags || []).map(tag => `#${tag}`).join(', ')
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
