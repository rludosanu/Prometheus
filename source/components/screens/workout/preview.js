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
import About from './about';
import Summary from './summary';
import Leaderboard from './leaderboard';

const { width } = Dimensions.get('window');

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

function StartButton(props) {
  const css = {
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
    text: {
      color: 'white',
      fontSize: 15,
      fontWeight: 'bold'
    }
  };

  return (
    <TouchableOpacity style={ css.button } onPress={ () => {} }>
      <Text style={ css.text }>
        Start
      </Text>
    </TouchableOpacity>
  );
}

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
    const css = {
      wrapper: {
        flex: 1,
        backgroundColor: '#161616'
      },
      container: {
        paddingTop: 10,
        paddingBottom: 60,
        paddingLeft: 20,
        paddingRight: 20
      }
    }

    return (
      <View style={ css.wrapper }>
        <StartButton />
        <ScrollView>
          <View style={ css.container }>
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
          </View>
        </ScrollView>
      </View>
    );
  }
}
