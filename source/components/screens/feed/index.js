import React, { Component } from 'react';
import {
  ScrollView,
  View,
  Text,
  StyleSheet
} from 'react-native';
import { connect } from 'react-redux';
import Feather from 'react-native-vector-icons/Feather';

const styles = StyleSheet.create({
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
    borderRadius: 4,
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

const logs = [{
  username: 'Razvan Ludosanu',
  date: '2d',
  label: '10x Burpee Squat Jumps',
  chrono: '00:45',
  comment: 'What a great way to start the week !',
}];

export default connect(
  state => state,
  null
)(
  class extends Component {
    render() {
      return (
        <ScrollView style={{ backgroundColor: 'white' }}>
          { logs.map((log, index) => (
            <View key={index} style={ styles.container }>
              <View style={ styles.header }>
                <Feather style={ styles.headerIcon } name={ 'hexagon' } />
                <View>
                  <Text style={ styles.headerUserName }>{ log.username }</Text>
                  <Text style={ styles.headerDate }>{ log.date }</Text>
                </View>
              </View>
              <View style={ styles.log }>
                <Text style={ styles.logLabel }>{ log.label }</Text>
                <Text style={ styles.logChrono }>{ log.chrono }</Text>
              </View>
              { log.comment !== null && log.comment.length > 0 && (
                <View style={ styles.comment }>
                  <Text style={ styles.commentText }>{ log.comment }</Text>
                </View>
              ) }
              <View style={ styles.social }>
                <Feather style={ styles.socialIcon } name={ 'heart' } />
                <Text style={ styles.socialStats }>1.5K</Text>
                <Feather style={ styles.socialIcon } name={ 'message-circle' } />
                <Text style={ styles.socialStats }>296</Text>
              </View>
            </View>
          )) }
        </ScrollView>
      );
    }
  }
);
