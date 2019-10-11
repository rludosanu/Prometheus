import React, {Component, Fragment} from 'react';
import {
  ScrollView,
  View,
  Text,
  Image,
  StyleSheet
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

function Title(props) {
  return (
    <View style={{marginBottom: 10}}>
      <Text style={{fontSize: 20, fontWeight: 'bold', color: 'white'}}>
        {props.value}
      </Text>
    </View>
  );
}

function Leaderboard(props) {
  return (
    <View style={{marginBottom: 20}}>
      <Title value={'Leaderboard'} />
      <View></View>
    </View>
  );
}

const stylesS = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  roundTitle: {
    color: '#B6B6B4',
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 10
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 55,
    height: 55,
    borderRadius: 4,
    marginRight: 15
  },
  exercise: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white'
  }
});

function Summary(props) {
  const isLast = (limit, index, value) => limit === index ? 0 : value;

  return (
    <View style={stylesS.container}>
      <Title value={'Summary'} />
      {props.value.map((round, indexA) => (
        <View
          key={`round-${indexA}`}
          style={{marginBottom: isLast(props.value.length, indexA + 1, 10)}}
        >
          <Text style={stylesS.roundTitle}>
            Round {indexA + 1}/{props.value.length}
          </Text>
          {round.map((exercise, indexB) => (
            <View
              key={`exercise-${indexB}`}
              style={[stylesS.row, {marginBottom: isLast(round.length, indexB + 1, 15)}]}
            >
              <Image
                style={stylesS.image}
                source={{uri: exercise.uri}}
              />
              <Text style={stylesS.exercise}>
                {exercise.volume}x {exercise.exercise}
              </Text>
            </View>
          ))}
        </View>
      ))}
    </View>
  );
}

function Equipment(props) {
  return (
    <View style={{marginBottom: 20}}>
      <Title value={'What to know'} />
      <View style={{marginBottom: 10}}>
        <ScrollView horizontal={true}>
          {props.videos.map((uri, index) => (
            <Image
              key={index}
              style={{
                width: 250,
                height: 250,
                borderRadius: 4,
                marginLeft: index === 0 ? 0 : 7,
                marginRight: props.videos.length === index + 1 ? 0 : 7
              }}
              source={{uri: uri}}
            />
          ))}
        </ScrollView>
      </View>
      <View style={{flexDirection: 'row', alignItems: 'center', marginBottom: 10}}>
        <Feather style={{fontSize: 15, color: 'white', marginRight: 10}} name={'triangle'} />
        <Text style={{fontSize: 15, color: 'white'}}>
          {props.equipment.length > 0 ? props.value.join(', ') : 'No equipment'}
        </Text>
      </View>
      <View style={{flexDirection: 'row', alignItems: 'center', marginBottom: 10}}>
        <Feather style={{fontSize: 15, color: 'white', marginRight: 10}} name={'hexagon'} />
        <Text style={{fontSize: 15, color: 'white'}}>
          Intermediate
        </Text>
      </View>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Feather style={{fontSize: 15, color: 'white', marginRight: 10}} name={'activity'} />
        <Text style={{fontSize: 15, color: 'white'}}>
          High pace
        </Text>
      </View>
    </View>
  );
}

export default class WorkoutPreviewScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('title'),
      headerStyle: {
        backgroundColor: '#222222'
      },
      headerTintColor: 'white'
    };
  };

  componentDidMount() {
    const id = this.props.navigation.getParam('id', null);
  }

  render() {
    const videos = [
      'https://images.pexels.com/photos/2294354/pexels-photo-2294354.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
      'https://images.pexels.com/photos/2294355/pexels-photo-2294355.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
      'https://images.pexels.com/photos/2294353/pexels-photo-2294353.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
    ];
    const equipment = [];
    const workout = [
      [
        { exercise: 'Climbers', volume: 25, uri: 'https://images.pexels.com/photos/2294354/pexels-photo-2294354.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500' },
        { exercise: 'Situps', volume: 25, uri: 'https://images.pexels.com/photos/2294355/pexels-photo-2294355.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500' },
        { exercise: 'Squats', volume: 25, uri: 'https://images.pexels.com/photos/2294353/pexels-photo-2294353.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500' }
      ], [
        { exercise: 'Climbers', volume: 20, uri: 'https://images.pexels.com/photos/2294354/pexels-photo-2294354.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500' },
        { exercise: 'Situps', volume: 20, uri: 'https://images.pexels.com/photos/2294355/pexels-photo-2294355.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500' },
        { exercise: 'Squats', volume: 20, uri: 'https://images.pexels.com/photos/2294353/pexels-photo-2294353.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500' }
      ], [
        { exercise: 'Climbers', volume: 15, uri: 'https://images.pexels.com/photos/2294354/pexels-photo-2294354.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500' },
        { exercise: 'Situps', volume: 15, uri: 'https://images.pexels.com/photos/2294355/pexels-photo-2294355.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500' },
        { exercise: 'Squats', volume: 15, uri: 'https://images.pexels.com/photos/2294353/pexels-photo-2294353.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500' }
      ],
    ];
    const users = [];

    return (
      <ScrollView style={{backgroundColor: '#161616'}}>
        <View style={{padding: 20}}>
          <Equipment equipment={equipment} videos={videos} />
          <Summary value={workout} />
          <Leaderboard value={users} />
        </View>
      </ScrollView>
    );
  }
}
