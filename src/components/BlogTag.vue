<template>
  <span
    class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
    @click="$emit('click', tag)">
    {{ tag }}
  </span>
</template>

<script>
export default {
  name: 'BlogTag',
  props: { tag: { type: String, required: true } }
}
</script>
