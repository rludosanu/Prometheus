import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TextInput, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';

export default connect(
  state => {
    return state;
  },
  dispatch => {
    return {
      signup: payload => dispatch({
        type: 'SIGNUP_REQUEST',
        ...payload
      })
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
        email: 'razvan@prometheus.com',
        password: 'helloworld',
        confirmPassword: 'helloworld'
      };
    }

    componentDidUpdate(props) {
      if (props.user.token !== this.props.user.token && this.props.user.token) {
        this.props.navigation.navigate('App');
      }
    }

    _signup = () => {
      this.props.logIn(this.state);
    }

    render() {
      const { error, isLoading } = this.props.user;
      const { email, password, confirmPassword } = this.state;

      return (
        <View style={ styles.screen }>
          <Text style={ styles.appName }>Prometheus</Text>
          <TextInput
            style={ styles.input }
            placeholderTextColor={ '#809c9a' }
            onChangeText={ text => this.setState({ email: text }) }
            placeholder={ 'Email address' }
            value={ email }
            keyboardType={ 'email-address' }
          />
          <TextInput
            style={ styles.input }
            placeholderTextColor={ '#809c9a' }
            onChangeText={ text => this.setState({ password: text }) }
            placeholder={ 'Password' }
            value={ password }
            secureTextEntry={ true }
          />
          <TextInput
            style={ styles.input }
            placeholderTextColor={ '#809c9a' }
            onChangeText={ text => this.setState({ confirmPassword: text }) }
            placeholder={ 'Confirm password' }
            value={ confirmPassword }
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
            onPress={ this._signup }
          >
            <Text style={ styles.buttonText }>Sign Up</Text>
          </TouchableOpacity>
          <View style={ styles.link }>
            <Text style={ styles.linkRegular }>Already have an account ?</Text>
            <Text style={ styles.linkBold }>Log In.</Text>
          </View>
          <View style={ styles.link}>
            <Text style={ styles.linkRegular }>Lost password ?</Text>
            <Text style={ styles.linkBold }>Reset.</Text>
          </View>
        </View>
      );
    }
  }
);
