import { combineReducers } from 'redux';
import userReducer from './user';
import exerciseReducer from './exercise';
import equipmentReducer from './equipment';
import workoutReducer from './workout'
import logReducer from './log'

export default combineReducers({
  user: userReducer,
  exercises: exerciseReducer,
  equipments: equipmentReducer,
  workouts: workoutReducer,
  logs: logReducer
});
