export function getUserLevel({ exercises, workouts, logs }) {
  let count = 1000;
  let level = 0;
  let score = Object.keys(logs).reduce((totalScore, logId) => {
    let { exerciseId, workoutId, volume } = logs[logId];

    if (exerciseId) {
      totalScore += exercises[exerciseId].score * volume;
    } else if (workoutId) {
      totalScore += workouts[workoutId].rounds.reduce((workoutScore, round) => {
        return workoutScore + round.reduce((roundScore, set) => {
          return roundScore + (exercises[set.id].score * set.volume);
        }, 0);
      }, 0);
    }
    return totalScore;
  }, 0);

  while (true) {
  	if (score < count) {
  		break;
  	}
  	count = count + ((count * 20) / 100);
  	level += 1;
  }
  return level;
}
