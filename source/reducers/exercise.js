var i = {
  image: 'https://images.pexels.com/photos/2294361/pexels-photo-2294361.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
  video: 'https://images.pexels.com/photos/2294361/pexels-photo-2294361.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
};

const exercises = {
  'archerpullups': {
    label: 'Archer Pullups',
    score: 1.5,
    equipments: ['pullupbar'],
    muscles: ['shoulders', 'triceps', 'forearms'],
    ...i
  },
  'archerpushups': {
    label: 'Archer Pushups',
    score: 0.9,
    equipments: [],
    muscles: ['chest', 'triceps', 'shoulders'],
    ...i
  },
  'armlegliftsleft': {
    label: 'Arm & Leg Lifts Left',
    score: 0.3,
    equipments: [],
    muscles: ['hamstrings', 'shoulders'],
    ...i
  },
  'armlegliftsright': {
    label: 'Arm & Leg Lifts Right',
    score: 0.3,
    equipments: [],
    muscles: ['hamstrings', 'shoulders'],
    ...i
  },
  'assistedlegraises': {
    label: 'Assisted Leg Raises',
    score: 0.5,
    equipments: [],
    muscles: ['quadriceps', 'abs'],
    ...i
  },
  'assistedlungewalk': {
    label: 'Assisted Lunge Walk',
    score: 0.25,
    equipments: [],
    muscles: ['quadriceps', 'hamstrings'],
    ...i
  },
  'assistedlunges': {
    label: 'Assisted Lunges',
    score: 0.3,
    equipments: [],
    muscles: ['quadriceps', 'hamstrings'],
    ...i
  },
  'assistedpistolsquats': {
    label: 'Assisted Pistol Squats',
    score: 0.7,
    equipments: [],
    muscles: ['quadriceps', 'hamstrings'],
    ...i
  },
  'assistedpullups': {
    label: 'Assisted Pullups',
    score: 0.5,
    equipments: [],
    muscles: ['shoulders', 'triceps', 'forearms'],
    ...i
  },
  'assistedsquats': {
    label: 'Assisted Squats',
    score: 0.25,
    equipments: [],
    muscles: ['quadriceps', 'hamstrings'],
    ...i
  },
  'assistedstandups': {
    label: 'Assisted Standups',
    score: 0.4,
    equipments: [],
    muscles: ['abs', 'quadriceps', 'calves'],
    ...i
  },
  'bicyclecrunches': {
    label: 'Bicycle Crunches',
    score: 0.3,
    equipments: [],
    muscles: ['abs'],
    ...i
  },
  'burpeesquatjumps': {
    label: 'Burpee Squat Jumps',
    score: 0.75,
    equipments: [],
    muscles: ['quadriceps', 'hamstrings', 'shoulders', ''],
    ...i
  },
  'burpees': {
    label: 'Burpees',
    score: 0.6,
    equipments: [],
    muscles: [],
    ...i
  },
  'calfraises': {
    label: 'Calf Raises',
    score: 0.3,
    equipments: [],
    muscles: [],
    ...i
  },
  'clappingpushups': {
    label: 'Clapping Pushups',
    score: 0.8,
    equipments: [],
    muscles: [],
    ...i
  },
  'climbers': {
    label: 'Climbers',
    score: 0.3,
    equipments: [],
    muscles: [],
    ...i
  },
  'cossacksquats': {
    label: 'Cossack Squats',
    score: 1,
    equipments: [],
    muscles: [],
    ...i
  },
  'crunches': {
    label: 'Crunches',
    score: 0.25,
    equipments: [],
    muscles: [],
    ...i
  },
  'diamondpushups': {
    label: 'Diamond Pushups',
    score: 0.65,
    equipments: [],
    muscles: [],
    ...i
  },
  'elevatedsplitsquatsleft': {
    label: 'Elevated Split Squats Left',
    score: 0.4,
    equipments: [],
    muscles: [],
    ...i
  },
  'elevatedsplitsquatsright': {
    label: 'Elevated Split Squats Right',
    score: 0.4,
    equipments: [],
    muscles: [],
    ...i
  },
  'froggers': {
    label: 'Froggers',
    score: 0.45,
    equipments: [],
    muscles: [],
    ...i
  },
  'groundsupermen': {
    label: 'Ground Supermen',
    score: 0.2,
    equipments: [],
    muscles: [],
    ...i
  },
  'russiantwists': {
    label: 'Russian Twists',
    score: 0.3,
    equipments: [],
    muscles: [],
    ...i
  },
  'hangingkneeraises': {
    label: 'Hanging Knee Raises',
    score: 0.4,
    equipments: [],
    muscles: [],
    ...i
  },
  'hangingkneewipers': {
    label: 'Hanging Knee Wipers',
    score: 1.3,
    equipments: [],
    muscles: [],
    ...i
  },
  'hanginglegraises': {
    label: 'Hanging Leg Raises',
    score: 0.55,
    equipments: [],
    muscles: [],
    ...i
  },
  'heelraisesleft': {
    label: 'Heel Raises Left',
    score: 0.25,
    equipments: [],
    muscles: [],
    ...i
  },
  'heelraisesright': {
    label: 'Heel Raises Right',
    score: 0.25,
    equipments: [],
    muscles: [],
    ...i
  },
  'highjumps': {
    label: 'High Jumps',
    score: 0.5,
    equipments: [],
    muscles: [],
    ...i
  },
  'highknees': {
    label: 'High Knees',
    score: 0.2,
    equipments: [],
    muscles: [],
    ...i
  },
  'hipraises': {
    label: 'Hip Raises',
    score: 0.3,
    equipments: [],
    muscles: [],
    ...i
  },
  'inclinepushups': {
    label: 'Incline Pushups',
    score: 0.4,
    equipments: ['pullupbar'],
    muscles: [],
    ...i
  },
  'inclinerows': {
    label: 'Incline Rows',
    score: 0.7,
    equipments: ['pullupbar'],
    muscles: [],
    ...i
  },
  'jackknives': {
    label: 'Jackknives',
    score: 0.5,
    equipments: [],
    muscles: [],
    ...i
  },
  'jumpingjacks': {
    label: 'Jumping Jacks',
    score: 0.1,
    equipments: [],
    muscles: [],
    ...i
  },
  'jumpingpullups': {
    label: 'Jumping Pullups',
    score: 0.4,
    equipments: ['pullupbar'],
    muscles: ['shoulders', 'triceps', 'forearms', 'calves'],
    ...i
  },
  'jumps': {
    label: 'Jumps',
    score: 0.3,
    equipments: [],
    muscles: [],
    ...i
  },
  'kneepushups': {
    label: 'Knee Pushups',
    score: 0.3,
    equipments: [],
    muscles: [],
    ...i
  },
  'kneewipers': {
    label: 'Knee Wipers',
    score: 0.3,
    equipments: [],
    muscles: [],
    ...i
  },
  'legwipers': {
    label: 'Leg Wipers',
    score: 0.4,
    equipments: [],
    muscles: [],
    ...i
  },
  'lungewalk': {
    label: 'Lunge Walk',
    score: 0.35,
    equipments: [],
    muscles: [],
    ...i
  },
  'lunges': {
    label: 'Lunges',
    score: 0.4,
    equipments: [],
    muscles: [],
    ...i
  },
  'mountainclimbers': {
    label: 'Mountain Climbers',
    score: 0.2,
    equipments: [],
    muscles: [],
    ...i
  },
  'muscleups': {
    label: 'Muscleups',
    score: 1.75,
    equipments: [],
    muscles: [],
    ...i
  },
  'negativebardips': {
    label: 'Negative Bar Dips',
    score: 0.7,
    equipments: [],
    muscles: [],
    ...i
  },
  'nagativepushups': {
    label: 'Nagative Pushups',
    score: 0.4,
    equipments: [],
    muscles: [],
    ...i
  },
  'onearmpushups': {
    label: 'One-Arm-Pushups',
    score: 1,
    equipments: [],
    muscles: [],
    ...i
  },
  'pikes': {
    label: 'Pikes',
    score: 0.5,
    equipments: [],
    muscles: [],
    ...i
  },
  'pistols': {
    label: 'Pistols',
    score: 0.7,
    equipments: [],
    muscles: [],
    ...i
  },
  'plankkneestochest': {
    label: 'Plank Knees-To-Chest',
    score: 0.3,
    equipments: [],
    muscles: [],
    ...i
  },
  'plankkneestoelbow': {
    label: 'Plank Knees-To-Elbow',
    score: 0.6,
    equipments: [],
    muscles: [],
    ...i
  },
  'plankleglifts': {
    label: 'Plank Leg Lifts',
    score: 0.5,
    equipments: [],
    muscles: [],
    ...i
  },
  'plankswitches': {
    label: 'Plank Switches',
    score: 0.5,
    equipments: [],
    muscles: [],
    ...i
  },
  'pullups': {
    label: 'Pullups',
    score: 0.75,
    equipments: [],
    muscles: [],
    ...i
  },
  'pushups': {
    label: 'Pushups',
    score: 0.5,
    equipments: [],
    muscles: [],
    ...i
  },
  'reverselunges': {
    label: 'Reverse Lunges',
    score: 0.4,
    equipments: [],
    muscles: [],
    ...i
  },
  'shoulderbridgelegraisesleft': {
    label: 'Shoulder Bridge Leg Raises Left',
    score: 0.55,
    equipments: [],
    muscles: [],
    ...i
  },
  'shoulderbridgelegraisesright': {
    label: 'Shoulder Bridge Leg Raises Right',
    score: 0.55,
    equipments: [],
    muscles: [],
    ...i
  },
  'shrimpsquats': {
    label: 'Shrimp Squats',
    score: 0.6,
    equipments: [],
    muscles: [],
    ...i
  },
  'sidedipsleft': {
    label: 'Side Dips Left',
    score: 0.5,
    equipments: [],
    muscles: [],
    ...i
  },
  'sidedipsright': {
    label: 'Side Dips Right',
    score: 0.5,
    equipments: [],
    muscles: [],
    ...i
  },
  'sidelunges': {
    label: 'Side Lunges',
    score: 0.6,
    equipments: [],
    muscles: [],
    ...i
  },
  'singleleghipraisesleft': {
    label: 'SingleLegHipRaisesLeft',
    score: 0.6,
    equipments: [],
    muscles: [],
    ...i
  },
  'singleleghipraisesright': {
    label: 'SingleLegHipRaisesRight',
    score: 0.6,
    equipments: [],
    muscles: [],
    ...i
  },
  'situps': {
    label: 'Situps',
    score: 0.35,
    equipments: [],
    muscles: [],
    ...i
  },
  'skippingjumps': {
    label: 'Skipping Jumps',
    score: 0.1,
    equipments: [],
    muscles: [],
    ...i
  },
  'sphinxpushups': {
    label: 'Sphinx Pushups',
    score: 0.85,
    equipments: [],
    muscles: [],
    ...i
  },
  'spidermanpushups': {
    label: 'Spiderman Pushups',
    score: 0.65,
    equipments: [],
    muscles: [],
    ...i
  },
  'splitlunges': {
    label: 'Split Lunges',
    score: 0.5,
    equipments: [],
    muscles: [],
    ...i
  },
  'sprawlfrogs': {
    label: 'Sprawl Frogs',
    score: 0.5,
    equipments: [],
    muscles: [],
    ...i
  },
  'sprawls': {
    label: 'Sprawls',
    score: 0.35,
    equipments: [],
    muscles: [],
    ...i
  },
  'squatjumps': {
    label: 'Squat Jumps',
    score: 0.4,
    equipments: [],
    muscles: [],
    ...i
  },
  'squats': {
    label: 'Squats',
    score: 0.35,
    equipments: [],
    muscles: [],
    ...i
  },
  'standups': {
    label: 'Standups',
    score: 0.55,
    equipments: [],
    muscles: [],
    ...i
  },
  'legraises': {
    label: 'Leg Raises',
    score: 0.4,
    equipments: [],
    muscles: [],
    ...i
  },
  'supermen': {
    label: 'Supermen',
    score: 0.3,
    equipments: [],
    muscles: [],
    ...i
  },
  'toetouchcrunches': {
    label: 'Toe-Touch Crunches',
    score: 0.5,
    equipments: [],
    muscles: [],
    ...i
  },
  'toestobar': {
    label: 'Toes-To-Bar',
    score: 0.65,
    equipments: [],
    muscles: [],
    ...i
  },
  'widesquats': {
    label: 'Wide Squats',
    score: 0.3,
    equipments: [],
    muscles: [],
    ...i
  },
  'rest': {
    label: 'Rest',
    score: 0,
    equipments: [],
    muscles: [],
    ...i
  }
};

export default function reducer(state = exercises, action) {
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
