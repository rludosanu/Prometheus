const initialState = {
  'archerpullups': {
    label: 'Archer Pullups',
    score: 1.5,
    equipment: ['pullupbar'],
    muscles: ['core', 'upper'],
    image: 'https://images.pexels.com/photos/2294354/pexels-photo-2294354.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
  },
  'archerpushups': {
    label: 'Archer Pushups',
    score: 1.1,
    equipment: [],
    muscles: [],
    image: 'https://images.pexels.com/photos/2294354/pexels-photo-2294354.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
  },
  'armlegliftsleft': {
    label: 'Arm & Leg Lifts Left',
    score: 0.3,
    equipment: [],
    muscles: ['fullbody'],
    image: 'https://images.pexels.com/photos/2294354/pexels-photo-2294354.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
  },
  'armlegliftsright': {
    label: 'Arm & Leg Lifts Right',
    score: 0.3,
    equipment: [],
    muscles: ['fullbody'],
    image: 'https://images.pexels.com/photos/2294354/pexels-photo-2294354.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
  },
  'pullups': {
    label: 'Pullups',
    score: 0.75,
    equipment: ['pullupbar'],
    muscles: ['upper'],
    image: 'https://images.pexels.com/photos/2294354/pexels-photo-2294354.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
  },
  'pushups': {
    label: 'Pushups',
    score: 0.5,
    equipment: [],
    muscles: ['upper'],
    image: 'https://images.pexels.com/photos/2294354/pexels-photo-2294354.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
  },
  'burpees': {
    label: 'Burpees',
    score: 0.6,
    equipment: [],
    muscles: ['fullbody'],
    image: 'https://images.pexels.com/photos/2294354/pexels-photo-2294354.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
  },
  'climbers': {
    label: 'Climbers',
    score: 0.3,
    equipment: [],
    muscles: ['core', 'lower'],
    image: 'https://images.pexels.com/photos/2294354/pexels-photo-2294354.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
  },
  'crunches': {
    label: 'Crunches',
    score: 0.25,
    equipment: [],
    muscles: ['core'],
    image: 'https://images.pexels.com/photos/2294354/pexels-photo-2294354.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
  },
  'froggers': {
    label: 'Froggers',
    score: 0.45,
    equipment: [],
    muscles: ['core', 'lower'],
    image: 'https://images.pexels.com/photos/2294354/pexels-photo-2294354.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
  },
  'highjumps': {
    label: 'High Jumps',
    score: 0.5,
    equipment: [],
    muscles: ['lower'],
    image: 'https://images.pexels.com/photos/2294354/pexels-photo-2294354.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
  },
  'highknees': {
    label: 'High Knees',
    score: 0.2,
    equipment: [],
    muscles: ['lower'],
    image: 'https://images.pexels.com/photos/2294354/pexels-photo-2294354.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
  },
  'hipraises': {
    label: 'Hip Raises',
    score: 0.3,
    equipment: [],
    muscles: ['core'],
    image: 'https://images.pexels.com/photos/2294354/pexels-photo-2294354.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
  },
  'jumpingjacks': {
    label: 'Jumping Jacks',
    score: 0.1,
    equipment: [],
    muscles: ['fullbody'],
    image: 'https://images.pexels.com/photos/2294354/pexels-photo-2294354.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
  },
  'jumps': {
    label: 'Jumps',
    score: 0.35,
    equipment: [],
    muscles: ['lower'],
    image: 'https://images.pexels.com/photos/2294354/pexels-photo-2294354.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
  },
  'lunges': {
    label: 'Lunges',
    score: 0.4,
    equipment: [],
    muscles: ['lower'],
    image: 'https://images.pexels.com/photos/2294354/pexels-photo-2294354.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
  },
  'mountainclimbers': {
    label: 'Mountain Climbers',
    score: 0.2,
    equipment: [],
    muscles: ['core', 'lower'],
    image: 'https://images.pexels.com/photos/2294354/pexels-photo-2294354.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
  },
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
