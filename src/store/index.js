import createSagaMiddleWare from 'redux-saga';
import {createStore, applyMiddleware} from 'redux';

import reducer from './reducers';
import saga from './sagas';
const sagaMiddleWare = createSagaMiddleWare();
const store = createStore(reducer, applyMiddleware(sagaMiddleWare));
sagaMiddleWare.run(saga);
export default store;
