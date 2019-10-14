import React, { Fragment } from 'react';
import {
  ScrollView,
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux';
import Feather from 'react-native-vector-icons/Feather';
import {
  getWorkoutMuscles,
  getWorkoutDifficulty,
  formatWorkoutsList,
  formatWorkoutMuscles
} from './../../../helpers/workout';

const stylesColoredDots = StyleSheet.create({
  dot: {
    fontSize: 8,
    marginRight: 2,
    marginTop: 4
  }
});

function ColoredDots({ count }) {
  const pickColor = (b, c) => c >= b ? '#EBEBEB' : '#7F7F7F';
  const dots = [];
  let index;

  for (index = 1 ; index <= 3 ; index++) {
    dots.push(
      <Feather
        key={ `dot-${index}` }
        style={ [stylesColoredDots.dot, { color: pickColor(index, count) }] }
        name={ 'hexagon' }
      />
    );
  }
  return (<Fragment>{ dots }</Fragment>);
}

const stylesWorkouts = StyleSheet.create({
  container: {
    backgroundColor: '#161616'
  },
  workout: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#222222'
  },
  image: {
    width: 90,
    height: 90,
    borderRadius: 4,
    marginRight: 15
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'white',
    textTransform: 'uppercase',
    fontStyle: 'italic'
  },
  body: {
    fontSize: 14,
    color: '#A9A8A6'
  },
  difficulty: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5
  },
  duration: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  label: {
    fontSize: 12,
    color: '#A9A8A6',
    marginLeft: 4
  }
});

function Workouts({ workouts, filters, onPress }) {
  return (
    <ScrollView style={ stylesWorkouts.container }>
      { workouts.filter(workout => {
        let points = 0;
        let filter;

        if (!filters || !filters.length) {
          return true;
        } else {
          for (filter of filters) {
            if (filter.type === 'difficulty' && filter.value === workout.difficulty) {
              points += 1;
            } else if (filter.type === 'muscles' && workout.muscles.includes(filter.value)) {
              points += 1;
            }
          }
          return points === filters.length;
        }
      }).map(workout => (
        <TouchableOpacity
          key={ `workout-${workout.id}` }
          onPress={ () => onPress({ id: workout.id, label: workout.label }) }
          style={ stylesWorkouts.workout }
        >
          <Image
            style={ stylesWorkouts.image }
            source={{ uri: workout.image }}
          />
          <View>
            <Text style={ stylesWorkouts.name }>{ workout.label }</Text>
            <Text style={ stylesWorkouts.body }>{ formatWorkoutMuscles(workout.muscles) }</Text>
            <View style={ stylesWorkouts.difficulty }>
              <ColoredDots count={ workout.difficulty } />
              <Text style={ stylesWorkouts.label }>Difficulty</Text>
            </View>
            <View style={ stylesWorkouts.duration }>
              <ColoredDots count={ 1 } />
              <Text style={ stylesWorkouts.label }>Duration</Text>
            </View>
          </View>
        </TouchableOpacity>
      )) }
    </ScrollView>
  );
}

const stylesFilters = StyleSheet.create({
  container: {
    backgroundColor: '#222222'
  },
  label: {
    color: 'white',
    fontSize: 14,
    borderWidth: 1,
    borderColor: '#7F7F7F',
    borderRadius: 4,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 5,
    paddingBottom: 5,
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 5,
    marginRight: 5
  },
  labelActive: {
    color: 'white',
    fontSize: 14,
    borderWidth: 1,
    borderColor: '#007ACA',
    backgroundColor: '#007ACA',
    borderRadius: 4,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 5,
    paddingBottom: 5,
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 5,
    marginRight: 5
  }
});

function isFilterActive(filters, filter) {
  return filters.findIndex(item => item.type === filter.type && item.value === filter.value) !== -1 ? true : false;
}

function Filters({ activeFilters, onPress }) {
  const filters = [
    { label: 'Beginner', value: 1, type: 'difficulty' },
    { label: 'Intermediate', value: 2, type: 'difficulty' },
    { label: 'Advanced', value: 3, type: 'difficulty' },
    { label: 'Full Body', value: 'fullbody', type: 'muscles' },
    { label: 'Lower', value: 'lower', type: 'muscles' },
    { label: 'Core', value: 'core', type: 'muscles' },
    { label: 'Upper', value: 'upper', type: 'muscles' },
    // { label: 'Short', value: 'Short', type: 'duration' },
    // { label: 'Medium', value: 'Medium', type: 'duration' },
    // { label: 'Long', value: 'Long', type: 'duration' },
  ];

  return (
    <View style={ stylesFilters.container }>
      <ScrollView horizontal={ true }>
        { filters.map((filter, index) => (
          <TouchableOpacity
            key={ `filter-${index}` }
            onPress={ () => onPress(filter) }
          >
            <Text
              style={ isFilterActive(activeFilters, filter) ? stylesFilters.labelActive : stylesFilters.label }
            >
              { filter.label }
            </Text>
          </TouchableOpacity>
        )) }
      </ScrollView>
    </View>
  );
}

export default connect(
  state => ({
    exercises: state.exercises,
    workouts: state.workouts,
    equipments: state.equipments
  }),
  null
)(
  class WorkoutsListScreen extends React.Component {
    static navigationOptions = ({ navigation }) => {
      return {
        title: 'Workouts',
        headerStyle: {
          backgroundColor: '#222222'
        },
        headerTintColor: 'white'
      };
    };

    constructor(props) {
      super(props);
      this.state = {
        filters: []
      };
    }

    _updateFilters = (filter) => {
      let { filters } = this.state;
      let index = filters.findIndex(item => item.type == filter.type && item.value === filter.value);

      if (index === -1) {
        filters.push(filter);
      } else {
        filters.splice(index, 1);
      }
      this.setState({ filters });
    }

    render() {
      const { filters } = this.state;
      const { exercises, workouts, equipments } = this.props;

      return (
        <View style={{ flex: 1 }}>
          <Filters
            activeFilters={ this.state.filters }
            onPress={ this._updateFilters }
          />
          <Workouts
            workouts={ formatWorkoutsList(workouts, exercises, equipments) }
            filters={ filters }
            onPress={ (props) => this.props.navigation.navigate('WorkoutPreview', props) }
          />
        </View>
      );
    }
  }
);
