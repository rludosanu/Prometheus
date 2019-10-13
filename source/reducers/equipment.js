const initialState = {
  'pullupbar': {
    label: 'Pullup Bar',
  },
  'bench': {
    label: 'Bench'
  },
  'resistanceband': {
    label: 'Resistance Band'
  },
  'Pole': {
    label: 'Pole'
  },
  '10m': {
    label: '10m'
  },
  '20m': {
    label: '20m'
  },
  '40m': {
    label: '40m'
  },
  '100m': {
    label: '100m'
  },
};

export default function reducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case 'ADD_EQUIPMENT':
      return {
        ...state,
        error: null,
        isLoading: true
      };
    case 'UPDATE_EQUIPMENT':
      return {
        token: payload.token,
        error: null,
        isLoading: false
      };
    case 'DELETE_EQUIPMENT':
      return {
        token: null,
        error: payload.error || null,
        isLoading: false
      };
    default:
      return state;
  }
}
