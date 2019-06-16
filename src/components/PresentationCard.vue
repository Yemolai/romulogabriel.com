<template>
  <card round-avatar :image-url="avatarUrl">
    <template slot="title">{{ name }}</template>
    <p>{{ ocupation }}</p>
    <p>@ {{ contractor }}</p>
    <template slot="actions">
      <pill
        v-for="(pill, key) in pills"
        :key="key"
        class="rounded-full mb-1"
        :color="pill.color"
        @click="open(pill.action, '_blank')"
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
    avatarUrl: String,
    name: String,
    ocupation: String,
    contractor: String,
    pills: Object
  }
}
</script>
