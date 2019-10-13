// https://images.pexels.com/photos/2294403/pexels-photo-2294403.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500
// https://images.pexels.com/photos/2294400/pexels-photo-2294400.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500

const initialState = {
  'squats': {
    label: 'Squats',
    score: 0.35,
    equipments: [],
    muscles: ['lower'],
    image: 'https://images.pexels.com/photos/2294361/pexels-photo-2294361.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    video: 'https://images.pexels.com/photos/2294361/pexels-photo-2294361.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
  },
  'climbers': {
    label: 'Climbers',
    score: 0.3,
    equipments: [],
    muscles: ['core', 'lower'],
    image: 'https://images.pexels.com/photos/2294363/pexels-photo-2294363.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    video: 'https://images.pexels.com/photos/2294363/pexels-photo-2294363.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
  },
  'pushups': {
    label: 'Pushups',
    score: 0.5,
    equipments: [],
    muscles: ['upper'],
    image: 'https://images.pexels.com/photos/2294360/pexels-photo-2294360.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    video: 'https://images.pexels.com/photos/2294360/pexels-photo-2294360.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
  },
  'situps': {
    label: 'Situps',
    score: 0.35,
    equipments: [],
    muscles: ['core'],
    image: 'https://images.pexels.com/photos/2294362/pexels-photo-2294362.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    video: 'https://images.pexels.com/photos/2294362/pexels-photo-2294362.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
  },
  'jumpingjacks': {
    label: 'Jumping Jacks',
    score: 0.1,
    equipments: [],
    muscles: ['fullbody'],
    image: 'https://images.pexels.com/photos/2294355/pexels-photo-2294355.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    video: 'https://images.pexels.com/photos/2294355/pexels-photo-2294355.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
  },
  'lunges': {
    label: 'Lunges',
    score: 0.4,
    equipments: [],
    muscles: ['lower'],
    image: 'https://images.pexels.com/photos/2294354/pexels-photo-2294354.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    video: 'https://images.pexels.com/photos/2294354/pexels-photo-2294354.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
  },
  'rest': {
    label: 'Rest',
    score: 0,
    equipments: [],
    muscles: [],
    image: 'https://images.pexels.com/photos/2294353/pexels-photo-2294353.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    video: 'https://images.pexels.com/photos/2294353/pexels-photo-2294353.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
  }
};

export default function reducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case 'ADD_EXERCISE':
      return {
        ...state,
        error: null,
        isLoading: true
      };
    case 'UPDATE_EXERCISE':
      return {
        token: payload.token,
        error: null,
        isLoading: false
      };
    case 'DELETE_EXERCISE':
      return {
        token: null,
        error: payload.error || null,
        isLoading: false
      };
    default:
      return state;
  }
}
