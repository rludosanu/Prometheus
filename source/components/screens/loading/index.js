import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { colors } from '../../uikit/styles';

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.black
  },
  name: {
    fontSize: 45,
    color: colors.white,
  }
});

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
          <Text style={ styles.name }>Prometheus</Text>
        </View>
      );
    }
  }
);
