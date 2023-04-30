<template>
  <div class="d-flex w-100">
    <div class="currencies w-100 p-4">
      <div class="currencies__heading d-flex justify-between align-center mb-3">
        <h1>Currencies</h1>
        <button @click="addNewCurrency" class="btn btn--primary p-relative">Add Currency</button>
      </div>
      <div class="currencies__search p-relative">
        <input v-model="searchQuery" @keyup="searchCurrencies" type="text" placeholder="Search">
      </div>
      <div class="currencies__list d-flex mt-4 pb-1">
        <span class="text-uppercase font-sm font-600">currency name</span>
        <span class="text-uppercase font-sm font-600">currency code</span>
        <span class="text-uppercase font-sm font-600">currency symbol</span>
      </div>
      <div class="currencies__container">
        <p v-if="!currencies.length" class="mt-3 text-center">There are no currencies added</p>
        <view-item
          v-for="(currency, index) in currencyList" 
          @click="openSelectedCurrency(currency.id)"
          @onDeleteItem="updateList"
          :key="index" 
          :currency="currency" 
          :isActive="currency.id === activeItem"></view-item>
      </div>
    </div>
    <router-view
      @onAddItem="updateList" 
      @onCloseForm="activeItem = null" 
      :key="$route.fullPath"
      :id="activeItem" 
      :currencies="currencies"
      :isEdit="isEdit"></router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ViewItem from '@/modules/currencies/view-item/ViewItem.vue'
import { mapState } from 'vuex'
import { Currency } from '@/interfaces/currency'
import { RoutesCurrencies } from '@/enums/routes'

export default defineComponent({
  components: {
    ViewItem
  },
  data() {
    return {
      activeItem: null as number | null,
      searchQuery: '',
      currencyList: [] as Currency[],
      isEdit: false,
      clickable: true
    }
  },
  methods: {
    openSelectedCurrency(id: number) {
      if (this.clickable) {
        this.isEdit = true
        this.$router.push({ name: RoutesCurrencies.AddItem, params: { id: id } })
        this.activeItem = id
      }
    },
    addNewCurrency() {
      this.isEdit = false
      this.activeItem = this.currencies.reduce((acc: number, item: Currency) => {
        if (item && item.id !== undefined && item.id > acc) {
          acc = item.id
        }
        return acc + 1
      }, 0)
      this.$router.push({ name: RoutesCurrencies.AddItem, params: { id: this.activeItem } })
    },
    searchCurrencies() {
      this.currencyList = this.currencies.filter((item: Currency) => {
        return Object.values(item).some((value) => {
          return String(value).toLowerCase().includes(this.searchQuery.toLowerCase())
        })
      })
    },
    updateList() {
      this.currencyList = this.currencies
      this.activeItem = null
      this.clickable = false
      setTimeout(() => {
        this.clickable = true
      })
    }
  },
  computed: {
    ...mapState('CurrenciesModule', {
      currencies: 'currencies'
    })
  },
  mounted() {
    this.$store.dispatch('CurrenciesModule/getCurrencies')
    this.updateList()
  }
})
</script>

<style scoped lang="scss" src="./currenciesComponent.scss"></style>
