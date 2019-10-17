import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
  StyleSheet,
  Image
} from 'react-native';
import { colors } from '../../uikit/styles';

const { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  moto: {
    fontFamily: 'Roboto-Black',
    fontSize: 40,
    color: 'white',
    textTransform: 'uppercase',
    textAlign: 'center',
    marginBottom: 30
  },
  button: {
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    width: width / 2
  },
  buttonText: {
    fontFamily: 'Roboto-Regular',
    color: 'white',
    fontSize: 16
  }
});

function Button({ onPress, style, label }) {
  return (
    <TouchableOpacity
      onPress={ onPress }
      style={ [styles.button, style] }
    >
      <Text style={ styles.buttonText }>
        { label }
      </Text>
    </TouchableOpacity>
  );
}

export default class OnboardingScreen extends Component {
  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <ImageBackground
        source={{ uri: 'https://images.pexels.com/photos/136405/pexels-photo-136405.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260' }}
        style={ styles.background }
      >
        <View>
          <Text style={ styles.moto }>
            Become a free athlete
          </Text>
          <View style={{ flexDirection: 'row' }}>
            <Button
              onPress={ () => this.props.navigation.navigate('Signup') }
              style={{ backgroundColor: colors.blue }}
              label={ 'Start now' }
            />
            <Button
              onPress={ () => this.props.navigation.navigate('Login') }
              style={{ backgroundColor: '#222222' }}
              label={ 'Login' }
            />
          </View>
        </View>
      </ImageBackground>
    );
  }
}
