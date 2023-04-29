<template>
  <nav class="nav">
    <ul class="px-2">
      <li class="nav__item">
        <router-link :to="'/analytics'" class="d-flex align-center px-2 py-1">
          <img src="@/assets/nav/icon1.png" alt="navigation menu icon">
          <span class="ml-2 font-600">Analytics</span>
        </router-link>
      </li>
      <li class="nav__item">
        <router-link :to="'/currencies'" class="d-flex align-center px-2 py-1">
          <img src="@/assets/nav/icon2.png" alt="navigation menu icon">
          <span class="ml-2 font-600">Currencies</span>
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<style scoped lang="scss" src="./navigationComponent.scss"></style>
