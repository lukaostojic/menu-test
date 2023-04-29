import AddItem from '@/modules/currencies/add-item/addItem.vue'
import EditItem from '@/modules/currencies/edit-item/editItem.vue'
import { RoutesCurrencies } from '@/enums/routes'

export const CurrenciesRoutes = [
  {   
    path: '/currencies/add-item/:id',
    name: RoutesCurrencies.AddItem,
    component: AddItem,
  }
]