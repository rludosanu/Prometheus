import AsyncStorage from '@react-native-community/async-storage';
import {takeLatest, all, put, call} from 'redux-saga/effects';
import {localLogIn, localVerifyToken} from '../modules';

function* logIn(payload = {}) {
  const {email, password} = payload;
  const token = yield call(localLogIn, email, password);

  if (token) {
    yield call(AsyncStorage.setItem, '@token', token);
    yield put({
      type: 'UPDATE_TOKEN',
      payload: token || null,
    });
  }
}

function* watchLogIn() {
  yield takeLatest('LOG_IN', logIn);
}

function* loadSettings() {
  const settings = yield call(AsyncStorage.getItem, '@settings');
  const token = yield call(AsyncStorage.getItem, '@token');
  const verified = yield call(localVerifyToken, token);

  yield put({
    type: 'UPDATE_SETTINGS',
    payload: settings || {
      language: 'en',
      theme: 'light',
      sync: false,
    },
  });
  yield put({
    type: 'UPDATE_TOKEN',
    payload: verified ? token : null,
  });
}

function* watchSettings() {
  yield takeLatest('LOAD_SETTINGS', loadSettings);
}

export default function* rootSaga() {
  yield all([watchSettings(), watchLogIn()]);
}
