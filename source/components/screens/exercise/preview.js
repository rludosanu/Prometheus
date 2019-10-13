import React, {Component, Fragment} from 'react';
import {
  ScrollView,
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Dimensions
} from 'react-native';
import { connect } from 'react-redux';
import Feather from 'react-native-vector-icons/Feather';

const { width } = Dimensions.get('window');
const users = [{
  name: 'Razvan Ludosanu',
  color: '#007ACA',
  level: 38,
  date: '03/05/2019',
  chrono: '08:24'
}];
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#161616'
  },
  button: {
    backgroundColor: '#007ACA',
    borderRadius: 4,
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    position: 'absolute',
    zIndex: 999,
    bottom: 10,
    left: 10,
    width: width - 20
  },
  buttonText: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold'
  },
  container: {
    paddingTop: 10,
    paddingBottom: 60,
    paddingLeft: 20,
    paddingRight: 20
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 15
  },
  section: {
    marginBottom: 20
  },
  aboutVideo: {
    width: width - 40,
    height: width - 40,
    borderRadius: 4,
    marginBottom: 10
  },
  aboutListItem: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  aboutListIcon: {
    fontSize: 15,
    color: 'white',
    marginRight: 10
  },
  aboutListText: {
    fontSize: 15,
    color: 'white'
  },
  exercise: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  exerciseImage: {
    width: 55,
    height: 55,
    borderRadius: 4,
    marginRight: 15
  },
  exerciseLabel: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'white',
    flexGrow: 1
  },
  leaderboardIcon: {
    fontSize: 36,
    color: '#007ACA',
    marginRight: 10
  },
  leaderboardUser: {
    flexGrow: 1
  },
  leaderboardUserName: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 2
  },
  leaderboardUserLevel: {
    color: '#7F7F7F',
    fontSize: 13
  },
  leaderboardChrono: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 2,
    textAlign: 'right'
  },
  leaderboardDate: {
    color: '#7F7F7F',
    fontSize: 13,
    textAlign: 'right'
  }
});

export default connect(
  state => ({
    exercises: state.exercises,
    equipments: state.equipments,
  }),
  null
)(
  class ExercisePreviewScreen extends Component {
    static navigationOptions = ({ navigation }) => {
      return {
        title: navigation.getParam('label'),
        headerStyle: {
          backgroundColor: '#222222'
        },
        headerTintColor: 'white'
      };
    };

    render() {
      const exerciseId = this.props.navigation.getParam('id', null);
      const exercise = this.props.exercises[exerciseId];
      const equipments = exercise.equipments.length > 0 ? exercise.equipments.map(id => this.props.equipments[id].label).join(', ') : 'No equipment';
      const muscles = exercise.muscles.map(muscle => muscle.charAt(0).toUpperCase() + muscle.slice(1)).join(', ');

      return (
        <View style={ styles.screen }>
          <TouchableOpacity style={ styles.button } onPress={ () => {} }>
            <Text style={ styles.buttonText }>Start</Text>
          </TouchableOpacity>
          <ScrollView>
            <View style={ styles.container }>
              <View style={ styles.section }>
                <Text style={ styles.title }>What to know</Text>
                <Image style={ styles.aboutVideo } source={{ uri: exercise.image }} />
                <View style={ [styles.aboutListItem, { marginBottom: 10 }] }>
                  <Feather style={ styles.aboutListIcon } name={ 'triangle' } />
                  <Text style={ styles.aboutListText }>{ equipments }</Text>
                </View>
                <View style={ styles.aboutListItem }>
                  <Feather style={ styles.aboutListIcon } name={ 'hexagon' } />
                  <Text style={ styles.aboutListText }>{ muscles }</Text>
                </View>
              </View>
              <View style={ styles.section }>
                <Text style={ styles.title }>Summary</Text>
                <View style={ styles.exercise }>
                  <Image style={ styles.exerciseImage } source={{ uri: exercise.image }} />
                  <Text style={ styles.exerciseLabel }>0x { exercise.label }</Text>
                </View>
              </View>
              <View style={ styles.section }>
                <Text style={ styles.title }>Leaderboard</Text>
                { users.map((user, index) => (
                  <View
                    key={ `user-${index}` }
                    style={{ flexDirection: 'row', alignItems: 'center', marginBottom: users.length === index + 1 ? 0 : 15 }}
                  >
                    <Feather style={ styles.leaderboardIcon } name={ 'hexagon' } />
                    <View style={ styles.leaderboardUser }>
                      <Text style={ styles.leaderboardUserName }>{ user.name }</Text>
                      <Text style={ styles.leaderboardUserLevel }>Level { user.level }</Text>
                    </View>
                    <View>
                      <Text style={ styles.leaderboardChrono }>{ user.chrono }</Text>
                      <Text style={ styles.leaderboardDate }>{ user.date }</Text>
                    </View>
                  </View>
                )) }
              </View>
            </View>
          </ScrollView>
        </View>
      );
    }
  }
);
