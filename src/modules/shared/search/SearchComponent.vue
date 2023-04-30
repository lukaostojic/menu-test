<template>
  <div class="search-input p-relative">
    <input v-model="searchQuery" @keyup="searchItem" :style="{ 'width': width + 'px' }" type="text" placeholder="Search">
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    searchItems: {
      type: Array,
      required: true
    },
    width: {
      type: Number
    }
  },
  data() {
    return {
      searchQuery: ''
    }
  },
  methods: {
    searchItem() {
      const result = this.searchItems.filter((item: any) => {
        return Object.values(item).some((value) => {
          return String(value).toLowerCase().includes(this.searchQuery.toLowerCase())
        })
      })
      this.$emit('onKeyUp', result)
    }
  }
})
</script>

<style scoped lang="scss" src="./searchComponent.scss"></style>