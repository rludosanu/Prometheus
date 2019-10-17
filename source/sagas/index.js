import AsyncStorage from '@react-native-community/async-storage';
import { takeLatest, takeEvery, all, put, call, delay } from 'redux-saga/effects';
import { localLogIn, localVerifyToken } from '../modules';
import firebase from 'react-native-firebase';

const auth = firebase.auth();

function buildResponse(type, payload) {
  let result = {};

  result.type = type;
  if (payload) {
    result.payload = payload;
  }
  return result;
}

function* handleSignupRequest({ email, password, displayName }) {
  let result;

  yield put(buildResponse('SIGNUP_LOADING'));
  try {
    result = yield call([auth, auth.createUserWithEmailAndPassword], email, password);
    if (displayName) {
      yield call([result, result.user.updateProfile], { displayName });
    }
    yield put(buildResponse('SIGNUP_SUCCEEDED'));
  } catch (error) {
    yield put(buildResponse('SIGNUP_FAILED', {
      error: error.message
    }));
  }
}

function* handleLogoutRequest() {
  yield put(buildResponse('LOGOUT_LOADING'));
  try {
    yield call([auth, auth.signOut]);
    yield call(AsyncStorage.removeItem, 'firebase-token');
    yield put(buildResponse('LOGOUT_SUCCEEDED'));
  } catch (error) {
    yield put(buildResponse('LOGOUT_FAILED'));
  }
}

function* handleLoginRequest({ email, password }) {
  let response;

  yield put(buildResponse('LOGIN_LOADING'));
  try {
    response = yield call([auth, auth.signInWithEmailAndPassword], email, password);
    yield call(AsyncStorage.setItem, 'firebase-token', response.user.uid);
    yield put(buildResponse('LOGIN_SUCCEEDED', {
      token: response.user.uid
    }));
  } catch (error) {
    yield put(buildResponse('LOGIN_FAILED', {
      error: error.message
    }));
  }
}

function* handleAutoLoginRequest() {
  let token;

  yield put(buildResponse('LOGIN_LOADING'));
  try {
    token = yield call(AsyncStorage.getItem, 'firebase-token');
    yield delay(1000);
    if (token) {
      yield put(buildResponse('LOGIN_SUCCEEDED', {
        token: token
      }));
    } else {
      yield put(buildResponse('LOGIN_FAILED', {
        error: null
      }));
    }
  } catch (error) {
    yield put(buildResponse('LOGIN_FAILED', {
      error: error
    }));
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
