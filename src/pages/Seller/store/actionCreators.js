import { fromJS } from 'immutable';
import axios from '../../../config/http.config';
import { SHOP_TAB_PAGE } from './actionTypes';

export const changePage = () => {
    return (dispatch) => {
        axios.get('/api/merchant/detail').then(data => {
            dispatch({
                type: SEND_REQUEST,
                data: fromJS(data)
            })
        })
    }
}