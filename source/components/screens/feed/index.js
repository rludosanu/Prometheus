import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import styles from './styles';

export default class FeedScreen extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={ styles.screen }>
        <Text>FeedScreen</Text>
        <Button
          title={ 'Log Out' }
          onPress={ () => this.props.navigation.navigate('Auth') }
        />
      </View>
    );
  }
}
