import React, { Component } from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  Dimensions
} from 'react-native';
import { connect } from 'react-redux';

const { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({
  screen: {
    backgroundColor: '#161616'
  },
  background: {
    width: width,
    height: height - 80
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: 20
  },
  stopwatch:{
    fontSize: 90,
    color: 'white',
    marginBottom: 10
  },
  volume: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginBottom: 5
  },
  volumeNumber: {
    fontSize: 34,
    fontWeight: 'bold',
    color: 'white'
  },
  volumeTimes: {
    fontSize: 24,
    color: 'white'
  },
  label: {
    fontSize: 32,
    color: 'white',
    marginBottom: 20
  },
  button: {
    backgroundColor: '#007ACA',
    borderRadius: 4,
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
    width: width - 20
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold'
  },
});

export default connect(
  state => ({
    exercises: state.exercises
  }),
  null
)(
  class extends Component {
    static navigationOptions = ({ navigation }) => {
      return {
        title: navigation.getParam('label'),
        headerStyle: {
          backgroundColor: '#222222'
        },
        headerTintColor: 'white'
      };
    };

    constructor(props) {
      super(props);
      this.state = {
        seconds: 0,
      };
      this.handle = null;
    }

    componentDidMount() {
      this.handle = setInterval(() => {
        this.setState(state => ({
          seconds: state.seconds + 1
        }));
      }, 1000);
    }

    componentWillUnmount() {
      clearInterval(this.handle);
      this.handle = null;
    }

    _formatTime = (value) => {
      let seconds = ('0' + (Math.floor(value % 60))).slice(-2);
      let minutes = ('0' + (Math.floor(value / 60) % 60)).slice(-2);
      let hours = ('0' + Math.floor(value / 3600)).slice(-2);

      if (hours !== '00') {
        return `${hours}:${minutes}:${seconds}`;
      } else {
        return `${minutes}:${seconds}`;
      }
    }

    render() {
      const { exercises, navigation } = this.props;
      const { seconds } = this.state;
      const id = navigation.getParam('id');
      const label = navigation.getParam('label');
      const volume = navigation.getParam('volume');
      const exercise = exercises[id];

      return (
        <View style={ styles.screen }>
          <ImageBackground
            source={{ uri: exercise.image }}
            style={ styles.background }
          >
            <View style={ styles.container }>
              <Text style={ styles.stopwatch }>
                { this._formatTime(seconds) }
              </Text>
              <View style={ styles.volume }>
                <Text style={ styles.volumeNumber }>
                  { volume }
                </Text>
                <Text style={ styles.volumeTimes }>
                  x
                </Text>
              </View>
              <Text style={ styles.label }>
                { label }
              </Text>
              <TouchableOpacity
                onPress={ () => this.props.navigation.navigate('ExerciseFeedback', { id, volume, seconds }) }
                style={ styles.button }
              >
                <Text style={ styles.buttonText }>
                  Finish
                </Text>
              </TouchableOpacity>
            </View>
          </ImageBackground>
        </View>
      );
    }
  }
);
