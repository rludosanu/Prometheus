import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { connect } from 'react-redux';
import {
  getWorkoutMuscles,
  getWorkoutDifficulty
} from '../../../helpers/workout';
import Card from './card';
import CardCarousel from './card-carousel';

export default connect(
  state => ({
    exercises: state.exercises,
    workouts: state.workouts,
  }),
  null
)(
  class extends Component {
    static navigationOptions = {
      header: null
    };

    _goToWorkout(props) {
      this.props.navigation.navigate('WorkoutPreview', props);
    }

    render() {
      const { exercises, workouts } = this.props;

      return (
        <ScrollView style={{ backgroundColor: 'white' }}>
          <CardCarousel
            label={ 'Workouts' }
            description={ 'Prometheus signature workouts' }
            background={ 'https://images.pexels.com/photos/2261482/pexels-photo-2261482.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' }
            onPress={ () => this.props.navigation.navigate('WorkoutsList') }
            featured={ [{
              label: 'Achilles',
              description: getWorkoutMuscles(workouts['achilles'], exercises),
              difficulty: getWorkoutDifficulty(workouts['achilles'], exercises, 'number'),
              duration: 3,
              onPress: () => this._goToWorkout({ id: 'achilles', label: 'Achilles' }),
            }, {
              label: 'Adonis',
              description: getWorkoutMuscles(workouts['adonis'], exercises),
              difficulty: getWorkoutDifficulty(workouts['adonis'], exercises, 'number'),
              duration: 1,
              onPress: () => this._goToWorkout({ id: 'adonis', label: 'Adonis' }),
            }, {
              label: 'Agon',
              description: getWorkoutMuscles(workouts['agon'], exercises),
              difficulty: getWorkoutDifficulty(workouts['agon'], exercises, 'number'),
              duration: 3,
              onPress: () => this._goToWorkout({ id: 'agon', label: 'Agon' }),
            }] }
          />
          <Card
            label={ ['Single', 'Exercises'] }
            description={ 'Target specific muscles' }
            background={ 'https://images.pexels.com/photos/949132/pexels-photo-949132.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' }
            onPress={ () => this.props.navigation.navigate('ExercisesList')}
          />
          <Card
            label={ ['Sprints', '& Runs'] }
            description={ 'Train on the road or track' }
            background={ 'https://images.pexels.com/photos/186405/pexels-photo-186405.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' }
            onPress={ () => {} }
          />
        </ScrollView>
      );
    }
  }
);
