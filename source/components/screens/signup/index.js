import React, { Component } from 'react';
import { ScrollView, View, Alert } from 'react-native';
import { Header, Form, Popup } from '../../uikit';
import { connect } from 'react-redux';
import is from 'is_js';

export default connect(
  state => ({
    auth: state.auth
  }),
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
        email: '',
        password: '',
        confirmPassword: '',
        isModalVisible: false
      };
    }

    componentDidUpdate(prevProps) {
      if (
        prevProps.auth.status !== this.props.auth.status &&
        this.props.auth.status === 'SIGNED_UP'
      ) {
        this.setState({
          isModalVisible: true
        });
      }
    }

    signup = () => {
      const { email, password, confirmPassword } = this.state;
      let error;

      if (is.empty(email) || !is.email(email)) {
        error = 'Invalid email address';
      } else if (is.empty(password) || !is.alphaNumeric(password)) {
        error = 'Invalid password';
      } else if (is.empty(confirmPassword) || password !== confirmPassword) {
        error = 'Invalid password confirmation';
      } else {
        error = null;
      }
      if (error) {
        Alert.alert(error);
      } else {
        this.props.signup({ email, password });
      }
    }

    render() {
      const { pending, error } = this.props.auth.process;
      const { email, password, confirmPassword } = this.state;

      return (
        <ScrollView>
          <Popup
            title={ 'Thank you' }
            message={ 'You can now close this popup and log in to experience Prometheus.' }
            label={ 'DONE' }
            icon={ 'heart' }
            isVisible={ this.state.isModalVisible }
            onClose={ () => this.setState({ isModalVisible: false }) }
          />
          <View style={{ padding: 20 }}>
            <Header
              title={ 'Signup' }
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
                  },
                  {
                    label: 'Confirm Password',
                    onChangeText: text => this.setState({ confirmPassword: text }),
                    value: confirmPassword,
                    placeholder: 'Confirm your password',
                    secureTextEntry: true,
                  }
                ]
              }
              pending={ pending }
              error={ error }
              submit={
                {
                  label: 'Signup',
                  onPress: this.signup
                }
              }
            />
          </View>
        </ScrollView>
      );
    }
  }
);
