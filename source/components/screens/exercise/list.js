import React, { Component, Fragment } from 'react';
import {
  ScrollView,
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

const stylesWorkouts = StyleSheet.create({
  container: {
    backgroundColor: '#161616'
  },
  workout: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
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

export default class extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Exercises',
      headerStyle: {
        backgroundColor: '#222222'
      },
      headerTintColor: 'white'
    };
  };

  render() {
    const exercises = [{
      label: 'Archer Pullups',
      image: 'https://images.pexels.com/photos/2294354/pexels-photo-2294354.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    }, {
      label: 'Arm & Leg Lifts Left',
      image: 'https://images.pexels.com/photos/2294355/pexels-photo-2294355.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    }, {
      label: 'Assisted Lunges',
      image: 'https://images.pexels.com/photos/2294353/pexels-photo-2294353.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    }];

    return (
      <ScrollView style={{ backgroundColor: '#161616' }}>
        <View style={{ paddingTop: 10, paddingBottom: 10 }}>
          { exercises.map((exercise, index) => (
            <TouchableOpacity
              key={ `exercise-${index}` }
              onPress={ () => this.props.navigation.navigate('ExercisePreview', { title: exercise.label }) }
              style={{ flexDirection: 'row', alignItems: 'center', paddingLeft: 20, paddingRight: 20, paddingTop: 10, paddingBottom: 10, borderBottomWidth: 1, borderBottomColor: '#222222' }}
            >
              <Image
                style={{ width: 55, height: 55, borderRadius: 4, marginRight: 15 }}
                source={{ uri: exercise.image }}
              />
              <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'white', flexGrow: 1 }}>
                { exercise.label }
              </Text>
            </TouchableOpacity>
          )) }
        </View>
      </ScrollView>
    );
  }
}
