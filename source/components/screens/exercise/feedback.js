import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Alert
} from 'react-native';
import {connect} from 'react-redux';
import Slider from '@react-native-community/slider';
import Feather from 'react-native-vector-icons/Feather';
import SubmitButton from '../../uikit/submit-button';

const { width, height } = Dimensions.get('window');

function pickFeedback(score) {
  if (score < 2.5) {
    return `Not great - I couldn't perform any repetitions with correct technique`;
  } else if (score >= 2.5 && score < 5) {
    return `OK - I couldn't perform all repetitions with correct technique`;
  } else if (score >= 5 && score < 7.5) {
    return `Great - I needed breaks but completed all repetitions with correct technique`;
  } else if (score > 7.5) {
    return `Excellent - I didn't need extra breaks and could perform all repetitions with correct technique`;
  }
}

function GoBackButton({ onGoBack }) {
  return (
    <TouchableOpacity
      onPress={ onGoBack }
      style={{ position: 'absolute', zIndex: 999, top: 20, left: 20 }}
    >
      <Feather
        name={ 'x' }
        style={{ fontSize: 24, color: 'white' }}
       />
    </TouchableOpacity>
  );
}

export default connect(
  state => ({
    exercises: state.exercises,
    workouts: state.workouts,
  }),
  dispatch => {
    return {
      addLog: (payload) => dispatch({ type: 'ADD_LOG', payload })
    };
  }
)(
  class extends Component {
    static navigationOptions = {
      header: null
    };

    constructor(props) {
      super(props);
      this.state = {
        score: 0,
      };
    }

    _giveUpExercise = () => {
      Alert.alert(
        'Giving up is not an option',
        'Are you sure you want to cancel this session ?',
        [
          {
            text: 'No',
            onPress: () => {},
          },
          {
            text: 'Yes',
            onPress: () => this.props.navigation.navigate('ExercisesList')
          },
        ],
      );
    }

    _saveFeedback = () => {
      this.props.addLog({
        ...this.props.navigation.state.params,
        ...this.state
      });
      this.props.navigation.navigate('Home');
    }

    render() {
      return (
        <View style={{ flex: 1 }}>
          <GoBackButton
            onGoBack={ this._giveUpExercise }
          />
          <View style={{ flex: 1, alignItems: 'center', backgroundColor: '#161616' }}>
            <View style={{ flexGrow: 1, padding: 20, alignItems: 'center', justifyContent: 'center' }}>
              <Text style={{ fontSize: 18, fontWeight: 'bold', fontStyle: 'italic', color: 'white', textTransform: 'uppercase', marginBottom: 60 }}>
                How was your technique ?
              </Text>
              <Text style={{ fontSize: 15, color: 'white', textAlign: 'center' }}>
                { pickFeedback(this.state.score) }
              </Text>
              <Slider
                style={{ width: width - 40, height: 100 }}
                minimumValue={ 0 }
                maximumValue={ 10 }
                minimumTrackTintColor={ '#007ACA' }
                maximumTrackTintColor={ 'white' }
                thumbTintColor={ 'white' }
                onSlidingComplete={ (value) => this.setState({ score: value }) }
              />
            </View>
            <SubmitButton
              text={ 'Save Feedback' }
              onPress={ this._saveFeedback }
            />
          </View>
        </View>
      );
    }
  }
);
