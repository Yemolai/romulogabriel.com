<template>
  <card round-avatar :image-url="info.avatarUrl">
    <template slot="title">{{ info.name }}</template>
    <p>{{ info.bio }}</p>
    <p>{{ info.company }}</p>
    <template slot="actions">
      <pill
        v-for="(pill, key) in links"
        :key="key"
        class="rounded-full mb-1"
        :color="pill.color"
        @click="() => openURL(pill.action)"
      >
        <v-icon :name="key"/>
      </pill>
    </template>
  </card>
</template>
<script>
import Card from './Card'
import Pill from './Pill'
import VIcon from 'vue-awesome/components/Icon'

export default {
  name: 'PresentationCard',
  components: { Card, Pill, VIcon },
  props: {
    info: Object,
    links: Object
  },
  methods: {
    /**
     * Equivalent of clicking an anchor tag
     *
     * @param {string} url to navigate for
     * @param {string} target to change behaviour of the link
     */
    openURL (url, target = '_blank') {
      window.open(url, target)
    }
  }
}
</script>
