import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import LoginView from '@/views/loginView/LoginView.vue'
import DashboardView from '@/views/dashboardView/DashboardView.vue'
import { RoutesMain } from '@/enums/routes'
import { NavigationRoutes } from '@/modules/navigation/routes'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: RoutesMain.Login,
    component: LoginView
  },
  {
    path: '/dashboard',
    name: RoutesMain.Dashboard,
    component: DashboardView,
    children: NavigationRoutes,
    redirect: '/currencies'
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  const user = localStorage.getItem('user')
  if (to.name !== RoutesMain.Login && !user) {
    next({ name: RoutesMain.Login })
  } else if (to.name === RoutesMain.Login && user) {
    next({ name: RoutesMain.Dashboard })
  } else {
    next()
  }
})

export default router
