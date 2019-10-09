<template>
  <div id="app" class="min-h-full min-w-full">
    <div class="min-w-full min-h-full">
      <background-image url="https://source.unsplash.com/960x540/?tech,coding" />
      <div class="container mx-auto py-auto w-full h-full overflow-visible">
        <div class="flex justify-center content-center items-center h-full">
          <presentation-card :info="info" :links="links" />
        </div>
      </div>
      <div class="flex justify-center">
        <div class="mt-4 bg-gray-200 text-gray-700 rounded py-2 px-4 shadow-lg border">
          <h1 class="text-xl font-bold antialiased">Dev.to blog posts</h1>
        </div>
      </div>
      <blog-index :articles="articles" @click-article="slug => navigateToArticle(slug)"/>
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

import { links } from '@/data/author.json'

export default {
  name: 'App',
  components: {
    BackgroundImage,
    BlogIndex,
    PresentationCard
  },
  data() {
    return {
      info: {},
      links,
      articles: null
    }
  },
  methods: {
    open: function(...args) {
      window.open(...args)
    },
    async loadProfileData() {
      const info = await this.$githubAPI.getProfile('yemolai')
      this.info = info
    },
    async loadDevToArticles() {
      const articles = await this.$devToAPI.getArticles('yemolai')
      this.articles = articles
    },
    navigateToArticle (slug) {
      this.$router.push('/article/' + slug)
    }
  },
  mounted: function() {
    this.loadProfileData()
    this.loadDevToArticles()
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
