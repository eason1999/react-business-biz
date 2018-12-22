import { combineReducers } from 'redux-immutable';
import { reducer as headerReducer } from '../common/header/store';
import { reducer as homeComponentReducer } from '../components/Home/store';

const reducer = combineReducers({
    menu: headerReducer,
    homeComponent: homeComponentReducer
})

export default reducer;