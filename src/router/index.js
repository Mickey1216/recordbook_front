import { createRouter, createWebHistory } from 'vue-router'

//懒加载
const Detail = () => import('views/detail/Detail')
const Add = () => import('views/add/Add')
const Profile = () => import('views/profile/Profile')
const Login = () => import('views/login/Login')
const LoginDetail = () => import('views/login/LoginDetail')
const Register = () => import('views/login/Register')
const About = () => import('views/profile/About')
const EditPsw = () => import('views/profile/EditPsw')
const Help = () => import('views/profile/Help')
const Privacy = () => import('views/profile/Privacy')
const Statistics = () => import('views/detail/Statistics')

const routes = [
    {
        path:'',
        redirect:'/login'
    },
    {
        path:'/login',
        component:Login
    },
    {
        path:'/loginDetail',
        component:LoginDetail
    },
    {
        path:'/register',
        component:Register
    },
    {
        path:'/detail',
        component:Detail,
        children:[
            {
                path:'statistics',
                component:Statistics
            }
        ]
    },
    {
        path:'/add',
        component:Add
    },
    {
        path:'/profile',
        component:Profile,
        children:[
            {
                path:'about',
                component:About
            },
            {
                path:'editpsw',
                component:EditPsw   
            },
            {
                path:'help',
                component:Help   
            },
            {
                path:'privacy',
                component:Privacy   
            },
        ]
    }
]

const router = createRouter({
    history:createWebHistory(),
    routes
})

export default router 