import React, { Component } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import styles from './styles';

export default connect(
  state => {
    return state;
  },
  dispatch => {
    return {
      autoLogIn: () => dispatch({
        type: 'AUTO_LOGIN_REQUEST'
      })
    };
  }
)(
  class extends Component {
    componentDidMount() {
      this.props.autoLogIn();
    }

    componentDidUpdate(props) {
      if (!this.props.user.isLoading) {
        if (props.user.token !== this.props.user.token && this.props.user.token) {
          this.props.navigation.navigate('App');
        } else {
          this.props.navigation.navigate('Auth');
        }
      }
    }

    render() {
      return (
        <View style={ styles.screen }>
          <ActivityIndicator />
        </View>
      );
    }
  }
);
