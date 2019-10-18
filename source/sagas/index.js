import AsyncStorage from '@react-native-community/async-storage';
import { takeLatest, takeEvery, all, put, call, delay } from 'redux-saga/effects';
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

function* handleSignupRequest({ email, password }) {
  let result;

  yield put(buildResponse('SIGNUP_LOADING'));
  try {
    result = yield call([auth, auth.createUserWithEmailAndPassword], email, password);
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

/**
 * Handles user's login request
 *
 * This even is triggered by a Login screen form submit. It sends the email and
 * password of the user to Firebase authentication. On success, it dispatches
 * a LOGIN_SUCCEEDED event to the store with user's profile data and access
 * token. On error, it dispatches a LOGIN_FAILED event to the store with the
 * correponding error message.
 */
function* handleLoginRequest({ email, password }) {
  let response;

  yield put(buildResponse('LOGIN_LOADING'));
  try {
    response = yield call([auth, auth.signInWithEmailAndPassword], email, password);
    yield call(AsyncStorage.setItem, 'firebase-token', response.user.uid);
    yield put(buildResponse('LOGIN_SUCCEEDED', {
      uid: response.user.uid,
      profile: {
        email: response.user.email,
        displayName: response.user.displayName,
      }
    }));
  } catch (error) {
    yield put(buildResponse('LOGIN_FAILED', {
      error: error.message
    }));
  }
}

/**
 * Handles app's login request
 *
 * This even is triggered by the Loading screen on app launch. It tries to
 * retrieve the Firebase token from device's async storage. On success, it
 * dispatches a LOGIN_SUCCEEDED event to the store with the user's profile
 * data. On error, it dispatches a LOGIN_FAILED event to the store with the
 * correponding error message.
 */
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
