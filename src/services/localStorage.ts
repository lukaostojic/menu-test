export const login = (email: string) => {
  localStorage.setItem('user', email)
  localStorage.setItem('currencies', '[]')
}

export const getCurrencies = () => {
  return JSON.parse(localStorage.getItem('currencies')!)
}

export const storeCurrencies = (currencies: object[]) => {
  localStorage.setItem('currencies', JSON.stringify(currencies))
}

export const logout = () => {
  localStorage.clear()
}
