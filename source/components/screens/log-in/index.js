import React, {Component} from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import { connect } from 'react-redux';

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 40,
    backgroundColor: 'white',
  },
  appName: {
    fontSize: 30,
    marginBottom: 40,
    color: '#007ACA',
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#EBEBEB',
    color: '#7F7F7F',
    alignSelf: 'stretch',
    fontSize: 15,
    marginBottom: 15,
  },
  button: {
    backgroundColor: '#007ACA',
    borderRadius: 6,
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
    marginBottom: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 15,
  },
  error: {
    marginBottom: 10
  },
  errorText: {
    color: 'red',
    fontSize: 15
  },
  link: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  linkRegular: {
    fontSize: 15,
    color: '#7F7F7F',
    marginRight: 5,
  },
  linkBold: {
    fontSize: 15,
    color: '#007ACA',
  },
});

export default connect(
  state => {
    return state;
  },
  dispatch => {
    return {
      logIn: payload => dispatch({
        type: 'LOG_IN',
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
        isLoading: false
      };
    }

    componentDidUpdate() {
      console.log(this.props.error);
    }

    _logIn = () => {
      const { email, password, isLoading } = this.state;

      this.setState({
        isLoading: true
      }, () => {
        this.props.logIn({ email, password });
      });
    }

    render() {
      const { error } = this.props;
      const { email, password, isLoading } = this.state;

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
          { error !== null && error.length && (
            <View style={ styles.error }>
              <Text style={ styles.errorText }>{ error }</Text>
            </View>
          ) }
          <TouchableOpacity
            style={ styles.button }
            onPress={ () => this.props.logIn({ email, password }) }>
            <Text style={ styles.buttonText }>Log In</Text>
          </TouchableOpacity>
          <View style={ styles.link }>
            <Text style={ styles.linkRegular }>Don’t have an account ?</Text>
            <Text style={ styles.linkBold }>Sign up.</Text>
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
