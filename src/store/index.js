import { createStore, applyMiddleware, compose } from 'redux';
import Thunk from 'redux-thunk';
// import createSagaMiddleware from 'redux-saga';
import reducer from './reducer';
// import rootSaga from './saga';

// const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    reducer,
    composeEnhancers(applyMiddleware(Thunk))
);

// sagaMiddleware.run(rootSaga);

export default store;