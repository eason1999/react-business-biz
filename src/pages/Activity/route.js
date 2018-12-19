import Loadable from 'react-loadable';
import { Loading } from '../../routes/loading';

const Check = Loadable({
    loader: () => import('./check.jsx'),
    loading: Loading
})
const Activitylist = Loadable({
    loader: () => import('./list.jsx'),
    loading: Loading
})
const Order = Loadable({
    loader: () => import('./order.jsx'),
    loading: Loading
})
// import AsyncComponent from '../../components/AsyncComponent';

// const Check = AsyncComponent(() => import('./check.jsx'))
// const Order = AsyncComponent(() => import('./order.jsx'))
// const Activitylist = AsyncComponent(() => import('./list.jsx'))

const acticityRoute = [{
    path: '/check',
    component: Check
}, {
    path: '/activitylist',
    component: Activitylist
}, {
    path: '/order',
    component: Order
}]

export default acticityRoute;