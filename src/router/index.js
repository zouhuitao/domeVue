import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../views/Register.vue')
  },
  {
    path: '*',
    name: '404',
    component: () => import('../views/404.vue')
  },
  {
    path: '/front',
    name: 'front',
    component: () => import('../views/front/Front.vue'),
    children:[
      {
        path: 'home',
        name: 'FrontHome',
        component: () => import('../views/front/Home.vue')
      },
    ]
    
  }
]



const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export const setRoutes = () => {
  const storeMenus = localStorage.getItem("menus");
  if (storeMenus) {
    const manageRoute = {
      path: '/',
      name:'Manage',
      component: () => import('../views/ManageView.vue'),
      redirect: "/home",
      children: []
    }
    const menus = JSON.parse(storeMenus)
    menus.forEach(item => {
      if(item.path){
        let itemMenu = {
          path: item.path.replace("/", ""),
          name: item.name,
          component: () => import('../views/' + item.pagePath + '.vue')}
          manageRoute.children.push(itemMenu)
      }else if(item.children.length){
        item.children.forEach(item => {
          if(item.path){
          let itemMenu = {
            path: item.path.replace("/", ""),
            name: item.name,
            component: () => import('../views/' + item.pagePath + '.vue')}
            manageRoute.children.push(itemMenu)}
        })
      }
    })
    const currentRouteNames = router.getRoutes().map(v => v.name)
    if(!currentRouteNames.includes('Manage')){
      router.addRoute(manageRoute)
    }
  }
}

setRoutes()


export default router
