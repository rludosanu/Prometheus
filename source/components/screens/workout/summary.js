import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet
} from 'react-native';
import Title from './title';

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  roundTitle: {
    color: '#B6B6B4',
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 15
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
    fontSize: 15,
    fontWeight: 'bold',
    color: 'white',
    flexGrow: 1
  }
});

const isLast = (limit, index, value) => limit === index ? 0 : value;

export default function Summary(props) {
  return (
    <View style={styles.container}>
      <Title
        value={'Summary'}
      />
      { props.value.map((round, indexA) => (
        <View
          key={ `round-${indexA}` }
          style={{ marginBottom: isLast(props.value.length, indexA + 1, 10) }}
        >
          <Text style={ styles.roundTitle }>
            Round { indexA + 1 }/{ props.value.length }
          </Text>
          { round.map((exercise, indexB) => (
            <View
              key={ `exercise-${indexB}` }
              style={ [styles.row, { marginBottom: isLast(round.length, indexB + 1, 15) }] }
            >
              <Image
                style={ styles.image }
                source={{ uri: exercise.uri }}
              />
              <Text style={ styles.exercise }>
                { exercise.volume }x { exercise.exercise }
              </Text>
            </View>
          ))}
        </View>
      ))}
    </View>
  );
}
