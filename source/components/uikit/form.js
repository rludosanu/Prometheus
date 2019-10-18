import React, {Fragment} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ActivityIndicator,
  StyleSheet
} from 'react-native';
import {colors} from './styles';

const styles = StyleSheet.create({
  label: {
    fontFamily: 'Roboto-Regular',
    color: '#BDBCBA',
    fontSize: 16
  },
  input: {
    fontFamily: 'Roboto-Regular',
    borderBottomWidth: 1,
    borderBottomColor: '#BDBCBA',
    color: '#373737',
    alignSelf: 'stretch',
    fontSize: 16,
    marginBottom: 24,
    paddingLeft: 0,
    paddingRight: 0,
    paddingBottom: 10
  },
  button: {
    backgroundColor: colors.blue,
    borderRadius: 4,
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    marginBottom: 20
  },
  buttonText: {
    fontFamily: 'Roboto-Regular',
    color: 'white',
    fontSize: 16
  },
  error: {
    marginBottom: 10
  },
  errorText: {
    fontFamily: 'Roboto-Regular',
    color: 'red',
    fontSize: 15
  }
});

export default function({inputs, pending, error, submit}) {
  return (
    <Fragment>
      {inputs.map((input, index) => (
        <Fragment key={`form-input-${index}`}>
          <Text style={styles.label}>
            {input.label}
          </Text>
          <TextInput
            style={styles.input}
            placeholderTextColor={'#373737'}
            onChangeText={input.onChangeText}
            value={input.value}
            placeholder={input.placeholder}
            keyboardType={input.keyboardType || 'default'}
            secureTextEntry={input.secureTextEntry || false}
          />
        </Fragment>
      ))}
      {pending === true && (
        <View style={styles.error}>
          <ActivityIndicator />
        </View>
      )}
      {error !== null && (
        <View style={styles.error}>
          <Text style={styles.errorText}>
            {error}
          </Text>
        </View>
      )}
      <TouchableOpacity
        style={styles.button}
        onPress={submit.onPress}
      >
        <Text style={styles.buttonText}>
          {submit.label}
        </Text>
      </TouchableOpacity>
    </Fragment>
  );
}
