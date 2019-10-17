import React, { Component, Fragment } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ActivityIndicator,
  StyleSheet
} from 'react-native';
import { connect } from 'react-redux';
import { colors } from '../../uikit/styles';
import Icon from 'react-native-vector-icons/FontAwesome5';

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white'
  },
  backButton: {
    color: '#373737',
    fontSize: 22,
    marginBottom: 20
  },
  title: {
    fontFamily: 'Roboto-Bold',
    color: '#373737',
    fontSize: 28,
    marginBottom: 60
  },
  placeholder: {
    fontFamily: 'Roboto-Regular',
    color: '#BDBCBA',
    fontSize: 16
  },
  input: {
    fontFamily: 'Roboto-Regular',
    borderBottomWidth: 1,
    borderBottomColor: '#BDBCBA',
    color: '#373737',
    alignSelf: 'stretch',
    fontSize: 16,
    marginBottom: 24,
    paddingLeft: 0,
    paddingRight: 0,
    paddingBottom: 10
  },
  button: {
    backgroundColor: colors.blue,
    borderRadius: 4,
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    marginBottom: 20
  },
  buttonText: {
    fontFamily: 'Roboto-Regular',
    color: 'white',
    fontSize: 16
  },
  error: {
    marginBottom: 10
  },
  errorText: {
    fontFamily: 'Roboto-Regular',
    color: 'red',
    fontSize: 15
  },
  link: {
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    color: colors.blue,
    textAlign: 'center'
  }
});

export default connect(
  state => {
    return state;
  },
  dispatch => {
    return {
      login: payload => dispatch({ type: 'LOGIN_REQUEST', ...payload })
    };
  }
)(
  class extends Component {
    static navigationOptions = {
      header: null,
    };

    constructor(props) {
      super(props);
      this.state = {
        email: '',
        password: ''
      };
    }

    componentDidUpdate(props) {
      if (props.user.token !== this.props.user.token && this.props.user.token) {
        this.props.navigation.navigate('App');
      }
    }

    render() {
      const { error, isLoading } = this.props.user;
      const { email, password } = this.state;

      return (
        <View style={ styles.screen }>
          <TouchableOpacity onPress={ () => this.props.navigation.goBack() }>
            <Icon
              name={ 'long-arrow-alt-left' }
              style={ styles.backButton }
            />
          </TouchableOpacity>
          <Text style={ styles.title }>Login</Text>
          <Text style={ styles.placeholder }>Email</Text>
          <TextInput
            style={ styles.input }
            placeholderTextColor={ '#373737' }
            onChangeText={ text => this.setState({ email: text }) }
            value={ email }
            placeholder={ 'Your email address' }
            keyboardType={ 'email-address' }
          />
          <Text style={ styles.placeholder }>Password</Text>
          <TextInput
            style={ styles.input }
            placeholderTextColor={ '#373737' }
            onChangeText={ text => this.setState({ password: text }) }
            value={ password }
            placeholder={ 'Your password' }
            secureTextEntry={ true }
          />
          { isLoading === true && (
            <View style={ styles.error }>
              <ActivityIndicator />
            </View>
          ) }
          { error !== null && (
            <View style={ styles.error }>
              <Text style={ styles.errorText }>{ error }</Text>
            </View>
          ) }
          <TouchableOpacity
            style={ styles.button }
            onPress={ () => this.props.login({ email, password }) }
          >
            <Text style={ styles.buttonText }>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={ () => {} }>
            <Text style={ styles.link }>
              Forgot your password ?
            </Text>
          </TouchableOpacity>
        </View>
      );
    }
  }
);
