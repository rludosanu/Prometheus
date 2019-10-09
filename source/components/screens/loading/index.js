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
      loadSettings: payload => dispatch({
        type: 'LOAD_SETTINGS'
      })
    };
  }
)(
  class extends Component {
    componentDidMount() {
      this.props.loadSettings();
    }

    componentDidUpdate() {
      this.props.navigation.navigate(this.props.token ? 'App' : 'Auth');
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
