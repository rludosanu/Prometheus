import { combineReducers } from 'redux';
import authReducer from './auth';
import exerciseReducer from './exercise';
import equipmentReducer from './equipment';
import workoutReducer from './workout'
import logReducer from './log'

export default combineReducers({
  auth: authReducer,
  exercises: exerciseReducer,
  equipments: equipmentReducer,
  workouts: workoutReducer,
  logs: logReducer
});
