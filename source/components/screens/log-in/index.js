import React, {Component} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
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
      logIn: payload =>
        dispatch({
          type: 'LOG_IN',
          ...payload,
        }),
    };
  },
)(
  class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        email: 'hello@world.com',
        password: 'helloworld',
      };
    }

    componentDidUpdate() {
      const {token = null} = this.props;
      const verified = this._verifyToken(token);

      if (verified) {
        this.props.navigation.navigate('App');
      }
    }

    _verifyToken = token => {
      return token && token === 'helloworld' ? true : false;
    };

    render() {
      const {email, password} = this.state;

      return (
        <View style={styles.screen}>
          <Text>LogInScreen</Text>
          <Button
            title={'Log In'}
            onPress={() => this.props.logIn({email, password})}
          />
        </View>
      );
    }
  },
);
