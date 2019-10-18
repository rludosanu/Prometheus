import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/FontAwesome5';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  body: {
    backgroundColor: 'white',
    borderRadius: 4,
    padding: 40,
    alignItems: 'center',
    justifyContent: 'center'
  },
  icon: {
    fontSize: 60,
    marginBottom: 20,
    color: '#357df4'
  },
  title: {
    fontFamily: 'Roboto-Black',
    fontSize: 28,
    marginBottom: 20,
    textAlign: 'center'
  },
  message: {
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    color: '#222222',
    textAlign: 'center',
    marginBottom: 40
  },
  button: {
    backgroundColor: '#357df4',
    borderRadius: 4,
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16
  },
  buttonText: {
    fontFamily: 'Roboto-Regular',
    color: 'white',
    fontSize: 16
  }
});

export default function({ title, message, label, icon, isVisible, onClose }) {
  return (
    <Modal
      isVisible={ isVisible }
      coverScreen={ true }
    >
      <View style={ styles.container }>
        <View style={ styles.body }>
          <Icon
            name={ icon }
            style={ styles.icon }
          />
          <Text style={ styles.title }>
            { title }
          </Text>
          <Text style={ styles.message }>
            { message }
          </Text>
          <TouchableOpacity
            onPress={ onClose }
            style={ styles.button }
          >
            <Text style={ styles.buttonText }>
              { label }
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}
