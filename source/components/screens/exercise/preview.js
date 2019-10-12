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
import Feather from 'react-native-vector-icons/Feather';

const { width } = Dimensions.get('window');
const users = [{
  name: 'Razvan Ludosanu',
  color: '#007ACA',
  level: 38,
  date: '03/05/2019',
  chrono: '08:24'
}];

function Title(props) {
  return (
    <Text style={{ fontSize: 22, fontWeight: 'bold', color: 'white', marginBottom: 15 }}>
      { props.value }
    </Text>
  );
}

export default class ExercisePreviewScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('title'),
      headerStyle: {
        backgroundColor: '#222222'
      },
      headerTintColor: 'white'
    };
  };

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#161616' }}>
        <TouchableOpacity
          style={{ backgroundColor: '#007ACA', borderRadius: 4, alignSelf: 'stretch', alignItems: 'center', justifyContent: 'center', padding: 16, position: 'absolute', zIndex: 999, bottom: 10, left: 10, width: width - 20 }}
          onPress={ () => {} }
        >
          <Text style={{ color: 'white', fontSize: 15, fontWeight: 'bold' }}>
            Start
          </Text>
        </TouchableOpacity>

        <ScrollView>
          <View style={{ paddingTop: 10, paddingBottom: 60, paddingLeft: 20, paddingRight: 20 }}>
            <View style={{ marginBottom: 20 }}>
              <Title value={ 'What to know' } />
              <Image
                style={{ width: width - 40, height: width - 40, borderRadius: 4, marginBottom: 10 }}
                source={{ uri: 'https://images.pexels.com/photos/2294354/pexels-photo-2294354.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500' }}
              />
              <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
                <Feather
                  style={{ fontSize: 15, color: 'white', marginRight: 10 }}
                  name={ 'triangle' }
                />
                <Text style={{ fontSize: 15, color: 'white' }}>
                  No equipment
                </Text>
              </View>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Feather
                  style={{ fontSize: 15, color: 'white', marginRight: 10 }}
                  name={ 'hexagon' }
                />
                <Text style={{ fontSize: 15, color: 'white' }}>
                  Intermediate
                </Text>
              </View>
            </View>

            <View style={{ marginBottom: 20 }}>
              <Title value={ 'Summary' } />
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Image
                  style={{ width: 55, height: 55, borderRadius: 4, marginRight: 15 }}
                  source={{ uri: 'https://images.pexels.com/photos/2294354/pexels-photo-2294354.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500' }}
                />
                <Text style={{ fontSize: 15, fontWeight: 'bold', color: 'white', flexGrow: 1 }}>
                  25x Archer Pullups
                </Text>
              </View>
            </View>

            <View style={{ marginBottom: 20 }}>
              <Title value={'Leaderboard'} />
              { users.map((user, index) => (
                <View
                  key={`user-${index}`}
                  style={{flexDirection: 'row', alignItems: 'center', marginBottom: users.length === index + 1 ? 0 : 15}}
                >
                  <Feather
                    style={{fontSize: 36, color: '#007ACA', marginRight: 10}}
                    name={'hexagon'}
                  />
                  <View style={{ flexGrow: 1 }}>
                    <Text style={{color: 'white', fontSize: 15, fontWeight: 'bold', marginBottom: 2}}>
                      {user.name}
                    </Text>
                    <Text style={{color: '#7F7F7F', fontSize: 13}}>
                      Level {user.level}
                    </Text>
                  </View>
                  <View>
                    <Text style={{color: 'white', fontSize: 15, fontWeight: 'bold', marginBottom: 2, textAlign: 'right'}}>
                      {user.chrono}
                    </Text>
                    <Text style={{color: '#7F7F7F', fontSize: 13, textAlign: 'right'}}>
                      {user.date}
                    </Text>
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
