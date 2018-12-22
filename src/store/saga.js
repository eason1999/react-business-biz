import { takeEvery } from 'redux-saga/effects';
import { homeActionTypes } from '../components/Home/store';
import { homeComponentSagas } from '../components/Home/store';


export default function* rootSaga() {
    yield [
        takeEvery(homeActionTypes.BEGIN_SEND_REQUEST, homeComponentSagas.getUserInfo)
    ]
}