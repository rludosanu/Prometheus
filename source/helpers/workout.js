function getExercisesIds(workout) {
  return workout.rounds.reduce((list, round) => {
    let exercise;

    for (exercise of round) {
      if (!list.includes(exercise.id) && exercise.id !== 'rest') {
        list.push(exercise.id);
      }
    }
    return list;
  }, []);
}

function getUniqueValues(ids, data, key) {
  return ids.reduce((list, id) => {
    let item;
    let datum;

    if (data[id] && data[id][key]) {
      datum = data[id][key];
      if (typeof datum === 'string') {
        if (!list.includes(datum)) {
          list.push(datum);
        }
      } else if (Array.isArray(datum)) {
        for (item of datum) {
          if (!list.includes(item)) {
            list.push(item);
          }
        }
      }
    }
    return list;
  }, []);
}

export function getWorkoutEquipment(workout, exercises, equipments) {
  let ids = getExercisesIds(workout);
  let values = getUniqueValues(ids, exercises, 'equipment');

  return values.length > 0
    ? values.map(id => equipments[id].label).join(', ')
    : 'No equipment';
}

export function getWorkoutMuscles(workout, exercises, format = 'string') {
  let results = getUniqueValues(getExercisesIds(workout), exercises, 'muscles');

  if (format === 'string') {
    return results.map(muscle => muscle.charAt(0).toUpperCase() + muscle.slice(1)).join(', ');
  } else {
    return results;
  }
}

export function getWorkoutVideos(workout, exercises) {
  return getUniqueValues(getExercisesIds(workout), exercises, 'video');
}

export function getWorkoutDifficulty(workout, exercises, output = 'number') {
  let count = 0;
  let total = 0;
  let difficulty = 1;
  let round;
  let exercise;

  for (round of workout.rounds) {
    for (exercise of round) {
      count += 1;
      if (exercise.id === 'rest') {
        total -= exercise.volume * 0.3;
      } else {
        total += exercise.volume * exercises[exercise.id].score;
      }
    }
  }
  difficulty = total / count;
  if (difficulty < 3) {
    return output === 'number' ? 1 : 'Beginner';
  } else if (difficulty >= 3 && difficulty < 4) {
    return output === 'number' ? 2 : 'Intermediate';
  } else if (difficulty >= 4) {
    return output === 'number' ? 3 : 'Advanced';
  } else {
    return output === 'number' ? 1 : 'Beginner';
  }
}

export function formatWorkoutsList(workouts, exercises, equipments) {
  return Object.keys(workouts).reduce((list, workoutId) => {
    list.push({
      id: workoutId,
      label: workouts[workoutId].label,
      image: workouts[workoutId].image,
      muscles: getWorkoutMuscles(workouts[workoutId], exercises, 'array'),
      difficulty: getWorkoutDifficulty(workouts[workoutId], exercises, output = 'number')
    });
    return list;
  }, []);
}

export function formatWorkoutMuscles(mucles) {
  return (muscles || []).map(muscle => muscle.charAt(0).toUpperCase() + muscle.slice(1)).join(', ');
}
