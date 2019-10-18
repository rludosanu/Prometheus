import React, { Component } from 'react';
import { ScrollView, View, Alert } from 'react-native';
import { Header, Form, Link } from '../../uikit';
import { connect } from 'react-redux';
import is from 'is_js';

export default connect(
  state => ({
    auth: state.auth
  }),
  dispatch => {
    return {
      login: payload => dispatch({
        type: 'LOGIN_REQUEST',
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
        password: 'helloworld'
      };
    }

    componentDidUpdate(prevProps) {
      if (
        prevProps.auth.status !== this.props.auth.status &&
        this.props.auth.status === 'LOGGED_IN'
      ) {
        this.props.navigation.navigate('App');
      }
    }

    login = () => {
      const { email, password } = this.state;
      let error;

      if (is.empty(email) || !is.email(email)) {
        error = 'Invalid email address';
      } else if (is.empty(password) || !is.alphaNumeric(password)) {
        error = 'Invalid password';
      } else {
        error = null;
      }
      if (error) {
        Alert.alert(error);
      } else {
        this.props.login({ email, password });
      }
    }

    render() {
      const { pending, error } = this.props.auth.process;
      const { email, password } = this.state;

      return (
        <ScrollView>
          <View style={{ padding: 20 }}>
            <Header
              title={ 'Login' }
              onGoBack={ () => this.props.navigation.goBack() }
            />
            <Form
              inputs={
                [
                  {
                    label: 'Email',
                    onChangeText: text => this.setState({ email: text }),
                    value: email,
                    placeholder: 'Your email address',
                    keyboardType: 'email-address',
                  },
                  {
                    label: 'Password',
                    onChangeText: text => this.setState({ password: text }),
                    value: password,
                    placeholder: 'Your password',
                    secureTextEntry: true,
                  }
                ]
              }
              pending={ pending }
              error={ error }
              submit={
                {
                  label: 'Login',
                  onPress: this.login
                }
              }
            />
            <Link
              text={ 'Forgot your password ?' }
              onPress={ () => this.props.navigation.navigate('ResetPassword') }
            />
          </View>
        </ScrollView>
      );
    }
  }
);
