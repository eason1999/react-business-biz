import Loadable from 'react-loadable';
import { Loading } from '../../routes/loading';

const NotFound = Loadable({
    loader: () => import('./index.jsx'),
    loading: Loading
})

const notFoundRoute = [{
    path: '*',
    component: NotFound
}]

export default notFoundRoute;