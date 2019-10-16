# Prometheus

A free calisthenics native app for mobile devices.

## Data models

**Exercises** and **workouts** rely on other entries to work like **muscle groups** and **equipments**.

### Muscle Groups

`muscleGroups` are stored at the `muscle_groups/$muscleGroupId` node in Firebase.

```
MuscleGroup {
  label <Enum['Lower', 'Upper', 'Core', 'Full Body']>
}
```

### Equipment

`equipments` are stored at the `equipments/$equipmentId` node in Firebase.

```
Equipment {
  label <String>
}
```

### Exercise

`exercises` are stored at the `exercises/$exerciseId` node in Firebase.

```
Exercise {
  label <String>
  score <Float>
  equipments <Array[$equipmentId]>
  muscles <Array[$muscleId]>
  image <String>
  video <String>
}
```

### Workouts

`workouts` are stored at the `workouts/$workoutId` node in Firebase.

A set is an exercise repeated a certain amount of time.

```
Set {
  exerciseId <String>
  volume <Integer>
}
```

A round is a combination of sets.

```
Round {
  <Array[Set]>
}
```

A workout is a combination of rounds.

```
Workout {
  label <String>
  image <String>
  rounds <Array[Round]>
}
```
