import {combineReducers} from 'redux';

function settingsReducer(state = {}, action) {
  const {type, payload} = action;

  if (type === 'UPDATE_SETTINGS') {
    return {
      ...state,
      ...payload,
    };
  }
  return state;
}

function tokenReducer(state = {token: null}, action) {
  const {type, payload} = action;

  if (type === 'UPDATE_TOKEN' && payload) {
    return {
      token: payload,
    };
  } else if (type === 'REMOVE_TOKEN') {
    return {
      token: null,
    };
  }
  return state;
}

export default combineReducers({
  settings: settingsReducer,
  token: tokenReducer,
});
