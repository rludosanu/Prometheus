import React, {Component} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default class FeedScreen extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.screen}>
        <Text>FeedScreen</Text>
        <Button
          title={'Log Out'}
          onPress={() => this.props.navigation.navigate('Auth')}
        />
      </View>
    );
  }
}
