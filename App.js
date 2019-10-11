import React from 'react';
import { View, Text } from 'react-native';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './source/reducers';
import rootSaga from './source/sagas';
import Feather from 'react-native-vector-icons/Feather';
import LoadingScreen from './source/components/screens/loading';
import LogInScreen from './source/components/screens/log-in';
import FeedScreen from './source/components/screens/feed';
import CoachScreen from './source/components/screens/coach';
import ProfileScreen from './source/components/screens/profile';
import WorkoutPreviewScreen from './source/components/screens/workout/preview';

class WorkoutsListScreen extends React.Component {
  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text style={{fontSize: 15}}>WorkoutsList</Text>
      </View>
    );
  }
}

const AppContainer = createAppContainer(
  createSwitchNavigator({
    Loading: LoadingScreen,
    Auth: createStackNavigator({
      LogIn: LogInScreen
    }),
    App: createBottomTabNavigator({
      Feed: {
        screen: FeedScreen,
        navigationOptions: () => ({
          tabBarIcon: ({ tintColor }) => (
            <Feather
              style={{ fontSize: 26, color: tintColor }}
              name={ 'layout' }
            />
          ),
        })
      },
      Coach: {
        screen: createStackNavigator({
          Home: {
            screen: CoachScreen
          },
          WorkoutsList: {
            screen: WorkoutsListScreen
          },
          WorkoutPreview: {
            screen: WorkoutPreviewScreen
          }
        }),
        navigationOptions: () => ({
          tabBarIcon: ({ tintColor }) => (
            <Feather
              style={{ fontSize: 26, color: tintColor }}
              name={ 'hexagon' }
            />
          ),
        })
      },
      Profile: {
        screen: ProfileScreen,
        navigationOptions: () => ({
          tabBarIcon: ({ tintColor }) => (
            <Feather
              style={{ fontSize: 26, color: tintColor }}
              name={ 'user' }
            />
          ),
        })
      }
    }, {
      defaultNavigationOptions: ({ navigation }) => ({
        tabBarOptions: {
          activeTintColor: 'white',
          activeBackgroundColor: '#161616',
          inactiveTintColor: '#8d8d8d',
          inactiveBackgroundColor: '#161616',
          showLabel: false,
          showIcon: true,
          style: {
            backgroundColor: '#161616',
            height: 50
          },
          labelStyle: {
            fontSize: 15
          }
        }
      })
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
