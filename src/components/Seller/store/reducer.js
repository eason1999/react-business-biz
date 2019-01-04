import { fromJS } from 'immutable';
import { SEND_REQUEST } from './actionTypes';

const initState = fromJS({
    userInfo: {
        avaliableAmt: '0.00',
        frozenAmt: '0.00',
        merchantsLinkName: '',
        merchantsName: '',
        merchantsNo: '',
        mobile: '',
        vipEndAt: '',
        vipLevel: 0
    }
})

const reducer = (state = initState, action) => {
    switch (action.type) {
        case SEND_REQUEST:
            return state.set('userInfo', action.data);
        default:
            return state;
    }
}

export default reducer;