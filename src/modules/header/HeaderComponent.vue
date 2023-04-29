<template>
  <header class="header d-flex justify-between align-center px-3">
    <div class="header__brand d-flex align-center">
      <div class="avatar bg-orange text-center">
        <span>A</span>
      </div>
      <div>
        <p class="text-uppercase font-sm font-600">brand name</p>
        <p class="text-capitalize font-600">all stores</p>
      </div>
    </div>
    <div class="header__info d-flex align-center">
      <img class="ml-3" src="@/assets/global/bell.png" alt="notifications">
      <img class="ml-3" src="@/assets/global/user.png" alt="user">
      <button @click="signOut" class="ml-3">Logout</button>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { logout } from '@/services/localStorage'
import { RoutesMain } from '@/enums/routes'

export default defineComponent({
  methods: {
    signOut() {
      logout()
      this.$router.push({name: RoutesMain.Login})
    }
  }
})
</script>

<style scoped lang="scss" src="./headerComponent.scss"></style>
