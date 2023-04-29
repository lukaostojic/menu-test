<template>
  <div :class="{active: isActive}" class="currency-item d-flex p-relative">
    <span class="text-capitalize font-600">{{ currency?.name }}</span>
    <span class="text-uppercase">{{ currency?.code }}</span>
    <span>{{ currency?.symbol }}</span>
    <div @click="deleteCurrency()" class="delete-icon d-flex align-center p-absolute">
      <img src="@/assets/global/bin.png" alt="">
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { Currency } from '@/interfaces/currency';

export default defineComponent({
  props: {
    currency: {
      type: Object as PropType<Currency>
    },
    isActive: {
      type: Boolean,
      required: true
    } 
  },
  methods: {
    deleteCurrency() {
      if (this.currency?.id != null) {
        this.$store.dispatch('CurrenciesModule/deleteCurrency', this.currency.id)
        this.$emit('onDeleteItem')
      }
    }
  }
})
</script>

<style scoped lang="scss" src="./view-item.scss"></style>
