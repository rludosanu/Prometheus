import AsyncStorage from '@react-native-community/async-storage';
import { takeLatest, takeEvery, all, put, call } from 'redux-saga/effects';
import { localLogIn, localVerifyToken } from '../modules';
import firebase from 'react-native-firebase';

const auth = firebase.auth();

function* handleSignupRequest({ email, password }) {
  yield put({
    type: 'SIGNUP_LOADING'
  });
  try {
    yield call(auth.createUserWithEmailAndPassword, email, password);
    yield call({
      type: 'SIGNUP_SUCCEEDED'
    });
  } catch (error) {
    yield call({
      type: 'SIGNUP_FAILED'
    });
  }
}

function* handleLogoutRequest() {
  yield put({
    type: 'LOGOUT_LOADING'
  });
  try {
    yield call(auth.signOut);
    yield call(AsyncStorage.removeItem, 'firebase-token');
    yield put({
      type: 'LOGOUT_SUCCEEDED'
    });
  } catch (error) {
    yield put({
      type: 'LOGOUT_FAILED'
    });
  }
}

function* handleLoginRequest({ email, password }) {
  let response;

  yield put({
    type: 'LOGIN_LOADING'
  });
  try {
    response = yield call(auth.signInWithEmailAndPassword, email, password);
    yield call(AsyncStorage.setItem, 'firebase-token', response.user.uid);
    yield put({
      type: 'LOGIN_SUCCEEDED',
      payload: {
        token: response.user.uid
      }
    });
  } catch (error) {
    yield put({
      type: 'LOGIN_FAILED',
      payload: {
        error: error.message
      }
    });
  }
}

function* handleAutoLoginRequest() {
  let token;

  yield put({
    type: 'LOGIN_LOADING'
  });
  token = yield call(AsyncStorage.getItem, 'firebase-token');
  if (token) {
    yield put({
      type: 'LOGIN_SUCCEEDED',
      payload: {
        token: token
      }
    });
  } else {
    yield put({
      type: 'LOGIN_FAILED',
      payload: {
        error: null
      }
    });
  }
}

function* watchSignupRequest() {
  yield takeLatest('SIGNUP_REQUEST', handleSignupRequest);
}

function* watchLogoutRequest() {
  yield takeLatest('LOGOUT_REQUEST', handleLogoutRequest);
}

function* watchLoginRequest() {
  yield takeLatest('LOGIN_REQUEST', handleLoginRequest);
}

function* watchAutoLoginRequest() {
  yield takeLatest('AUTO_LOGIN_REQUEST', handleAutoLoginRequest);
}

export default function* rootSaga() {
  yield all([
    watchAutoLoginRequest(),
    watchLoginRequest(),
    watchLogoutRequest(),
    watchSignupRequest(),
  ]);
}
