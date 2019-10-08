import React, {Component, Fragment} from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  Button,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';
import {createSwitchNavigator, createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import AsyncStorage from '@react-native-community/async-storage';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import {Provider, connect} from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import {takeEvery, all, put, call} from 'redux-saga/effects';

/************************ Settings ************************/

const APP_SETTINGS = {
  language: 'en',
  theme: 'light',
  sync: false,
};

/************************ Reducers ************************/

function settingsReducer(state = {}, action) {
  const {type, payload} = action;

  if (type === 'UPDATE_SETTINGS') {
    return {...state, ...payload};
  }
  return state;
}

/************************ Sagas ************************/

function* readSettings() {
  const settings = yield call(AsyncStorage.getItem, '@settings');

  yield put({
    type: 'UPDATE_SETTINGS',
    payload: settings || APP_SETTINGS,
  });
}

function* watchSettings() {
  console.log('[logsWatcher] takeEvery(READ_SETTINGS)');
  yield takeEvery('READ_SETTINGS', readSettings);
}

function* rootSaga() {
  console.log('[rootSaga] Setting up root saga...');
  yield all([watchSettings()]);
  console.log('[rootSaga] Done.');
}

/************************ StyleSheets ************************/

const styles = StyleSheet.create({
  fullScreenWrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

/************************ Components ************************/

/**
 * Display feed activity.
 */
class FeedScreen extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.fullScreenWrapper}>
        <Text>FeedScreen</Text>
        <Button
          title={'Log Out'}
          onPress={() => this.props.navigation.navigate('Auth')}
        />
      </View>
    );
  }
}

/**
 * Log in the user.
 */
const LogInScreen = connect(
  state => {
    console.log('[LogInScreen]', state);
    return state;
  },
  null,
)(
  class extends Component {
    render() {
      return (
        <View style={styles.fullScreenWrapper}>
          <Text>LogInScreen</Text>
          <Button
            title={'Log In'}
            onPress={() => this.props.navigation.navigate('App')}
          />
        </View>
      );
    }
  },
);

/**
 * Load data on app startup.
 */
const LoadingScreen = connect(
  state => {
    return state;
  },
  dispatch => {
    return {
      readSettings: payload =>
        dispatch({
          type: 'READ_SETTINGS',
        }),
    };
  },
)(
  class extends Component {
    componentDidMount() {
      console.log('[LoadingScreen] Reading settings from AsyncStorage...');
      this.props.readSettings();
      console.log('[LoadingScreen] Waiting for 1000 ms...');
      setTimeout(() => {
        console.log('[LoadingScreen] Redirecting to Auth Stack...');
        this.props.navigation.navigate('Auth');
      }, 1000);
    }

    render() {
      return (
        <View style={styles.fullScreenWrapper}>
          <ActivityIndicator />
        </View>
      );
    }
  },
);

/************************ AppContainer ************************/

const AppContainer = createAppContainer(
  createSwitchNavigator(
    {
      Loading: LoadingScreen,
      Auth: createStackNavigator({
        LogIn: LogInScreen,
      }),
      App: createStackNavigator({
        Feed: FeedScreen,
      }),
    },
    {
      initialRouteName: 'Loading',
    },
  ),
);

/************************ App ************************/

export default function App(props) {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
    combineReducers({
      settings: settingsReducer,
    }),
    applyMiddleware(sagaMiddleware),
  );

  sagaMiddleware.run(rootSaga);
  return (
    <Provider store={store}>
      <AppContainer />
    </Provider>
  );
}
