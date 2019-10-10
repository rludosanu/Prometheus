import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderColor: '#EBEBEB',
    padding: 20
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerIcon: {
    fontSize: 36,
    color: '#007ACA',
    marginRight: 10
  },
  headerUserName: {
    color: '#161616',
    fontSize: 15,
    fontWeight: 'bold'
  },
  headerDate: {
    color: '#7F7F7F',
    fontSize: 13
  },
  log: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#EBEBEB',
    padding: 15,
    borderRadius: 6,
    marginTop: 20
  },
  logLabel: {
    color: '#161616',
    fontSize: 18,
    fontWeight: 'bold'
  },
  logChrono: {
    color: '#161616',
    fontSize: 18
  },
  comment: {
    marginTop: 10
  },
  commentText: {
    fontSize: 15,
    color: '#161616'
  },
  social: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20
  },
  socialIcon: {
    fontSize: 22,
    color: '#161616',
    marginRight: 5
  },
  socialStats: {
    fontSize: 15,
    color: '#161616',
    marginRight: 15
  },
});
