import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import styles from './styles';

/**
 * Feed Screen
 */
export default connect(
  state => {
    return state;
  },
  dispatch => {
    return {
      logOut: () => dispatch({ type: 'LOGOUT_REQUEST' })
    }
  }
)(
  class extends Component {
    static navigationOptions = {
      header: null,
    };

    constructor(props) {
      super(props);
      this.state = {
        search: ''
      };
    }

    componentDidUpdate(props) {
      if (props.user.token !== this.props.user.token && !this.props.user.token) {
        this.props.navigation.navigate('Auth');
      }
    }

    render() {
      return (
        <View style={ styles.screen }>
          <TouchableOpacity
            style={{ padding: 20, backgroundColor: '#007ACA' }}
            onPress={ () => this.props.navigation.navigate('Settings') }
          >
            <Text style={{ color: 'white' }}>Settings</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ padding: 20, backgroundColor: '#007ACA' }}
            onPress={ this.props.logOut }
          >
            <Text style={{ color: 'white' }}>Log Out</Text>
          </TouchableOpacity>
        </View>
      );
    }
  }
);
