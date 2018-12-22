import { fromJS } from 'immutable';
import { SUBMENU_OPEN_CHANGE } from './actionTypes';

const initState = fromJS({
    activeKey: 'Home',
    openKeys: []
});

export default (state = initState, action) => {
    switch (action.type) {
        case SUBMENU_OPEN_CHANGE:
            console.log(action.value, 666)
            return state.set('openKeys', action.value)
        default:
            return state;
    }
}