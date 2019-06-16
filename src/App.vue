<template>
  <div id="app" class="min-h-full min-w-full">
    <div class="min-w-full min-h-full">
      <background-image url="https://source.unsplash.com/960x540/?tech,coding"/>
      <div class="container mx-auto py-auto w-full h-full overflow-visible">
        <div class="flex content-center items-center h-full">
          <presentation-card v-bind="info" :pills="pills"/>
        </div>
      </div>
      <blog-index v-if="!!posts" :entries="posts"/>
    </div>
  </div>
</template>

<script>
import 'vue-awesome/icons/brands/linkedin-in'
import 'vue-awesome/icons/brands/github'
import 'vue-awesome/icons/brands/twitter'
import 'vue-awesome/icons/envelope-open.js'

import BackgroundImage from '@/components/BackgroundImage.vue'
import BlogIndex from '@/components/BlogIndex.vue'
import PresentationCard from '@/components/PresentationCard.vue'

import { info, pills } from '@/data/author.json'

export default {
  name: 'App',
  components: {
    BackgroundImage,
    BlogIndex,
    PresentationCard
  },
  data() {
    return {
      info,
      pills,
      posts: null
    }
  },
  methods: {
    open: function(...args) {
      window.open(...args)
    },
    loadPosts: async function() {
      const posts = await this.$posts.getEntries()
      this.posts = posts
    }
  },
  mounted: function() {
    this.loadPosts()
  }
}
</script>

<style scoped>
#app {
  text-align: center;
}

#app > .container {
  height: calc(100% -16px) !important;
  margin-top: -16px;
  padding-left: 16px;
}
</style>
