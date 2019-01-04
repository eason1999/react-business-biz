import { fromJS } from 'immutable';
import { SHOP_TAB_PAGE } from './actionTypes';

const initState = fromJS({
    isFormShow: false
})

const reducer = (state = initState, action) => {
    switch (action.type) {
        case SHOP_TAB_PAGE:
            return state.set('isFormShow', action.bool);
        default:
            return state;
    }
}

export default reducer;