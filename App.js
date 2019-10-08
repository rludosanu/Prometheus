import React from 'react';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import { createStackNavigator } from "react-navigation-stack";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import createSagaMiddleware from "redux-saga";
import LoadingScreen from './source/components/screens/loading';
import LogInScreen from './source/components/screens/log-in';
import FeedScreen from './source/components/screens/feed';
import rootReducer from './source/reducers';
import rootSaga from './source/sagas';

const AppContainer = createAppContainer(
  createSwitchNavigator({
    Loading: LoadingScreen,
    Auth: createStackNavigator({
      LogIn: LogInScreen
    }),
    App: createStackNavigator({
      Feed: FeedScreen
    }),
  }, {
    initialRouteName: 'Loading'
  })
);

export default function App(props) {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

  sagaMiddleware.run(rootSaga);
  return (
    <Provider store={store}>
      <AppContainer />
    </Provider>
  );
}
