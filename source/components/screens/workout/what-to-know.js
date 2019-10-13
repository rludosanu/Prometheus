import React from 'react';
import {
  ScrollView,
  View,
  Text,
  Image,
  StyleSheet
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Title from './title';

const styles = StyleSheet.create({
  container: {
    marginBottom: 20
  },
  carousel: {
    marginBottom: 10
  },
  carouselImage: {
    width: 250,
    height: 250,
    borderRadius: 4,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rowIcon: {
    fontSize: 15,
    color: 'white',
    marginRight: 10
  },
  rowText: {
    fontSize: 15,
    color: 'white'
  }
});

function List({ items }) {
  return (
    <View>
      { items.map((item, index) => (
        <View
          key={ `list-item-${index}` }
          style={ [styles.row, { marginBottom: items.length === index + 1 ? 0 : 10 }] }
        >
          <Feather
            style={ styles.rowIcon }
            name={ item.icon }
          />
          <Text style={ styles.rowText }>
            { item.value }
          </Text>
        </View>
      )) }
    </View>
  );
}

export default function WhatToKnow({ videos, equipments }) {
  return (
    <View style={ styles.container }>
      <Title value={ 'What to know' } />
      <View style={ styles.carousel }>
        <ScrollView horizontal={ true }>
          { videos.map((video, index) => (
            <Image
              key={ `video-${index}` }
              style={
                [styles.carouselImage, {
                  marginLeft: index === 0 ? 0 : 7,
                  marginRight: videos.length === index + 1 ? 0 : 7
                }]
              }
              source={{ uri: video }}
            />
          )) }
        </ScrollView>
      </View>
      <List
        items={
          [{
            value: equipments,
            icon: 'triangle'
          }, {
            value: 'Intermediate',
            icon: 'hexagon'
          }]
        }
      />
    </View>
  );
}
