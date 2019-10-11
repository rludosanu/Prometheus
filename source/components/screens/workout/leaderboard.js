import React, {Component, Fragment} from 'react';
import {
  ScrollView,
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Title from './title';

export default function Leaderboard(props) {
  return (
    <View style={{ marginBottom: 20 }}>
      <Title value={'Leaderboard'} />
      {props.value.map((user, index) => (
        <View
          key={`user-${index}`}
          style={{flexDirection: 'row', alignItems: 'center', marginBottom: props.value.length === index + 1 ? 0 : 15}}
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
      ))}
    </View>
  );
}
