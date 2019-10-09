import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { connect } from 'react-redux';
import styles from './styles';

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

    componentDidUpdate(props) {
      if (props.user.token !== this.props.user.token && !this.props.user.token) {
        this.props.navigation.navigate('Auth');
      }
    }

    render() {
      return (
        <View style={ styles.screen }>
          <Text>FeedScreen</Text>
          <Button
            title={ 'Log Out' }
            onPress={ this.props.logOut }
          />
        </View>
      );
    }
  }
);
