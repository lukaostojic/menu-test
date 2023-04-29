import CurrenciesComponent from '@/modules/currencies/CurrenciesComponent.vue'
import AnalyticsComponent from '@/modules/analytics/AnalyticsComponent.vue'
import { CurrenciesRoutes } from '@/modules/currencies/routes'
import { RoutesNavigation } from '@/enums/routes'

export const NavigationRoutes = [
  {
    path: '/currencies',
    name: RoutesNavigation.Currencies,
    component: CurrenciesComponent,
    children: CurrenciesRoutes
  },
  {
    path: '/analytics',
    name: RoutesNavigation.Analytics,
    component: AnalyticsComponent
  }
]