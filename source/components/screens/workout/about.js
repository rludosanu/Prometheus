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

export default function About(props) {
  return (
    <View style={styles.container}>
      <Title value={'What to know'} />
      <View style={styles.carousel}>
        <ScrollView horizontal={true}>
          {props.videos.map((uri, index) => (
            <Image
              key={index}
              style={[styles.carouselImage, {
                marginLeft: index === 0 ? 0 : 7,
                marginRight: props.videos.length === index + 1 ? 0 : 7
              }]}
              source={{uri: uri}}
            />
          ))}
        </ScrollView>
      </View>
      <View style={[styles.row, {marginBottom: 10}]}>
        <Feather
          style={styles.rowIcon}
          name={'triangle'}
        />
        <Text style={styles.rowText}>
          {props.equipment.length > 0 ? props.value.join(', ') : 'No equipment'}
        </Text>
      </View>
      <View style={[styles.row, {marginBottom: 10}]}>
        <Feather
          style={styles.rowIcon}
          name={'hexagon'}
        />
        <Text style={styles.rowText}>
          Intermediate
        </Text>
      </View>
      <View style={styles.row}>
        <Feather
          style={styles.rowIcon}
          name={'activity'}
        />
        <Text style={styles.rowText}>
          High pace
        </Text>
      </View>
    </View>
  );
}
