import AsyncStorage from '@react-native-community/async-storage';
import { takeLatest, takeEvery, all, put, call, delay } from 'redux-saga/effects';
import firebase from 'react-native-firebase';

const auth = firebase.auth();
const firestore = firebase.firestore();

function buildResponse(type, payload) {
  let result = {};

  result.type = type;
  if (payload) {
    result.payload = payload;
  }
  return result;
}

function* handleResetPasswordRequest({ email }) {
  yield put(buildResponse('RESET_PASSWORD_LOADING'));
  try {
    yield call([auth, auth.sendPasswordResetEmail], email);
    yield put(buildResponse('RESET_PASSWORD_SUCCEEDED'));
  } catch (error) {
    yield put(buildResponse('RESET_PASSWORD_FAILED', {
      error: error.message
    }));
  }
}

function* handleSignupRequest({ fullName, email, password }) {
  let result;
  let reference;

  yield put(buildResponse('SIGNUP_LOADING'));
  try {
    result = yield call([auth, auth.createUserWithEmailAndPassword], email, password);
    reference = firestore.collection('users').doc(result.user.uid);
    yield call([reference, reference.set], { fullName });
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
  let result;
  let reference;
  let profile;

  yield put(buildResponse('LOGIN_LOADING'));
  try {
    result = yield call([auth, auth.signInWithEmailAndPassword], email, password);
    reference = firestore.collection('users').doc(result.user.uid);
    profile = yield call([reference, reference.get]);

    yield call(AsyncStorage.setItem, 'firebase-token', result.user.uid);
    yield put(buildResponse('LOGIN_SUCCEEDED', {
      uid: result.user.uid,
      profile: {
        email: result.user.email,
        fullName: profile.fullName,
      }
    }));
  } catch (error) {
    yield put(buildResponse('LOGIN_FAILED', {
      error: error.message
    }));
  }
}

function* handleAutoLoginRequest() {
  let token;
  let user;

  yield put(buildResponse('LOGIN_LOADING'));
  try {
    token = yield call(AsyncStorage.getItem, 'firebase-token');
    if (token) {
      user = firebase.auth().currentUser;
      yield put(buildResponse('LOGIN_SUCCEEDED', {
        uid: token,
        profile: {
          email: user.email,
          displayName: user.displayName,
        }
      }));
    } else {
      yield put(buildResponse('LOGIN_FAILED', {
        error: ''
      }));
    }
  } catch (error) {
    yield put(buildResponse('LOGIN_FAILED', {
      error: error.message
    }));
  }
}

function* watchResetPasswordRequest() {
  yield takeLatest('RESET_PASSWORD_REQUEST', handleResetPasswordRequest);
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
    watchResetPasswordRequest(),
  ]);
}
