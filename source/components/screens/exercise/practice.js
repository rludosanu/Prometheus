import React, { Component } from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Alert
} from 'react-native';
import { connect } from 'react-redux';
import SubmitButton from '../../uikit/submit-button';
import Feather from 'react-native-vector-icons/Feather';

const {width, height} = Dimensions.get('window');

function formatSeconds(value) {
  let seconds = ('0' + (Math.floor(value % 60))).slice(-2);
  let minutes = ('0' + (Math.floor(value / 60) % 60)).slice(-2);
  let hours = ('0' + Math.floor(value / 3600)).slice(-2);

  if (hours !== '00') {
    return `${ hours }:${ minutes }:${ seconds }`;
  } else {
    return `${ minutes }:${ seconds }`;
  }
}

function Feedback({ onResume, onFeedback }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', backgroundColor: '#161616' }}>
      <View style={{ flexGrow: 1, padding: 20, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ fontSize: 22, fontWeight: 'bold', color: 'white', textAlign: 'center', marginBottom: 60 }}>
          Nice job. You're done. Time to give your Coach feedback.
        </Text>
        <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'white', textAlign: 'center', marginBottom: 20 }}>
          Finished accidentally ?
        </Text>
        <TouchableOpacity
          onPress={ onResume }
          style={{ marginBottom: 20 }}
        >
          <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'white', borderWidth: 1, borderColor: 'white', borderRadius: 4, padding: 16 }}>
            Resume
          </Text>
        </TouchableOpacity>
      </View>
      <SubmitButton
        text={ 'Give Coach Feedback' }
        onPress={ onFeedback }
      />
    </View>
  );
}

function Stopwatch({ image, stopwatch, volume, label, onFinish }) {
  return (
    <ImageBackground
      source={{ uri: image }}
      style={{ width: '100%', height: '100%' }}
    >
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-end' }}>
        <Text style={{ fontSize: 90, color: 'white', marginBottom: 10 }}>
          { formatSeconds(stopwatch) }
        </Text>
        <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 5 }}>
          <Text style={{ fontSize: 34, fontWeight: 'bold', color: 'white' }}>
            { volume }
          </Text>
          <Feather
            name={ 'x' }
            style={{ fontSize: 18, color: 'white' }}
           />
        </View>
        <Text style={{ fontSize: 26, color: 'white', marginBottom: 30 }}>
          { label }
        </Text>
        <SubmitButton
          text={ 'Finish' }
          onPress={ onFinish }
        />
      </View>
    </ImageBackground>
  )
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

function Countdown({ countdown }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#161616' }}>
      <Text style={{ fontSize: 90, color: 'white', marginBottom: 10 }}>
        { countdown === 0 ? 'GO' : countdown }
      </Text>
    </View>
  );
}

export default connect(
  state => ({
    exercises: state.exercises
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
        stopwatch: 0,
        countdown: 5,
        screen: 'countdown'
      };
      this.handle = null;
    }

    componentDidMount() {
      this._startCountdown();
    }

    componentDidUpdate(prevProps, prevState) {
      if (prevState.countdown !== this.state.countdown && this.state.countdown === -1) {
        clearInterval(this.handle);
        this.setState({
          screen: 'stopwatch'
        });
        this._startStopwatch();
      }
    }

    componentWillUnmount() {
      this._stopStopwatch();
    }

    _startCountdown = () => {
      this.handle = setInterval(() => {
        this.setState(state => ({
          countdown: state.countdown - 1
        }));
      }, 1000);
    }

    _startStopwatch = () => {
      this.handle = setInterval(() => {
        this.setState(state => ({
          stopwatch: state.stopwatch + 1
        }));
      }, 1000);
    }

    _stopStopwatch = () => {
      clearInterval(this.handle);
      this.handle = null;
    }

    _finishExercise = () => {
      this._stopStopwatch();
      this.setState({
        screen: 'feedback'
      });
    }

    _resumeExercise = () => {
      this._startStopwatch();
      this.setState({
        screen: 'stopwatch'
      });
    }

    _giveFeedback = () => {
      this.props.navigation.navigate('ExerciseFeedback', {
        id: this.props.navigation.getParam('id'),
        volume: this.props.navigation.getParam('volume'),
        stopwatch: this.state.stopwatch,
      });
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
            onPress: this._goBack
          },
        ],
      );
    }

    _goBack = () => {
      this._stopStopwatch();
      this.props.navigation.goBack();
    }

    render() {
      const { exercises, navigation } = this.props;
      const { screen, stopwatch, countdown } = this.state;
      const id = navigation.getParam('id');
      const label = navigation.getParam('label');
      const volume = navigation.getParam('volume');
      const exercise = exercises[id];

      return (
        <View style={{ flex: 1 }}>
          <GoBackButton
            onGoBack={ this._giveUpExercise }
          />
          { screen === 'countdown' && (
            <Countdown
              countdown={ countdown }
            />
          ) }
          { screen === 'stopwatch' && (
            <Stopwatch
              image={ exercise.image }
              stopwatch={ stopwatch }
              volume={ volume }
              label={ label }
              onFinish={ this._finishExercise }
            />
          ) }
          { screen === 'feedback' && (
            <Feedback
              onResume={ this._resumeExercise }
              onFeedback={ this._giveFeedback }
            />
          ) }
        </View>
      );
    }
  }
);
