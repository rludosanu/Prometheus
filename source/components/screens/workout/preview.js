import React, {Component, Fragment} from 'react';
import {
  ScrollView,
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import About from './about';
import Summary from './summary';
import Leaderboard from './leaderboard';

const videos = [
  'https://images.pexels.com/photos/2294354/pexels-photo-2294354.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
  'https://images.pexels.com/photos/2294355/pexels-photo-2294355.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
  'https://images.pexels.com/photos/2294353/pexels-photo-2294353.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
];
const equipment = [];
const workout = [
  [
    { exercise: 'Climbers', volume: 25, uri: 'https://images.pexels.com/photos/2294354/pexels-photo-2294354.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500' },
    { exercise: 'Situps', volume: 25, uri: 'https://images.pexels.com/photos/2294355/pexels-photo-2294355.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500' },
    { exercise: 'Squats', volume: 25, uri: 'https://images.pexels.com/photos/2294353/pexels-photo-2294353.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500' }
  ], [
    { exercise: 'Climbers', volume: 20, uri: 'https://images.pexels.com/photos/2294354/pexels-photo-2294354.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500' },
    { exercise: 'Situps', volume: 20, uri: 'https://images.pexels.com/photos/2294355/pexels-photo-2294355.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500' },
    { exercise: 'Squats', volume: 20, uri: 'https://images.pexels.com/photos/2294353/pexels-photo-2294353.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500' }
  ], [
    { exercise: 'Climbers', volume: 15, uri: 'https://images.pexels.com/photos/2294354/pexels-photo-2294354.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500' },
    { exercise: 'Situps', volume: 15, uri: 'https://images.pexels.com/photos/2294355/pexels-photo-2294355.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500' },
    { exercise: 'Squats', volume: 15, uri: 'https://images.pexels.com/photos/2294353/pexels-photo-2294353.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500' }
  ],
];
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

export default class WorkoutPreviewScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('title'),
      headerStyle: {
        backgroundColor: '#222222'
      },
      headerTintColor: 'white'
    };
  };

  componentDidMount() {
    const id = this.props.navigation.getParam('id', null);
  }

  render() {
    return (
      <ScrollView style={{ backgroundColor: '#161616' }}>
        <View style={{ padding: 20 }}>
          <About
            equipment={ equipment }
            videos={ videos }
          />
          <Summary
            value={ workout }
          />
          <Leaderboard
            value={ users }
          />
          <TouchableOpacity
            style={{ backgroundColor: '#007ACA', borderRadius: 6, alignSelf: 'stretch', alignItems: 'center', justifyContent: 'center', padding: 15, marginBottom: 20 }}
            onPress={ () => {} }
          >
            <Text style={{ color: 'white', fontSize: 15 }}>
              Start
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}
