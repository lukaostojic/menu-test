import { Currency } from "@/interfaces/currency"

const LocalStorageService = {  
  login(email: string) {
    localStorage.setItem('user', email)
    localStorage.setItem('currencies', '[]')
  },

  getUser() {
    return localStorage.getItem('user')
  },

  getCurrencies() {
    return JSON.parse(localStorage.getItem('currencies')!) as Currency[]
  },

  storeCurrencies(currencies: Currency[]) {
    localStorage.setItem('currencies', JSON.stringify(currencies))
  },

  logout() {
    localStorage.clear()
  }
}

export default LocalStorageService
