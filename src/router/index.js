import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('components/home/Home')
const Login = () => import('components/login/Login')
const Index = () => import('components/home/index/Index')
const Jotter = () => import('components/home/jotter/Jotter')
const Library = () => import('components/home/library/Library')
const Profile = () => import('components/home/profile/Profile')
const Detail = () => import('components/home/detail/Detail')
const SearchView = () => import('components/home/index/child/SearchView')

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    redirect: '/index'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    redirect: '/index',
    children: [
      {
        path: '/index',
        name: 'Index',
        component: Index,
        meta: {
          needLogin: true
        }
      },
      {
        path: '/jotter',
        name: 'Jotter',
        meta: {
          needLogin: true
        },
        component: Jotter
      },
      {
        path: '/library',
        name: 'Library',
        meta: {
          needLogin: true
        },
        component: Library
      },
      {
        path: '/profile',
        name: 'Profile',
        meta: {
          needLogin: true
        },
        component: Profile
      },
      {
        path: '/bookDetail',
        name: 'bookDetail',
        component: Detail
      },
      {
        path: '/searchView',
        name: 'searchView',
        component: SearchView
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
