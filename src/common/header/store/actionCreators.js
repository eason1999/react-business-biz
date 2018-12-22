
// import { fromJS } from 'immutable';
// import _ from 'lodash';
// import { ROUTES } from '../../../config/routes.config.js';
// import { SUBMENU_OPEN_CHANGE } from './actionTypes';

// const menuRoutes = _.clone(ROUTES);

// let rootKeys = []
// _.forEach(menuRoutes, item => {
//   if (item.subMenu) {
//     rootKeys.push(item.subMenu);
//   }
// });

// export const menuOpenChange = (openKeys) => {
//     const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1);
//     if (this.state.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
//         this.setState({ openKeys });
//     } else {
//         this.setState({
//             openKeys: latestOpenKey ? [latestOpenKey] : []
//         });
//     }
// }