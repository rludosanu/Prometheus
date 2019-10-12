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
    fontSize: 26,
    color: 'white',
    fontWeight: 'bold',
    marginBottom: -2
  },
  description: {
    marginTop: 6,
    fontSize: 16,
    color: '#EBEBEB',
    fontWeight: 'bold',
    width: (width / 2) - 40
  }
});

export default function Card(props) {
  return (
    <TouchableWithoutFeedback onPress={ props.onPress }>
      <View style={ styles.container }>
        <ImageBackground
          source={{ uri: props.background }}
          style={ styles.background }
        >
          <View style={ styles.body }>
            { props.label.map((item, index) => (
              <Text key={ index } style={ styles.label }>
                { item }
              </Text>
            )) }
            <Text style={ styles.description }>
              { props.description }
            </Text>
          </View>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
}
