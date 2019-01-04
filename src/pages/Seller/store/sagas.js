import { call, put } from 'redux-saga/effects';
import axios from '../../../config/http.config';
import { SEND_REQUEST } from './actionTypes';

function* getUserInfo() {
    try {
        const data = yield call(axios.get, '/api/merchant/detail');
        yield put({
            type: SEND_REQUEST,
            data
        })
    } catch(e) {
        console.log('失败了')
    }
}

// function* getUserInfoSaga () {
//     yield takeEvery(BEGIN_SEND_REQUEST, getuserInfo);
// }

export { getUserInfo };