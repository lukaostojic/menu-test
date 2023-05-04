import AddItem from '@/modules/currencies/add-item/AddItem.vue'
import { RoutesCurrencies } from '@/enums/routes'

export const CurrenciesRoutes = [
  {   
    path: '/currencies/add-item/:id',
    name: RoutesCurrencies.AddItem,
    component: AddItem,
  }
]