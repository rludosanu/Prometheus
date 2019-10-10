import React from 'react';
import {
  View,
  Text,
  TouchableWithoutFeedback,
  ImageBackground,
  Dimensions,
  StyleSheet
} from 'react-native';

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    borderTopWidth: 10,
    borderTopColor: '#161616'
  },
  background: {
    width: width,
    height: 190
  },
  body: {
    padding: 20
  },
  label: {
    fontSize: 25,
    color: 'white',
    fontWeight: 'bold',
    width: (width / 2),
    marginBottom: 4
  },
  description: {
    fontSize: 15,
    color: '#EBEBEB',
    fontWeight: 'bold',
    width: (width / 2)
  }
});

export default function Card(props) {
  return (
    <TouchableWithoutFeedback onPress={props.onPress}>
      <View style={styles.container}>
        <ImageBackground
          source={{uri: props.background}}
          style={styles.background}
        >
          <View style={styles.body}>
            <Text style={styles.label}>
              {props.label}
            </Text>
            <Text style={styles.description}>
              {props.description}
            </Text>
          </View>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
}
