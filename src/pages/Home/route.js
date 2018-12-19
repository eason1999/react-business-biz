import Loadable from 'react-loadable';
import { Loading } from '../../routes/loading';

const Home = Loadable({
    loader: () => import('./index.jsx'),
    loading: Loading
})

const homeRoute = [
    {
        path: '/',
        exact: true,
        component: Home
    }
]

export default homeRoute;