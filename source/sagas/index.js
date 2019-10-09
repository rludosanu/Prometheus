import AsyncStorage from '@react-native-community/async-storage';
import { takeLatest, all, put, call } from 'redux-saga/effects';
import { localLogIn, localVerifyToken } from '../modules';

function buildLoginLoading() {
  return {
    type: 'LOGIN_LOADING'
  };
}

function buildLoginSucceeded(token) {
  return {
    type: 'LOGIN_SUCCEEDED',
    payload: {
      token: token
    }
  };
}

function buildLoginFailed(error) {
  return {
    type: 'LOGIN_FAILED',
    payload: {
      error: error || null
    }
  };
}

function* logOutSaga() {
  yield call(AsyncStorage.removeItem, '@token');
  yield put({
    type: 'LOGOUT_SUCCEEDED'
  });
}

function* logInSaga({ email, password }) {
  let token;

  yield put(buildLoginLoading());
  if ((token = yield call(localLogIn, email, password))) {
    yield call(AsyncStorage.setItem, '@token', token);
    yield put(buildLoginSucceeded(token));
  } else {
    yield put(buildLoginFailed('Invalid email address or password.'));
  }
}

function* autoLogInSaga() {
  let token;

  yield put(buildLoginLoading());
  if ((token = yield call(AsyncStorage.getItem, '@token'))) {
    yield put(buildLoginSucceeded(token));
  } else {
    yield put(buildLoginFailed());
  }
}

export default function* rootSaga() {
  yield takeLatest('AUTO_LOGIN_REQUEST', autoLogInSaga);
  yield takeLatest('LOGIN_REQUEST', logInSaga);
  yield takeLatest('LOGOUT_REQUEST', logOutSaga);
}
