import React, {Component} from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Alert
} from 'react-native';
import {connect} from 'react-redux';
import SubmitButton from '../../uikit/submit-button';
import Feather from 'react-native-vector-icons/Feather';

const {width, height} = Dimensions.get('window');

function formatSeconds(value) {
  let seconds = ('0' + (Math.floor(value % 60))).slice(-2);
  let minutes = ('0' + (Math.floor(value / 60) % 60)).slice(-2);
  let hours = ('0' + Math.floor(value / 3600)).slice(-2);

  if (hours !== '00') {
    return `${hours}:${minutes}:${seconds}`;
  } else {
    return `${minutes}:${seconds}`;
  }
}

function Feedback({onResume, onFeedback}) {
  return (
    <View style={{flex: 1, alignItems: 'center', backgroundColor: '#161616'}}>
      <View style={{flexGrow: 1, padding: 20, alignItems: 'center', justifyContent: 'center'}}>
        <Text style={{fontSize: 22, fontWeight: 'bold', color: 'white', textAlign: 'center', marginBottom: 60}}>
          Nice job. You're done. Time to give your Coach feedback.
        </Text>
        <Text style={{fontSize: 16, fontWeight: 'bold', color: 'white', textAlign: 'center', marginBottom: 20}}>
          Finished accidentally ?
        </Text>
        <TouchableOpacity
          onPress={onResume}
          style={{marginBottom: 20}}
        >
          <Text style={{fontSize: 16, fontWeight: 'bold', color: 'white', borderWidth: 1, borderColor: 'white', borderRadius: 4, padding: 16}}>
            Resume
          </Text>
        </TouchableOpacity>
      </View>
      <SubmitButton
        text={'Give Coach Feedback'}
        onPress={onFeedback}
      />
    </View>
  );
}

function Practice({image, chrono, volume, label, onFinish}) {
  return (
    <ImageBackground
      source={{uri: image}}
      style={{width: '100%', height: '100%'}}
    >
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'flex-end'}}>
        <Text style={{fontSize: 90, color: 'white', marginBottom: 10}}>
          {formatSeconds(chrono)}
        </Text>
        <View style={{flexDirection: 'row', alignItems: 'flex-end', marginBottom: 5}}>
          <Text style={{fontSize: 34, fontWeight: 'bold', color: 'white'}}>
            {volume}
          </Text>
          <Text style={{fontSize: 24, color: 'white'}}>
            x
          </Text>
        </View>
        <Text style={{fontSize: 32, color: 'white', marginBottom: 20}}>
          {label}
        </Text>
        <SubmitButton
          text={'Finish'}
          onPress={onFinish}
        />
      </View>
    </ImageBackground>
  )
}

function GoBackButton({onGoBack}) {
  return (
    <TouchableOpacity
      onPress={onGoBack}
      style={{position: 'absolute', zIndex: 999, top: 20, left: 20}}
    >
      <Feather
        name={'x'}
        style={{fontSize: 24, color: 'white'}}
       />
    </TouchableOpacity>
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
        chrono: 0,
        screen: 'practice'
      };
      this.handle = null;
    }

    componentDidMount() {
      this._startChrono();
    }

    componentWillUnmount() {
      this._stopChrono();
    }

    _startChrono = () => {
      this.handle = setInterval(() => {
        this.setState(state => ({
          chrono: state.chrono + 1
        }));
      }, 1000);
    }

    _stopChrono = () => {
      clearInterval(this.handle);
      this.handle = null;
    }

    _finish = () => {
      this._stopChrono();
      this.setState({
        screen: 'feedback'
      });
    }

    _resume = () => {
      this._startChrono();
      this.setState({
        screen: 'practice'
      });
    }

    _feedback = () => {
      this.props.navigation.navigate('ExerciseFeedback', {
        id: this.props.navigation.getParam('id'),
        volume: this.props.navigation.getParam('volume'),
        chrono: this.state.chrono,
      });
    }

    _giveUp = () => {
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
      this._stopChrono();
      this.props.navigation.goBack();
    }

    render() {
      const {exercises, navigation} = this.props;
      const {screen, chrono} = this.state;
      const id = navigation.getParam('id');
      const label = navigation.getParam('label');
      const volume = navigation.getParam('volume');
      const exercise = exercises[id];

      return (
        <View style={{flex: 1}}>
          <GoBackButton
            onGoBack={this._giveUp}
          />
          {screen === 'practice' ? (
            <Practice
              image={exercise.image}
              chrono={chrono}
              volume={volume}
              label={label}
              onFinish={this._finish}
            />
            ) : (
            <Feedback
              onResume={this._resume}
              onFeedback={this._feedback}
            />
          )}
        </View>
      );
    }
  }
);
