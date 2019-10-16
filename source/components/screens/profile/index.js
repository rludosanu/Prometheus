import React, { Component } from 'react';
import {
  ScrollView,
  View,
  Text,
  Image,
  Dimensions,
  StyleSheet
} from 'react-native';
import { connect } from 'react-redux';
import moment from 'moment';
import Feather from 'react-native-vector-icons/Feather';
import { getUserLevel } from '../../../helpers/user';

function formatSeconds(value) {
  let seconds = ('0' + (Math.floor(value % 60))).slice(-2);
  let minutes = ('0' + (Math.floor(value / 60) % 60)).slice(-2);
  let hours = ('0' + Math.floor(value / 3600)).slice(-2);

  if (hours !== '00') {
    return `${ hours }:${ minutes }:${ seconds }`;
  } else {
    return `${ minutes }:${ seconds }`;
  }
}

const { width, height } = Dimensions.get('window');

const stylesLog = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    marginBottom: 8,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 20,
    paddingLeft: 20,
    paddingRight: 20,
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
    marginTop: 20,
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
  social: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    paddingBottom: 20,
    paddingLeft: 20,
    paddingRight: 20,
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

function Log({ username, timestamp, date, label, duration, volume, claps }) {
  return (
    <View style={ stylesLog.container }>
      <View style={ stylesLog.header }>
        <Feather style={ stylesLog.headerIcon } name={ 'hexagon' } />
        <View>
          <Text style={ stylesLog.headerUserName }>{ username }</Text>
          <Text style={ stylesLog.headerDate }>{ moment(timestamp, 'x').format('DD/MM/YYYY') }</Text>
        </View>
      </View>

      <View style={{ paddingLeft: 20, paddingRight: 20 }}>
        <View style={ stylesLog.log }>
          <Text style={ stylesLog.logLabel }>{ volume }x { label }</Text>
          <Text style={ stylesLog.logChrono }>{ duration }</Text>
        </View>
      </View>

      <View style={ stylesLog.social }>
        <Feather style={ stylesLog.socialIcon } name={ 'heart' } />
        <Text style={ stylesLog.socialStats }>{ claps }</Text>
      </View>
    </View>
  );
}

function Header({ workouts, level }) {
  return (
    <View style={{ backgroundColor: '#222222', alignItems: 'center', paddingTop: 40, paddingBottom: 20, paddingLeft: 20, paddingRight: 20 }}>
      <Image
        style={{ width: 150, height: 150, borderRadius: 999, marginBottom: 20 }}
        source={{ uri: 'https://images.pexels.com/photos/2294363/pexels-photo-2294363.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' }}
      />
      <Text style={{ fontSize: 26, color: 'white', marginBottom: 20 }}>
        Razvan Ludosanu
      </Text>
      <Text style={{ fontSize: 15, color: '#c8c8c8', marginBottom: 40 }}>
        An goal without a plan is just a wish.
      </Text>
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
        <View style={{ justifyContent: 'center', width: width / 3 }}>
          <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'white', textAlign: 'center' }}>{ level }</Text>
          <Text style={{ fontSize: 14, color: '#c8c8c8', textAlign: 'center', textTransform: 'uppercase' }}>Level</Text>
        </View>
        <View style={{ justifyContent: 'center', width: width / 3 }}>
          <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'white', textAlign: 'center' }}>{ workouts }</Text>
          <Text style={{ fontSize: 14, color: '#c8c8c8', textAlign: 'center', textTransform: 'uppercase' }}>Workouts</Text>
        </View>
      </View>
    </View>
  );
}

export default connect(
  state => ({
    workouts: state.workouts,
    exercises: state.exercises,
    logs: state.logs
  }),
  null
)(
  class extends Component {
    render() {
      const { exercises, workouts, logs } = this.props;

      return (
        <ScrollView style={{ backgroundColor: '#EBEBEB' }}>
          <Header
            workouts={ Object.keys(logs || {}).length }
            level={ getUserLevel({ exercises, workouts, logs }) }
          />
          { Object.keys(logs || {}).map((logId, index) => (
            <Log
              key={ `log-${logId}` }
              username={ 'Razvan Ludosanu' }
              timestamp={ moment(logs[logId].timestamp, 'x').format('DD/MM/YYYY') }
              label={ (logs[logId].workoutId && workouts[logs[logId].workoutId].label) || (logs[logId].exerciseId && exercises[logs[logId].exerciseId].label) }
              duration={ formatSeconds(logs[logId].duration) }
              volume={ logs[logId].volume }
              claps={ logs[logId].claps }
            />
          )) }
        </ScrollView>
      );
    }
  }
);
