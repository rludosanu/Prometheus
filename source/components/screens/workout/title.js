import React from 'react';
import { Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  text: {fontSize: 22, fontWeight: 'bold', color: 'white', marginBottom: 10}
});

export default function Title(props) {
  return (
    <Text style={styles.text}>
      {props.value}
    </Text>
  );
}
