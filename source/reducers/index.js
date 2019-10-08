import {combineReducers} from 'redux';

function settingsReducer(state = {}, action) {
  if (action.type === 'UPDATE_SETTINGS') {
    return {
      ...state,
      ...action.payload,
    };
  }
  return state;
}

function errorReducer(state = null, action) {
  return (action.type === 'SET_ERROR') ? action.error : state;
}

function tokenReducer(state = null, action) {
  return (action.type === 'SET_TOKEN') ? action.token : state;
}

export default combineReducers({
  error: errorReducer,
  token: tokenReducer,
  settings: settingsReducer,
});
