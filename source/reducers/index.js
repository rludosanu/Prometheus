import { combineReducers } from 'redux';
import loginReducer from './login';
import exerciseReducer from './exercise';
import equipmentReducer from './equipment';

export default combineReducers({
  user: loginReducer,
  exercises: exerciseReducer,
  equipments: equipmentReducer,
});
