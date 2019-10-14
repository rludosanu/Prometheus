import { combineReducers } from 'redux';
import loginReducer from './login';
import exerciseReducer from './exercise';
import equipmentReducer from './equipment';
import workoutReducer from './workout'
import logReducer from './log'

export default combineReducers({
  user: loginReducer,
  exercises: exerciseReducer,
  equipments: equipmentReducer,
  workouts: workoutReducer,
  logs: logReducer
});
