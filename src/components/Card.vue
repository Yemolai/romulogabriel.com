<template>
  <div
    class="border m-6 rounded-xs mx-auto max-w-lg shadow-lg rounded-lg overflow-hidden bg-gray-200"
  >
    <div class="sm:flex sm:items-center px-3 py-3">
      <img
        v-if="!!imageUrl"
        :class="['block', 'h-48', 'rounded' + (roundAvatar ? '-full' : ''), 'mx-auto', 'mb-4', 'sm:mb-0', 'sm:mr-4', 'sm:ml-0']"
        :src="imageUrl.length ? imageUrl : logo"
      >
      <div class="text-center sm:text-left sm:flex-grow">
        <div class="mb-4">
          <p class="text-xl leading-tight mb-1">
            <slot name="title"></slot>
          </p>
          <p class="text-sm leading-tight text-grey-dark">
            <slot></slot>
          </p>
        </div>
        <div class="flex flex-wrap justify-center mb-1">
          <slot name="actions"></slot>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import logo from '@/assets/logo.png'
export default {
  props: {
    roundAvatar: Boolean,
    imageUrl: {
      type: String
    }
  },
  data() {
    return { logo }
  }
}
</script>
