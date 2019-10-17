import React from 'react';

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
import OnboardingScreen from './source/components/screens/onboarding';
import LoginScreen from './source/components/screens/login';
import SignupScreen from './source/components/screens/signup';
import CoachScreen from './source/components/screens/coach';
import ProfileScreen from './source/components/screens/profile';
import WorkoutsListScreen from './source/components/screens/workout/list';
import WorkoutPreviewScreen from './source/components/screens/workout/preview';
import ExercisesListScreen from './source/components/screens/exercise/list';
import ExercisePreviewScreen from './source/components/screens/exercise/preview';
import ExercisePracticeScreen from './source/components/screens/exercise/practice';
import ExerciseFeedbackScreen from './source/components/screens/exercise/feedback';

const AppContainer = createAppContainer(
  createSwitchNavigator({
    Loading: LoadingScreen,
    Auth: createStackNavigator({
      Onboarding: OnboardingScreen,
      Login: LoginScreen,
      Signup: SignupScreen
    }),
    App: createBottomTabNavigator({
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
          },
          ExercisesList: {
            screen: ExercisesListScreen
          },
          ExercisePreview: {
            screen: ExercisePreviewScreen
          },
          ExercisePractice: {
            screen: ExercisePracticeScreen
          },
          ExerciseFeedback: {
            screen: ExerciseFeedbackScreen
          }
        }, {
          navigationOptions: ({ navigation }) => {
            if (navigation.state.index > 0) {
              return {
                tabBarVisible: false
              }
            }
            return {
              tabBarVisible: true
            };
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
