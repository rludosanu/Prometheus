const initialState = {};

export default function reducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case 'ADD_LOG':
      return {
        ...state,
        ...payload
      };
    case 'UPDATE_LOG':
      return {
        ...state,
        [payload.id]: {
          ...payload.data
        }
      };
    case 'DELETE_LOG':
      delete state[payload.id];
      return state;
    default:
      return state;
  }
}
