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
import Feather from 'react-native-vector-icons/Feather';

const { width, height } = Dimensions.get('window');

const logs = [{
  username: 'Razvan Ludosanu',
  date: '2d',
  label: '10x Burpee Squat Jumps',
  chrono: '00:45',
  image: 'https://images.pexels.com/photos/2294363/pexels-photo-2294363.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  comment: null,
}, {
  username: 'Razvan Ludosanu',
  date: '1w',
  label: 'Athena',
  chrono: '06:23',
  image: null,
  comment: 'What a great way to start the week !',
}];

const stylesLog = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderColor: '#EBEBEB',
    marginBottom: 10,
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
  comment: {
    marginTop: 10,
    paddingLeft: 20,
    paddingRight: 20,
  },
  commentText: {
    fontSize: 15,
    color: '#161616'
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

function Log({ username, date, label, chrono, image, comment }) {
  return (
    <View style={ stylesLog.container }>
      <View style={ stylesLog.header }>
        <Feather style={ stylesLog.headerIcon } name={ 'hexagon' } />
        <View>
          <Text style={ stylesLog.headerUserName }>{ username }</Text>
          <Text style={ stylesLog.headerDate }>{ date }</Text>
        </View>
      </View>

      { image !== null && (
        <View style={{ marginTop: 20 }}>
          <Image
            style={{ width: width, height: 250 }}
            source={{ uri: image }}
          />
        </View>
      ) }

      <View style={{ paddingLeft: 20, paddingRight: 20 }}>
        <View style={ stylesLog.log }>
          <Text style={ stylesLog.logLabel }>{ label }</Text>
          <Text style={ stylesLog.logChrono }>{ chrono }</Text>
        </View>
      </View>

      { comment !== null && comment.length > 0 && (
        <View style={ stylesLog.comment }>
          <Text style={ stylesLog.commentText }>{ comment }</Text>
        </View>
      ) }

      <View style={ stylesLog.social }>
        <Feather style={ stylesLog.socialIcon } name={ 'heart' } />
        <Text style={ stylesLog.socialStats }>1.5K</Text>
        <Feather style={ stylesLog.socialIcon } name={ 'message-circle' } />
        <Text style={ stylesLog.socialStats }>296</Text>
      </View>
    </View>
  );
}

function Header(props) {
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
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: width - 40 }}>
        <View style={{ justifyContent: 'center' }}>
          <Text style={{ fontSize: 15, fontWeight: 'bold', color: 'white', textAlign: 'center' }}>42</Text>
          <Text style={{ fontSize: 15, color: '#c8c8c8', textAlign: 'center', textTransform: 'uppercase' }}>Level</Text>
        </View>
        <View style={{ justifyContent: 'center' }}>
          <Text style={{ fontSize: 15, fontWeight: 'bold', color: 'white', textAlign: 'center' }}>700</Text>
          <Text style={{ fontSize: 15, color: '#c8c8c8', textAlign: 'center', textTransform: 'uppercase' }}>Workouts</Text>
        </View>
        <View style={{ justifyContent: 'center' }}>
          <Text style={{ fontSize: 15, fontWeight: 'bold', color: 'white', textAlign: 'center' }}>1.5K</Text>
          <Text style={{ fontSize: 15, color: '#c8c8c8', textAlign: 'center', textTransform: 'uppercase' }}>Followers</Text>
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
      return (
        <ScrollView style={{ backgroundColor: '#c8c8c8' }}>
          <Header />
          { logs.map((log, index) => (
            <Log
              key={ index }
              username={ log.username }
              date={ log.date }
              label={ log.label }
              chrono={ log.chrono }
              image={ log.image }
              comment={ log.comment }
            />
          )) }
        </ScrollView>
      );
    }
  }
);
