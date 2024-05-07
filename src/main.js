import { createApp } from 'vue'
import App from './App.vue'
import {createRouter, createWebHistory} from 'vue-router';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js";
import HomePage from '../src/components/HomePage.vue';
import ProductsPage from '../src/components/pages/ProductsPage.vue';
import ProductDetails from '../src/components/pages/ProductDetails.vue';
import AddProduct from '../src/components/pages/AddProduct.vue';
import ErrorPage from '../src/components/pages/ErrorPage.vue';


const routes=[
    {
        path:'/', component:HomePage 
    },
    {
        path:'/products', component:ProductsPage 
    },
    {
        path:'/products/:id', component:ProductDetails 
    },
    {
        path:'/add', component:AddProduct 
    },
    {
        path:'/add/:id', component:AddProduct 
    },
    {
        path:'/:NotFound(.*)*', component:ErrorPage 
        , meta:{hideNavbar:true}
    }
];

let router=createRouter({
    history:createWebHistory(),
    routes
})

createApp(App).use(router).mount('#app')
