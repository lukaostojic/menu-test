<template>
  <div>
    <header-component></header-component>
    <div class="d-flex">
      <navigation-component></navigation-component>
      <router-view></router-view>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HeaderComponent from '@/modules/header/HeaderComponent.vue'
import NavigationComponent from '@/modules/navigation/NavigationComponent.vue'

export default defineComponent({
  components: {
    HeaderComponent,
    NavigationComponent
  }
})
</script>