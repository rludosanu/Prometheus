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

export default function Summary({ rounds, exercises }) {
  console.log('rounds', rounds);
  console.log('exercises', exercises);
  return (
    <View style={styles.container}>
      <Title value={'Summary'} />
      { rounds.map((round, indexA) => (
        <View
          key={ `round-${indexA}` }
          style={{ marginBottom: isLast(rounds.length, indexA + 1, 10) }}
        >
          <Text style={ styles.roundTitle }>
            Round { indexA + 1 }/{ rounds.length }
          </Text>
          { round.map((exercise, indexB) => (
            <View
              key={ `exercise-${exercise.id}` }
              style={ [styles.row, { marginBottom: isLast(round.length, indexB + 1, 15) }] }
            >
              <Image
                style={ styles.image }
                source={{ uri: exercises[exercise.id].image }}
              />
              <Text style={ styles.exercise }>
                { exercise.volume }{exercise.id === 'rest' ? 's' : 'x'} { exercises[exercise.id].label }
              </Text>
            </View>
          ))}
        </View>
      ))}
    </View>
  );
}
