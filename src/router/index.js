import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export const constantRoutes = [
    {
        path: '/login',
        component: () => import('@/views/login/index')
    },
    {
        path: '/register',
        component: () => import('@/views/register/index')
    },
    {
        path: '/manage',
        component: () => import('@/views/manage/index')
    }
]

const createRouter = () => new Router({
    scrollBehavior: () => ({ y : 0}),
    mode: 'history',
    routes: constantRoutes  
})

const router = createRouter()

export function resetRouter() {
    const newRouter = createRouter()
    router.matcher = newRouter.matcher // reset router
}

export default router

