import homeRoute from '../pages/Home/route';
import sellerRoute from '../pages/Seller/route';
import capitalRoute from '../pages/CapitalManage/route';
import acticityRoute from '../pages/Activity/route';
import notFoundRoute from '../pages/404/route';

const routes = [
    ...homeRoute,
    ...sellerRoute,
    ...capitalRoute,
    ...acticityRoute,
    ...notFoundRoute
]

export default routes;