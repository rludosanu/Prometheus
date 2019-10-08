import React, {Component} from 'react';
import {View, ActivityIndicator, StyleSheet} from 'react-native';
import {connect} from 'react-redux';

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default connect(
  state => {
    return state;
  },
  dispatch => {
    return {
      loadSettings: payload =>
        dispatch({
          type: 'LOAD_SETTINGS',
        }),
    };
  },
)(
  class extends Component {
    componentDidMount() {
      this.props.loadSettings();
    }

    componentDidUpdate() {
      console.log(this.props.token);
      this.props.navigation.navigate(this.props.token ? 'App' : 'Auth');
    }

    render() {
      return (
        <View style={styles.screen}>
          <ActivityIndicator />
        </View>
      );
    }
  },
);
