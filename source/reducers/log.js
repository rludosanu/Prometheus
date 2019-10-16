const initialState = {
  'loga': {
    workoutId: 'athena',
    timestamp: 1567345500000,
    duration: 190,
    volume: 1,
    claps: 10
  },
  'logb': {
    workoutId: 'prometheus',
    timestamp: 1567518300000,
    duration: 120,
    volume: 1,
    claps: 8
  },
  'logc': {
    workoutId: 'morpheus',
    timestamp: 1567604700000,
    duration: 260,
    volume: 1,
    claps: 0
  },
};

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
