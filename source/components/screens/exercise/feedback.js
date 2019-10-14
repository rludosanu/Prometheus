import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions
} from 'react-native';
import { connect } from 'react-redux';
import Slider from '@react-native-community/slider';

const { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({
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
const FEEDBACKS = {
  'NOT_GREAT': `Not great ! I couldn't perform any repetitions with correct technique`,
  'OK': `OK ! I couldn't perform all repetitions with correct technique`,
  'GREAT': `Great ! I needed breaks but completed all repetitions with correct technique`,
  'EXCELLENT': `Excellent ! I didn't need extra breaks and could perform all repetitions with correct technique`,
};

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

    constructor(props) {
      super(props);
      this.state = {
        technique: 0,
      };
    }

    _feedback = () => {
      this.props.navigation.navigate('ExerciseSummary', {
        ...this.props.navigation.state.params,
        ...this.state
      });
    }

    render() {
      const { technique } = this.state;
      let feedback;

      if (technique < 25) {
        feedback = FEEDBACKS.NOT_GREAT;
      } else if (technique >= 25 && technique < 50) {
        feedback = FEEDBACKS.OK;
      } else if (technique >= 50 && technique < 75) {
        feedback = FEEDBACKS.GREAT;
      } else if (technique > 75) {
        feedback = FEEDBACKS.EXCELLENT;
      }
      return (
        <View style={{ flex: 1, alignItems: 'center', backgroundColor: '#161616', padding: 20 }}>
          <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'white' }}>
            How was your technique ?
          </Text>
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ fontSize: 15, color: 'white', textAlign: 'center' }}>
              { feedback }
            </Text>
            <Slider
              style={{ width: 400, height: 60 }}
              minimumValue={ 0 }
              maximumValue={ 100 }
              minimumTrackTintColor={ '#007ACA' }
              maximumTrackTintColor={ '#FFFFFF' }
              onSlidingComplete={ (value) => this.setState({ technique: value }) }
            />
          </View>
          <TouchableOpacity
            onPress={ this._feedback }
            style={ styles.button }
          >
            <Text style={ styles.buttonText }>
              Continue
            </Text>
          </TouchableOpacity>
        </View>
      );
    }
  }
);
