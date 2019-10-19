var i = {
  image: 'https://images.pexels.com/photos/2294361/pexels-photo-2294361.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
};

const workouts = {
  'Achilles': {
    label: 'Achilles',
    image: i.image,
    rounds: [
      [
        { id: 'Pullups', volume: 10 },
        { id: 'Burpees', volume: 20 },
        { id: 'Squats', volume: 30 },
      ],
      [
        { id: 'Pullups', volume: 10 },
        { id: 'Burpees', volume: 20 },
        { id: 'Squats', volume: 30 },
      ],
      [
        { id: 'Pullups', volume: 10 },
        { id: 'Burpees', volume: 20 },
        { id: 'Squats', volume: 30 },
      ],
      [
        { id: 'Pullups', volume: 10 },
        { id: 'Burpees', volume: 20 },
        { id: 'Squats', volume: 30 },
      ],
      [
        { id: 'Pullups', volume: 10 },
        { id: 'Burpees', volume: 20 },
        { id: 'Squats', volume: 30 },
      ],
    ]
  },
  'Adonis': {
    label: 'Adonis',
    image: i.image,
    rounds: [
      [
        { id: 'Burpees', volume: 40 },
        { id: 'SplitLunges', volume: 40 },
        { id: 'Crunches', volume: 40 },
      ],
      [
        { id: 'Burpees', volume: 30 },
        { id: 'SplitLunges', volume: 30 },
        { id: 'Crunches', volume: 30 },
      ],
      [
        { id: 'Burpees', volume: 20 },
        { id: 'SplitLunges', volume: 20 },
        { id: 'Crunches', volume: 20 },
      ],
      [
        { id: 'Burpees', volume: 10 },
        { id: 'SplitLunges', volume: 10 },
        { id: 'Crunches', volume: 10 },
      ],
    ]
  },
  'Agon': {
    label: 'Agon',
    image: i.image,
    rounds: [
      [
        { id: 'Pushups', volume: 5 },
        { id: 'HangingLegRaises', volume: 10 },
        { id: 'Squats', volume: 20 },
      ],
      [
        { id: 'Pushups', volume: 5 },
        { id: 'HangingLegRaises', volume: 10 },
        { id: 'Squats', volume: 20 },
      ],
      [
        { id: 'Pushups', volume: 5 },
        { id: 'HangingLegRaises', volume: 10 },
        { id: 'Squats', volume: 20 },
      ],
      [
        { id: 'Pushups', volume: 5 },
        { id: 'HangingLegRaises', volume: 10 },
        { id: 'Squats', volume: 20 },
      ],
    ]
  },
  'Amazona': {
    label: 'Amazona',
    image: i.image,
    rounds: [
      [
        { id: 'Lunges', volume: 20 },
        { id: 'CossackSquats', volume: 20 },
        { id: 'SplitLunges', volume: 20 },
        { id: 'ReverseLunges', volume: 20 },
        { id: 'SquatJumps', volume: 20 },
        { id: 'PlankLegLifts', volume: 20 },
      ],
      [
        { id: 'Lunges', volume: 20 },
        { id: 'CossackSquats', volume: 20 },
        { id: 'SplitLunges', volume: 20 },
        { id: 'ReverseLunges', volume: 20 },
        { id: 'SquatJumps', volume: 20 },
        { id: 'PlankLegLifts', volume: 20 },
      ],
    ]
  },
  'Aphrodite': {
    label: 'Aphrodite',
    image: i.image,
    rounds: [
      [
        { id: 'Burpees', volume: 50 },
        { id: 'Squats', volume: 50 },
        { id: 'Situps', volume: 50 },
      ],
      [
        { id: 'Burpees', volume: 40 },
        { id: 'Squats', volume: 40 },
        { id: 'Situps', volume: 40 },
      ],
      [
        { id: 'Burpees', volume: 30 },
        { id: 'Squats', volume: 30 },
        { id: 'Situps', volume: 30 },
      ],
      [
        { id: 'Burpees', volume: 20 },
        { id: 'Squats', volume: 20 },
        { id: 'Situps', volume: 20 },
      ],
      [
        { id: 'Burpees', volume: 10 },
        { id: 'Squats', volume: 10 },
        { id: 'Situps', volume: 10 },
      ],
    ]
  },
  'Apollon': {
    label: 'Apollon',
    image: i.image,
    rounds: [
      [
        { id: 'Burpees', volume: 20 },
        { id: 'Jumps', volume: 20 },
        { id: 'Squats', volume: 20 },
        { id: 'Rest', volume: 90 },
      ],
      [
        { id: 'Burpees', volume: 20 },
        { id: 'Jumps', volume: 20 },
        { id: 'Squats', volume: 20 },
        { id: 'Rest', volume: 90 },
      ],
      [
        { id: 'Burpees', volume: 20 },
        { id: 'Jumps', volume: 20 },
        { id: 'Squats', volume: 20 },
        { id: 'Rest', volume: 90 },
      ],
    ]
  },
  'Arachine': {
    label: 'Arachine',
    image: i.image,
    rounds: [
      [
        { id: 'SpidermanPushups', volume: 20 },
        { id: 'Squats', volume: 20 },
        { id: 'PlankSwitches', volume: 10 },
      ],
      [
        { id: 'SpidermanPushups', volume: 20 },
        { id: 'Squats', volume: 20 },
        { id: 'PlankSwitches', volume: 10 },
      ],
      [
        { id: 'SpidermanPushups', volume: 20 },
        { id: 'Squats', volume: 20 },
        { id: 'PlankSwitches', volume: 10 },
      ],
      [
        { id: 'SpidermanPushups', volume: 20 },
        { id: 'Squats', volume: 20 },
        { id: 'PlankSwitches', volume: 10 },
      ],
    ]
  },
  'Ares': {
    label: 'Ares',
    image: i.image,
    rounds: [
      [
        { id: 'Pullups', volume: 7 },
        { id: 'Situps', volume: 7 },
        { id: 'JumpingJacks', volume: 50 },
        { id: 'Rest', volume: 60 },
      ],
      [
        { id: 'Pullups', volume: 7 },
        { id: 'Situps', volume: 7 },
        { id: 'JumpingJacks', volume: 50 },
        { id: 'Rest', volume: 60 },
      ],
      [
        { id: 'Pullups', volume: 7 },
        { id: 'Situps', volume: 7 },
        { id: 'JumpingJacks', volume: 50 },
        { id: 'Rest', volume: 60 },
      ],
      [
        { id: 'Pullups', volume: 7 },
        { id: 'Situps', volume: 7 },
        { id: 'JumpingJacks', volume: 50 },
        { id: 'Rest', volume: 60 },
      ],
      [
        { id: 'Pullups', volume: 7 },
        { id: 'Situps', volume: 7 },
        { id: 'JumpingJacks', volume: 50 },
        { id: 'Rest', volume: 60 },
      ],
    ]
  },
  'Artemis': {
    label: 'Artemis',
    image: i.image,
    rounds: [
      [
        { id: 'Burpees', volume: 50 },
        { id: 'Pullups', volume: 50 },
        { id: 'Pushups', volume: 100 },
        { id: 'Squats', volume: 150 },
        { id: 'Burpees', volume: 50 },
      ],
    ]
  },
  'Athena': {
    label: 'Athena',
    image: i.image,
    rounds: [
      [
        { id: 'Climbers', volume: 25 },
        { id: 'Situps', volume: 25 },
        { id: 'Squats', volume: 25 },
        { id: 'Rest', volume: 25 },
      ],
      [
        { id: 'Climbers', volume: 20 },
        { id: 'Situps', volume: 20 },
        { id: 'Squats', volume: 20 },
        { id: 'Rest', volume: 20 },
      ],
      [
        { id: 'Climbers', volume: 15 },
        { id: 'Situps', volume: 15 },
        { id: 'Squats', volume: 15 },
        { id: 'Rest', volume: 15 },
      ],
      [
        { id: 'Climbers', volume: 10 },
        { id: 'Situps', volume: 10 },
        { id: 'Squats', volume: 10 },
        { id: 'Rest', volume: 10 },
      ],
      [
        { id: 'Climbers', volume: 5 },
        { id: 'Situps', volume: 5 },
        { id: 'Squats', volume: 5 },
      ],
    ]
  },
  'Aura': {
    label: 'Aura',
    image: i.image,
    rounds: [
      [
        { id: 'JumpingJacks', volume: 10 },
        { id: 'Squats', volume: 20 },
      ],
      [
        { id: 'JumpingJacks', volume: 20 },
        { id: 'Squats', volume: 40 },
      ],
      [
        { id: 'JumpingJacks', volume: 40 },
        { id: 'Squats', volume: 20 },
      ],
      [
        { id: 'JumpingJacks', volume: 20 },
        { id: 'Squats', volume: 10 },
      ],
    ]
  },
  'Charon': {
    label: 'Charon',
    image: i.image,
    rounds: [
      [
        { id: 'Burpees', volume: 10 },
        { id: 'HighKnees', volume: 20 },
        { id: 'Pushups', volume: 10 },
        { id: 'SplitLunges', volume: 20 },
        { id: 'Rest', volume: 30 },
      ],
      [
        { id: 'Burpees', volume: 10 },
        { id: 'HighKnees', volume: 20 },
        { id: 'Pushups', volume: 10 },
        { id: 'SplitLunges', volume: 20 },
        { id: 'Rest', volume: 30 },
      ],
      [
        { id: 'Burpees', volume: 10 },
        { id: 'HighKnees', volume: 20 },
        { id: 'Pushups', volume: 10 },
        { id: 'SplitLunges', volume: 20 },
        { id: 'Rest', volume: 30 },
      ],
      [
        { id: 'Burpees', volume: 10 },
        { id: 'HighKnees', volume: 20 },
        { id: 'Pushups', volume: 10 },
        { id: 'SplitLunges', volume: 20 },
        { id: 'Rest', volume: 30 },
      ],
      [
        { id: 'Burpees', volume: 10 },
        { id: 'HighKnees', volume: 20 },
        { id: 'Pushups', volume: 10 },
        { id: 'SplitLunges', volume: 20 },
        { id: 'Rest', volume: 30 },
      ],
    ]
  },
  'Demeter': {
    label: 'Demeter',
    image: i.image,
    rounds: [
      [
        { id: 'PlankSwitches', volume: 5 },
        { id: 'Burpees', volume: 10 },
        { id: 'Lunges', volume: 20 },
        { id: 'MountainClimbers', volume: 30 },
      ],
      [
        { id: 'PlankSwitches', volume: 5 },
        { id: 'Burpees', volume: 10 },
        { id: 'Lunges', volume: 20 },
        { id: 'MountainClimbers', volume: 30 },
      ],
      [
        { id: 'PlankSwitches', volume: 5 },
        { id: 'Burpees', volume: 10 },
        { id: 'Lunges', volume: 20 },
        { id: 'MountainClimbers', volume: 30 },
      ],
      [
        { id: 'PlankSwitches', volume: 5 },
        { id: 'Burpees', volume: 10 },
        { id: 'Lunges', volume: 20 },
        { id: 'MountainClimbers', volume: 30 },
      ],
      [
        { id: 'PlankSwitches', volume: 5 },
        { id: 'Burpees', volume: 10 },
        { id: 'Lunges', volume: 20 },
        { id: 'MountainClimbers', volume: 30 },
      ],
    ]
  },
  'Dione': {
    label: 'Dione',
    image: i.image,
    rounds: [
      [
        { id: 'JumpingJacks', volume: 75 },
        { id: 'Burpees', volume: 25 },
        { id: 'LegRaises', volume: 50 },
        { id: 'JumpingJacks', volume: 75 },
        { id: 'Situps', volume: 50 },
        { id: 'Burpees', volume: 25 },
      ],
      [
        { id: 'JumpingJacks', volume: 75 },
        { id: 'Burpees', volume: 25 },
        { id: 'LegRaises', volume: 50 },
        { id: 'JumpingJacks', volume: 75 },
        { id: 'Situps', volume: 50 },
        { id: 'Burpees', volume: 25 },
      ],
      [
        { id: 'JumpingJacks', volume: 75 },
        { id: 'Burpees', volume: 25 },
        { id: 'LegRaises', volume: 50 },
        { id: 'JumpingJacks', volume: 75 },
        { id: 'Situps', volume: 50 },
        { id: 'Burpees', volume: 25 },
      ],
    ]
  },
  'Echo': {
    label: 'Echo',
    image: i.image,
    rounds: [
      [
        { id: 'Sprawls', volume: 40 },
        { id: 'HighKnees', volume: 40 },
      ],
      [
        { id: 'Sprawls', volume: 30 },
        { id: 'HighKnees', volume: 30 },
      ],
      [
        { id: 'Sprawls', volume: 20 },
        { id: 'HighKnees', volume: 20 },
      ],
    ]
  },
};

export default function reducer(state = workouts, action) {
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
