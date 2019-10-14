import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions
} from 'react-native';
import { connect } from 'react-redux';

const { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({
  screen: {
    backgroundColor: '#161616',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
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
    exercises: state.exercises,
    workouts: state.workouts,
  }),
  null
)(
  class extends Component {
    static navigationOptions = ({ navigation }) => {
      return {
        title: 'Summary',
        headerStyle: {
          backgroundColor: '#222222'
        },
        headerTintColor: 'white'
      };
    };

    render() {
      console.log(this.props.navigation.state.params);
      return (
        <View style={ styles.screen }>
          <Text style={ styles.title }>Exercise Digest</Text>
          <TouchableOpacity
            onPress={ () => this.props.navigation.navigate('ExercisesList') }
            style={ styles.button }
          >
            <Text style={ styles.buttonText }>
              Go to exercises
            </Text>
          </TouchableOpacity>
        </View>
      );
    }
  }
);
