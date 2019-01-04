import { combineReducers } from 'redux-immutable';
import { reducer as headerReducer } from '../common/header/store';
import { reducer as homeComponentReducer } from '../components/Home/store';
import { reducer as sellerComponentReducer } from '../components/Seller/store';

const reducer = combineReducers({
    menu: headerReducer,
    homeComponent: homeComponentReducer,
    sellerComponent: sellerComponentReducer
})

export default reducer;