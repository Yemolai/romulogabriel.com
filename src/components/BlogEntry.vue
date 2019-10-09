<template>
  <card clickable @click="() => $emit('click', slug)">
    <div slot="title">{{ title }}</div>
    <div class="flex justify-between">
      <div class="description">
        <p>{{ description }}</p>
        <p class="text-xs font-bold antialiased">{{ creationDate }}</p>
      </div>
      <div class="interactions text-xs">
        <p>{{ reactions || 0 }} reações</p>
        <p>{{ comments || 0 }} comentários</p>
      </div>
    </div>
    <div slot="actions">
      <hr>
      <div class="w-full flex wrap justify-around">
        <template v-for="(tag, k) in tags">
          <blog-tag :tag="tag" :key="k"/>
        </template>
      </div>
    </div>
  </card>
</template>
<script>
import moment from 'moment'
import 'moment/locale/pt-br';
import BlogTag from '@/components/BlogTag'
import Card from '@/components/Card.vue'

moment.locale('pt-br')

export default {
  name: 'BlogEntry',
  components: {
    BlogTag,
    Card
  },
  props: {
    title: String,
    slug: String,
    description: String,
    comments: Number,
    reactions: Number,
    createdAt: String,
    tags: Array
  },
  data: function () {
    return {
      opened: false
    }
  },
  computed: {
    creationDate: function () {
      const creationMoment = moment(this.createdAt)
      return creationMoment
        .format('l')
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
