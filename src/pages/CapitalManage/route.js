import Loadable from 'react-loadable';
import { Loading } from '../../routes/loading';

const Binding = Loadable({
    loader: () => import('./binding.jsx'),
    loading: Loading
})
const Deposit = Loadable({
    loader: () => import('./deposit.jsx'),
    loading: Loading
})
const Payment = Loadable({
    loader: () => import('./payment.jsx'),
    loading: Loading
})
const Recharge = Loadable({
    loader: () => import('./recharge.jsx'),
    loading: Loading
})
const Withdraw = Loadable({
    loader: () => import('./withdraw.jsx'),
    loading: Loading
})

const capitalRoute = [{
    path: '/binding',
    component: Binding
}, {
    path: '/deposit',
    component: Deposit
}, {
    path: '/payment',
    component: Payment
}, {
    path: '/recharge',
    component: Recharge
}, {
    path: '/withdraw',
    component: Withdraw
}]

export default capitalRoute;