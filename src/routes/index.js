import Home from '../pages/index';
import Cart from '../pages/cart';
import Category from '../pages/category';
import Checkout from '../pages/checkout';
import Contact from '../pages/contact';
import Detail from '../pages/detail';
import Login from '../pages/login';

const publicRoutes = [
    {path: '/', component: Home},
    {path: '/cart', component: Cart},
    {path: '/category', component: Category},
    {path: '/checkout', component: Checkout},
    {path: '/contact', component: Contact},
    {path: '/detail', component: Detail},
    {path: '/login', component: Login},
]

const privateRoutes = {

}

export { privateRoutes, publicRoutes }