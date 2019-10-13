import React, {Component, Fragment} from 'react';
import {
  ScrollView,
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Dimensions
} from 'react-native';
import { connect } from 'react-redux';
import {
  getWorkoutVideos,
  getWorkoutEquipment
} from '../../../helpers/workout';
import WhatToKnow from './what-to-know';
import Summary from './summary';
import Leaderboard from './leaderboard';

const { width } = Dimensions.get('window');
const users = [{
  name: 'Razvan Ludosanu',
  color: '#007ACA',
  level: 38,
  date: '03/05/2019',
  chrono: '08:24'
}, {
  name: 'Guillaume Beuriot',
  color: '#007ACA',
  level: 45,
  date: '23/04/2019',
  chrono: '06:43'
}];

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#161616'
  },
  button: {
    backgroundColor: '#007ACA',
    borderRadius: 4,
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    position: 'absolute',
    zIndex: 999,
    bottom: 10,
    left: 10,
    width: width - 20
  },
  buttonText: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold'
  },
  container: {
    paddingTop: 10,
    paddingBottom: 60,
    paddingLeft: 20,
    paddingRight: 20
  }
});

export default connect(
  state => ({
    exercises: state.exercises,
    workouts: state.workouts,
    equipments: state.equipments
  }),
  null
)(
  class WorkoutPreviewScreen extends Component {
    static navigationOptions = ({ navigation }) => {
      return {
        title: navigation.getParam('label'),
        headerStyle: {
          backgroundColor: '#222222'
        },
        headerTintColor: 'white'
      };
    };

    render() {
      const { exercises, workouts, equipments } = this.props;
      const workoutId = this.props.navigation.getParam('id', null);
      const workout = workouts[workoutId];

      return (
        <View style={ styles.screen }>
          <TouchableOpacity
            style={ styles.button }
            onPress={ () => {} }
          >
            <Text style={ styles.buttonText }>Start</Text>
          </TouchableOpacity>

          <ScrollView>
            <View style={ styles.container }>
              <WhatToKnow
                videos={ getWorkoutVideos(workout, exercises) }
                equipments={ getWorkoutEquipment(workout, exercises, equipments) }
              />
              <Summary
                rounds={ workout.rounds }
                exercises={ exercises }
              />
              {/*<Leaderboard
                value={ users }
              />*/}
            </View>
          </ScrollView>
        </View>
      );
    }
  }
);
