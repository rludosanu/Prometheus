const initialState = {
  'athena': {
    label: 'Athena',
    image: 'https://images.pexels.com/photos/2294354/pexels-photo-2294354.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    rounds: [
      [
        { id: 'climbers', volume: 25 },
        { id: 'situps', volume: 25 },
        { id: 'squats', volume: 25 },
        { id: 'rest', volume: 25 },
      ],
      [
        { id: 'climbers', volume: 20 },
        { id: 'situps', volume: 20 },
        { id: 'squats', volume: 20 },
        { id: 'rest', volume: 20 },
      ],
      [
        { id: 'climbers', volume: 15 },
        { id: 'situps', volume: 15 },
        { id: 'squats', volume: 15 },
        { id: 'rest', volume: 15 },
      ],
      [
        { id: 'climbers', volume: 10 },
        { id: 'situps', volume: 10 },
        { id: 'squats', volume: 10 },
        { id: 'rest', volume: 10 },
      ],
      [
        { id: 'climbers', volume: 5 },
        { id: 'situps', volume: 5 },
        { id: 'squats', volume: 5 },
      ],
    ]
  },
  'morpheus': {
    label: 'Morpheus',
    image: 'https://images.pexels.com/photos/2294354/pexels-photo-2294354.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    rounds: [
      [
        { id: 'pushups', volume: 5 },
        { id: 'lunges', volume: 10 },
        { id: 'jumpingjacks', volume: 20 },
      ],
      [
        { id: 'pushups', volume: 7 },
        { id: 'lunges', volume: 15 },
        { id: 'jumpingjacks', volume: 30 },
      ],
      [
        { id: 'pushups', volume: 10 },
        { id: 'lunges', volume: 20 },
        { id: 'jumpingjacks', volume: 40 },
      ],
      [
        { id: 'pushups', volume: 7 },
        { id: 'lunges', volume: 15 },
        { id: 'jumpingjacks', volume: 30 },
      ],
      [
        { id: 'pushups', volume: 5 },
        { id: 'lunges', volume: 10 },
        { id: 'jumpingjacks', volume: 20 },
      ],
    ]
  },
  'prometheus': {
    label: 'Prometheus',
    image: 'https://images.pexels.com/photos/2294354/pexels-photo-2294354.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    rounds: [
      [
        { id: 'climbers', volume: 30 },
        { id: 'pushups', volume: 10 },
        { id: 'situps', volume: 30 },
        { id: 'squats', volume: 30 },
        { id: 'jumpingjacks', volume: 50 },
        { id: 'rest', volume: 30 },
      ],
      [
        { id: 'climbers', volume: 20 },
        { id: 'pushups', volume: 7 },
        { id: 'situps', volume: 20 },
        { id: 'squats', volume: 20 },
        { id: 'jumpingjacks', volume: 50 },
        { id: 'rest', volume: 30 },
      ],
      [
        { id: 'climbers', volume: 10 },
        { id: 'pushups', volume: 5 },
        { id: 'situps', volume: 10 },
        { id: 'squats', volume: 10 },
        { id: 'jumpingjacks', volume: 50 },
        { id: 'rest', volume: 30 },
      ],
      [
        { id: 'climbers', volume: 20 },
        { id: 'pushups', volume: 7 },
        { id: 'situps', volume: 20 },
        { id: 'squats', volume: 20 },
        { id: 'jumpingjacks', volume: 50 },
        { id: 'rest', volume: 30 },
      ],
      [
        { id: 'climbers', volume: 30 },
        { id: 'pushups', volume: 10 },
        { id: 'situps', volume: 30 },
        { id: 'squats', volume: 30 },
        { id: 'jumpingjacks', volume: 50 },
        { id: 'rest', volume: 30 },
      ],
    ]
  },
};

export default function reducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case 'ADD_WORKOUT':
      return {
        ...state,
        error: null,
        isLoading: true
      };
    case 'UPDATE_WORKOUT':
      return {
        token: payload.token,
        error: null,
        isLoading: false
      };
    case 'DELETE_WORKOUT':
      return {
        token: null,
        error: payload.error || null,
        isLoading: false
      };
    default:
      return state;
  }
}
