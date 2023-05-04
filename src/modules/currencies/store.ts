import localStorageService from '@/services/localStorage'
import { Currency } from '@/interfaces/currency'

export default {
  namespaced: true,
  state: {
    currencies: [],
  },
  mutations: {
    setCurrencies(state, payload: Currency[]) {
      state.currencies = payload
    },
  },
  actions: {
    getCurrencyInfo({commit}, currencyInfo: Currency) {
      const currencies = localStorageService.getCurrencies()
      const index = currencies.findIndex(
        (currency: Currency) => currency.id === currencyInfo.id
      );
      if (index !== -1) {
        const updatedCurrencies = [
          ...currencies.slice(0, index),
          currencyInfo,
          ...currencies.slice(index + 1)
        ]
        commit('setCurrencies', updatedCurrencies)
        localStorageService.storeCurrencies(updatedCurrencies)
      } else {
        currencies.push(currencyInfo)
        commit('setCurrencies', currencies)
        localStorageService.storeCurrencies(currencies)
      }
    },
    getCurrencies({commit}) {
      commit('setCurrencies', localStorageService.getCurrencies())
    },
    deleteCurrency({ commit, state }, id: number) {
      const currencies = state.currencies.filter((currency: Currency) => currency.id !== id)
      commit('setCurrencies', currencies)
      localStorageService.storeCurrencies(currencies)
    },
  }
}