import React, { Fragment } from 'react';
import {
  ScrollView,
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

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

function Workouts({ values }) {
  return (
    <ScrollView style={ stylesWorkouts.container }>
      { values.map((value, index) => (
        <TouchableOpacity
          key={ `workout-${index}` }
          onPress={ value.onPress }
          style={ stylesWorkouts.workout }
        >
          <Image
            style={ stylesWorkouts.image }
            source={{ uri: value.image }}
          />
          <View>
            <Text style={ stylesWorkouts.name }>{ value.name }</Text>
            <Text style={ stylesWorkouts.body }>{ value.body }</Text>
            <View style={ stylesWorkouts.difficulty }>
              <ColoredDots count={ value.difficulty } />
              <Text style={ stylesWorkouts.label }>Difficulty</Text>
            </View>
            <View style={ stylesWorkouts.duration }>
              <ColoredDots count={ value.duration } />
              <Text style={ stylesWorkouts.label }>Duration</Text>
            </View>
          </View>
        </TouchableOpacity>
      )) }
    </ScrollView>
  )
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
  }
});

function Filters({ values }) {
  return (
    <View style={ stylesFilters.container }>
      <ScrollView horizontal={ true }>
        { values.map((value, index) => (
          <Text
            key={ `filter-${index}` }
            style={ stylesFilters.label }
          >
            { value.label }
          </Text>
        )) }
      </ScrollView>
    </View>
  );
}

export default class WorkoutsListScreen extends React.Component {
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
      filter: [],
    };
  }

  render() {
    const filters = [
      { label: 'Beginner', value: 'Beginner', type: 'difficulty' },
      { label: 'Intermediate', value: 'Intermediate', type: 'difficulty' },
      { label: 'Advanced', value: 'Advanced', type: 'difficulty' },
      { label: 'Short', value: 'Short', type: 'duration' },
      { label: 'Medium', value: 'Medium', type: 'duration' },
      { label: 'Long', value: 'Long', type: 'duration' },
      { label: 'Full Body', value: 'Full Body', type: 'body' },
      { label: 'Lower', value: 'Lower', type: 'body' },
      { label: 'Core', value: 'Core', type: 'body' },
      { label: 'Upper', value: 'Upper', type: 'equipment' },
      { label: 'No Distances', value: 'No Distances', type: 'equipment' },
      { label: 'No Equipment', value: 'No Equipment', type: 'equipment' },
    ];
    const workouts = [{
      name: 'Achilles',
      body: 'Full Body',
      image: 'https://images.pexels.com/photos/2294354/pexels-photo-2294354.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
      difficulty: 2,
      duration: 2,
      onPress: () => this.props.navigation.navigate('WorkoutPreview', { title: 'Achilles' }),
    }, {
      name: 'Adonis',
      body: 'Lower, Core',
      image: 'https://images.pexels.com/photos/2294355/pexels-photo-2294355.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
      difficulty: 1,
      duration: 1,
      onPress: () => this.props.navigation.navigate('WorkoutPreview', { title: 'Adonis' }),
    }, {
      name: 'Agon',
      body: 'Lower',
      image: 'https://images.pexels.com/photos/2294353/pexels-photo-2294353.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
      difficulty: 3,
      duration: 1,
      onPress: () => this.props.navigation.navigate('WorkoutPreview', { title: 'Agon' }),
    }, {
      name: 'Achilles',
      body: 'Full Body',
      image: 'https://images.pexels.com/photos/2294354/pexels-photo-2294354.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
      difficulty: 2,
      duration: 2,
      onPress: () => this.props.navigation.navigate('WorkoutPreview', { title: 'Achilles' }),
    }, {
      name: 'Adonis',
      body: 'Lower, Core',
      image: 'https://images.pexels.com/photos/2294355/pexels-photo-2294355.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
      difficulty: 1,
      duration: 1,
      onPress: () => this.props.navigation.navigate('WorkoutPreview', { title: 'Adonis' }),
    }, {
      name: 'Agon',
      body: 'Lower',
      image: 'https://images.pexels.com/photos/2294353/pexels-photo-2294353.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
      difficulty: 3,
      duration: 1,
      onPress: () => this.props.navigation.navigate('WorkoutPreview', { title: 'Agon' }),
    }];

    return (
      <View style={{ flex: 1 }}>
        <Filters
          values={ filters }
        />
        <Workouts
          values={ workouts }
        />
      </View>
    );
  }
}
