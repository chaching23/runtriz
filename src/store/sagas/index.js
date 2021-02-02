import {put, delay, takeEvery} from 'redux-saga/effects';
import {INCREMENT, DECREMENT, INCREASEDELAY, DECREASEDELAY} from '../constants';

export function* increaseOnWait() {
  yield delay(1000);
  yield put({type: INCREMENT});
  yield delay(1000);
  yield put({type: INCREMENT});
}

export function* decreaseOnWait() {
  yield delay(1000);
  yield put({type: DECREMENT});
  yield delay(1000);
  yield put({type: DECREMENT});
}

export default function* saga() {
  yield takeEvery(INCREASEDELAY, increaseOnWait);
  yield takeEvery(DECREASEDELAY, decreaseOnWait);
}
