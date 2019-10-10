import React, { Component } from 'react';
import { ScrollView, View, Text, TouchableOpacity } from 'react-native';
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
    componentDidUpdate(props) {
      if (props.user.token !== this.props.user.token && !this.props.user.token) {
        this.props.navigation.navigate('Auth');
      }
    }

    render() {
      const list = [{
        label: 'Global',
        menu: [{
          label: 'Online Sync',
          hint: 'Synchronize local data online.',
          action: () => {}
        }, {
          label: 'Log Out',
          hint: 'Log out from this account.',
          action: this.props.logOut
        }]
      }]

      return (
        <ScrollView>
          { list.map((itemA, indexA) => (
            <View key={ `keyA-${indexA}` }>
              <Text>{ itemA.label }</Text>
              { itemA.menu.map((itemB, indexB) => (
                <TouchableOpacity key={ `${indexA}-${indexB}` } onPress={ itemB.action }>
                  <Text>{ itemB.label }</Text>
                  <Text>{ itemB.hint }</Text>
                </TouchableOpacity>
              )) }
            </View>
          )) }
        </ScrollView>
      );
    }
  }
);
