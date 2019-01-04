import { fromJS } from 'immutable';
import axios from '../../../config/http.config';
import { SEND_REQUEST } from './actionTypes';

export const getUserInfo = () => {
    return (dispatch) => {
        axios.get('/api/merchant/detail').then(data => {
            dispatch({
                type: SEND_REQUEST,
                data: fromJS(data)
            })
        })
    }
}