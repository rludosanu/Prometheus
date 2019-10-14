import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  StyleSheet
} from 'react-native';

const { width } = Dimensions.get('window');
const styles = StyleSheet.create({
  button: {
    backgroundColor: '#007ACA',
    borderRadius: 4,
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
    width: width - 20,
    marginBottom: 10
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white'
  }
});

export default function SubmitButton({ text, onPress }) {
  return (
    <TouchableOpacity
      onPress={ onPress }
      style={ styles.button }
    >
      <Text style={ styles.text }>
        { text }
      </Text>
    </TouchableOpacity>
  );
}
