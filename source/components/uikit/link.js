import React from 'react';
import {
  Text,
  TouchableOpacity,
  StyleSheet
} from 'react-native';
import {colors} from './styles';

const styles = StyleSheet.create({
  link: {
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    color: colors.blue,
    textAlign: 'center'
  }
});

export default function({onPress, text}) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={styles.link}>
        {text}
      </Text>
    </TouchableOpacity>
  );
}
