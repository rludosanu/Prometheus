import React, {Fragment} from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const styles = StyleSheet.create({
  backButton: {
    color: '#373737',
    fontSize: 22,
    marginBottom: 20
  },
  title: {
    fontFamily: 'Roboto-Bold',
    color: '#373737',
    fontSize: 28,
    marginBottom: 60
  },
});

export default function Header({ onGoBack, title }) {
  return (
    <Fragment>
      <TouchableOpacity onPress={ onGoBack }>
        <Icon
          name={ 'long-arrow-alt-left' }
          style={ styles.backButton }
        />
      </TouchableOpacity>
      <Text style={ styles.title }>
        { title }
      </Text>
    </Fragment>
  );
}
