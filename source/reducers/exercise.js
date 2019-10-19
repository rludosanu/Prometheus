var i = {
  image: 'https://images.pexels.com/photos/2294361/pexels-photo-2294361.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
  video: 'https://images.pexels.com/photos/2294361/pexels-photo-2294361.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
};

const exercises = {
  'ArcherPullups': {
    label: 'Archer Pullups',
    score: 1.5,
    equipments: ['pullupbar'],
    muscles: ['shoulders', 'triceps', 'forearms'],
    ...i
  },
  'ArcherPushups': {
    label: 'Archer Pushups',
    score: 0.9,
    equipments: [],
    muscles: ['chest', 'triceps', 'shoulders'],
    ...i
  },
  'ArmLegLiftsLeft': {
    label: 'Arm & Leg Lifts Left',
    score: 0.3,
    equipments: [],
    muscles: ['hamstrings', 'shoulders'],
    ...i
  },
  'ArmLegLiftsRight': {
    label: 'Arm & Leg Lifts Right',
    score: 0.3,
    equipments: [],
    muscles: ['hamstrings', 'shoulders'],
    ...i
  },
  'AssistedLegRaises': {
    label: 'Assisted Leg Raises',
    score: 0.5,
    equipments: [],
    muscles: ['quadriceps', 'abs'],
    ...i
  },
  'AssistedLungeWalk': {
    label: 'Assisted Lunge Walk',
    score: 0.25,
    equipments: [],
    muscles: ['quadriceps', 'hamstrings'],
    ...i
  },
  'AssistedLunges': {
    label: 'Assisted Lunges',
    score: 0.3,
    equipments: [],
    muscles: ['quadriceps', 'hamstrings'],
    ...i
  },
  'AssistedPistolSquats': {
    label: 'Assisted Pistol Squats',
    score: 0.7,
    equipments: [],
    muscles: ['quadriceps', 'hamstrings'],
    ...i
  },
  'AssistedPullups': {
    label: 'Assisted Pullups',
    score: 0.5,
    equipments: [],
    muscles: ['shoulders', 'triceps', 'forearms'],
    ...i
  },
  'AssistedSquats': {
    label: 'Assisted Squats',
    score: 0.25,
    equipments: [],
    muscles: ['quadriceps', 'hamstrings'],
    ...i
  },
  'AssistedStandups': {
    label: 'Assisted Standups',
    score: 0.4,
    equipments: [],
    muscles: ['abs', 'quadriceps', 'calves'],
    ...i
  },
  'BicycleCrunches': {
    label: 'Bicycle Crunches',
    score: 0.3,
    equipments: [],
    muscles: ['abs'],
    ...i
  },
  'BurpeeSquatJumps': {
    label: 'Burpee Squat Jumps',
    score: 0.75,
    equipments: [],
    muscles: ['quadriceps', 'hamstrings', 'shoulders', ''],
    ...i
  },
  'Burpees': {
    label: 'Burpees',
    score: 0.6,
    equipments: [],
    muscles: [],
    ...i
  },
  'CalfRaises': {
    label: 'Calf Raises',
    score: 0.3,
    equipments: [],
    muscles: [],
    ...i
  },
  'ClappingPushups': {
    label: 'Clapping Pushups',
    score: 0.8,
    equipments: [],
    muscles: [],
    ...i
  },
  'Climbers': {
    label: 'Climbers',
    score: 0.3,
    equipments: [],
    muscles: [],
    ...i
  },
  'CossackSquats': {
    label: 'Cossack Squats',
    score: 1,
    equipments: [],
    muscles: [],
    ...i
  },
  'Crunches': {
    label: 'Crunches',
    score: 0.25,
    equipments: [],
    muscles: [],
    ...i
  },
  'DiamondPushups': {
    label: 'Diamond Pushups',
    score: 0.65,
    equipments: [],
    muscles: [],
    ...i
  },
  'ElevatedSplitSquatsLeft': {
    label: 'Elevated Split Squats Left',
    score: 0.4,
    equipments: [],
    muscles: [],
    ...i
  },
  'ElevatedSplitSquatsRight': {
    label: 'Elevated Split Squats Right',
    score: 0.4,
    equipments: [],
    muscles: [],
    ...i
  },
  'Froggers': {
    label: 'Froggers',
    score: 0.45,
    equipments: [],
    muscles: [],
    ...i
  },
  'GroundSupermen': {
    label: 'Ground Supermen',
    score: 0.2,
    equipments: [],
    muscles: [],
    ...i
  },
  'RussianTwists': {
    label: 'Russian Twists',
    score: 0.3,
    equipments: [],
    muscles: [],
    ...i
  },
  'HangingKneeRaises': {
    label: 'Hanging Knee Raises',
    score: 0.4,
    equipments: [],
    muscles: [],
    ...i
  },
  'HangingKneeWipers': {
    label: 'Hanging Knee Wipers',
    score: 1.3,
    equipments: [],
    muscles: [],
    ...i
  },
  'HangingLegRaises': {
    label: 'Hanging Leg Raises',
    score: 0.55,
    equipments: [],
    muscles: [],
    ...i
  },
  'HeelRaisesLeft': {
    label: 'Heel Raises Left',
    score: 0.25,
    equipments: [],
    muscles: [],
    ...i
  },
  'HeelRaisesRight': {
    label: 'Heel Raises Right',
    score: 0.25,
    equipments: [],
    muscles: [],
    ...i
  },
  'HighJumps': {
    label: 'High Jumps',
    score: 0.5,
    equipments: [],
    muscles: [],
    ...i
  },
  'HighKnees': {
    label: 'High Knees',
    score: 0.2,
    equipments: [],
    muscles: [],
    ...i
  },
  'HipRaises': {
    label: 'Hip Raises',
    score: 0.3,
    equipments: [],
    muscles: [],
    ...i
  },
  'InclinePushups': {
    label: 'Incline Pushups',
    score: 0.4,
    equipments: ['pullupbar'],
    muscles: [],
    ...i
  },
  'InclineRows': {
    label: 'Incline Rows',
    score: 0.7,
    equipments: ['pullupbar'],
    muscles: [],
    ...i
  },
  'Jackknives': {
    label: 'Jackknives',
    score: 0.5,
    equipments: [],
    muscles: [],
    ...i
  },
  'JumpingJacks': {
    label: 'Jumping Jacks',
    score: 0.1,
    equipments: [],
    muscles: [],
    ...i
  },
  'JumpingPullups': {
    label: 'Jumping Pullups',
    score: 0.4,
    equipments: ['pullupbar'],
    muscles: ['shoulders', 'triceps', 'forearms', 'calves'],
    ...i
  },
  'Jumps': {
    label: 'Jumps',
    score: 0.3,
    equipments: [],
    muscles: [],
    ...i
  },
  'KneePushups': {
    label: 'Knee Pushups',
    score: 0.3,
    equipments: [],
    muscles: [],
    ...i
  },
  'KneeWipers': {
    label: 'Knee Wipers',
    score: 0.3,
    equipments: [],
    muscles: [],
    ...i
  },
  'LegWipers': {
    label: 'Leg Wipers',
    score: 0.4,
    equipments: [],
    muscles: [],
    ...i
  },
  'LungeWalk': {
    label: 'Lunge Walk',
    score: 0.35,
    equipments: [],
    muscles: [],
    ...i
  },
  'Lunges': {
    label: 'Lunges',
    score: 0.4,
    equipments: [],
    muscles: [],
    ...i
  },
  'MountainClimbers': {
    label: 'Mountain Climbers',
    score: 0.2,
    equipments: [],
    muscles: [],
    ...i
  },
  'Muscleups': {
    label: 'Muscleups',
    score: 1.75,
    equipments: [],
    muscles: [],
    ...i
  },
  'NegativeBarDips': {
    label: 'Negative Bar Dips',
    score: 0.7,
    equipments: [],
    muscles: [],
    ...i
  },
  'NagativePushups': {
    label: 'Nagative Pushups',
    score: 0.4,
    equipments: [],
    muscles: [],
    ...i
  },
  'OneArmPushups': {
    label: 'One-Arm-Pushups',
    score: 1,
    equipments: [],
    muscles: [],
    ...i
  },
  'Pikes': {
    label: 'Pikes',
    score: 0.5,
    equipments: [],
    muscles: [],
    ...i
  },
  'Pistols': {
    label: 'Pistols',
    score: 0.7,
    equipments: [],
    muscles: [],
    ...i
  },
  'PlankKneesToChest': {
    label: 'Plank Knees-To-Chest',
    score: 0.3,
    equipments: [],
    muscles: [],
    ...i
  },
  'PlankKneesToElbow': {
    label: 'Plank Knees-To-Elbow',
    score: 0.6,
    equipments: [],
    muscles: [],
    ...i
  },
  'PlankLegLifts': {
    label: 'Plank Leg Lifts',
    score: 0.5,
    equipments: [],
    muscles: [],
    ...i
  },
  'PlankSwitches': {
    label: 'Plank Switches',
    score: 0.5,
    equipments: [],
    muscles: [],
    ...i
  },
  'Pullups': {
    label: 'Pullups',
    score: 0.75,
    equipments: [],
    muscles: [],
    ...i
  },
  'Pushups': {
    label: 'Pushups',
    score: 0.5,
    equipments: [],
    muscles: [],
    ...i
  },
  'ReverseLunges': {
    label: 'Reverse Lunges',
    score: 0.4,
    equipments: [],
    muscles: [],
    ...i
  },
  'ShoulderBridgeLegRaisesLeft': {
    label: 'Shoulder Bridge Leg Raises Left',
    score: 0.55,
    equipments: [],
    muscles: [],
    ...i
  },
  'ShoulderBridgeLegRaisesRight': {
    label: 'Shoulder Bridge Leg Raises Right',
    score: 0.55,
    equipments: [],
    muscles: [],
    ...i
  },
  'ShrimpSquats': {
    label: 'Shrimp Squats',
    score: 0.6,
    equipments: [],
    muscles: [],
    ...i
  },
  'SideDipsLeft': {
    label: 'Side Dips Left',
    score: 0.5,
    equipments: [],
    muscles: [],
    ...i
  },
  'SideDipsRight': {
    label: 'Side Dips Right',
    score: 0.5,
    equipments: [],
    muscles: [],
    ...i
  },
  'SideLunges': {
    label: 'Side Lunges',
    score: 0.6,
    equipments: [],
    muscles: [],
    ...i
  },
  'SingleLegHipRaisesLeft': {
    label: 'SingleLegHipRaisesLeft',
    score: 0.6,
    equipments: [],
    muscles: [],
    ...i
  },
  'SingleLegHipRaisesRight': {
    label: 'SingleLegHipRaisesRight',
    score: 0.6,
    equipments: [],
    muscles: [],
    ...i
  },
  'Situps': {
    label: 'Situps',
    score: 0.35,
    equipments: [],
    muscles: [],
    ...i
  },
  'SkippingJumps': {
    label: 'Skipping Jumps',
    score: 0.1,
    equipments: [],
    muscles: [],
    ...i
  },
  'SphinxPushups': {
    label: 'Sphinx Pushups',
    score: 0.85,
    equipments: [],
    muscles: [],
    ...i
  },
  'SpidermanPushups': {
    label: 'Spiderman Pushups',
    score: 0.65,
    equipments: [],
    muscles: [],
    ...i
  },
  'SplitLunges': {
    label: 'Split Lunges',
    score: 0.5,
    equipments: [],
    muscles: [],
    ...i
  },
  'SprawlFrogs': {
    label: 'Sprawl Frogs',
    score: 0.5,
    equipments: [],
    muscles: [],
    ...i
  },
  'Sprawls': {
    label: 'Sprawls',
    score: 0.35,
    equipments: [],
    muscles: [],
    ...i
  },
  'SquatJumps': {
    label: 'Squat Jumps',
    score: 0.4,
    equipments: [],
    muscles: [],
    ...i
  },
  'Squats': {
    label: 'Squats',
    score: 0.35,
    equipments: [],
    muscles: [],
    ...i
  },
  'Standups': {
    label: 'Standups',
    score: 0.55,
    equipments: [],
    muscles: [],
    ...i
  },
  'LegRaises': {
    label: 'Leg Raises',
    score: 0.4,
    equipments: [],
    muscles: [],
    ...i
  },
  'Supermen': {
    label: 'Supermen',
    score: 0.3,
    equipments: [],
    muscles: [],
    ...i
  },
  'ToeTouchCrunches': {
    label: 'Toe-Touch Crunches',
    score: 0.5,
    equipments: [],
    muscles: [],
    ...i
  },
  'ToesToBar': {
    label: 'Toes-To-Bar',
    score: 0.65,
    equipments: [],
    muscles: [],
    ...i
  },
  'WideSquats': {
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
