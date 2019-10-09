import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 40,
    backgroundColor: 'white',
  },
  appName: {
    fontSize: 30,
    marginBottom: 40,
    color: '#007ACA',
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#EBEBEB',
    color: '#7F7F7F',
    alignSelf: 'stretch',
    fontSize: 15,
    marginBottom: 15,
  },
  button: {
    backgroundColor: '#007ACA',
    borderRadius: 6,
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
    marginBottom: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 15,
  },
  error: {
    marginBottom: 10
  },
  errorText: {
    color: 'red',
    fontSize: 15
  },
  link: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  linkRegular: {
    fontSize: 15,
    color: '#7F7F7F',
    marginRight: 5,
  },
  linkBold: {
    fontSize: 15,
    color: '#007ACA',
  },
});
