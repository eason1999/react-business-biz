import Loadable from 'react-loadable';
import { Loading } from '../../routes/loading';

const Shops = Loadable({
    loader: () => import('./shops.jsx'),
    loading: Loading
})
const Goods = Loadable({
    loader: () => import('./goods.jsx'),
    loading: Loading
})
const Capital = Loadable({
    loader: () => import('./capital.jsx'),
    loading: Loading
})

const sellerRoute = [{
    path: '/shops',
    component: Shops
}, {
    path: '/goods',
    component: Goods
}, {
    path: '/capital',
    component: Capital
}]

export default sellerRoute;