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
      resetPassword: payload => dispatch({
        type: 'RESET_PASSWORD_REQUEST',
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
      };
    }

    componentDidUpdate(prevProps) {
      if (
        prevProps.auth.status !== this.props.auth.status &&
        this.props.auth.status === 'RESET_PASSWORD_EMAIL_SENT'
      ) {
        this.setState({
          isModalVisible: true
        });
      }
    }

    resetPassword = () => {
      const { email } = this.state;
      let error;

      if (is.empty(email) || !is.email(email)) {
        error = 'Invalid email address';
      } else {
        error = null;
      }
      if (error) {
        Alert.alert(error);
      } else {
        this.props.resetPassword({ email });
      }
    }

    render() {
      const { pending, error } = this.props.auth.process;
      const { email } = this.state;

      return (
        <ScrollView>
          <Popup
            title={ 'Done !' }
            message={ 'An email to reset your password is on the way, check your mailbox.' }
            label={ 'OK' }
            icon={ 'paper-plane' }
            isVisible={ this.state.isModalVisible }
            onClose={ () => this.setState({ isModalVisible: false }) }
          />
          <View style={{ padding: 20 }}>
            <Header
              title={ 'Reset Password' }
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
                  }
                ]
              }
              pending={ pending }
              error={ error }
              submit={
                {
                  label: 'Reset Password',
                  onPress: this.resetPassword
                }
              }
            />
          </View>
        </ScrollView>
      );
    }
  }
);
