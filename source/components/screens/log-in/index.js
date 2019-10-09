import React, {Component} from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import { connect } from 'react-redux';
import styles from './styles';

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

    componentDidMount() {
      //
    }

    componentDidUpdate() {
      this.setState({
        isLoading: false
      });
    }

    _logIn = () => {
      const { email, password } = this.state;

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
            onPress={ () => this.props.logIn({ email, password }) }
          >
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
