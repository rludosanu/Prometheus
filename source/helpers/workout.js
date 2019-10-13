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

export function getWorkoutMuscles(workout, exercises) {
  let ids = getExercisesIds(workout);

  return getUniqueValues(ids, exercises, 'muscles')
    .map(muscle => muscle.charAt(0).toUpperCase() + muscle.slice(1))
    .join(', ');
}

export function getWorkoutVideos(workout, exercises) {
  return getUniqueValues(getExercisesIds(workout), exercises, 'video');
}
