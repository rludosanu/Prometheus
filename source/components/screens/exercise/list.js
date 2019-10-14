import React, { Component, Fragment } from 'react';
import {
  ScrollView,
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux';

const styles = StyleSheet.create({
  screen: {
    backgroundColor: '#161616'
  },
  list: {
    paddingTop: 10,
    paddingBottom: 10
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#222222'
  },
  image: {
    width: 55,
    height: 55,
    borderRadius: 4,
    marginRight: 15
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    flexGrow: 1
  }
});

export default connect(
  state => ({
    exercises: state.exercises
  }),
  null
)(
  class extends Component {
    static navigationOptions = ({ navigation }) => {
      return {
        title: 'Exercises',
        headerStyle: {
          backgroundColor: '#222222'
        },
        headerTintColor: 'white'
      };
    };

    render() {
      const {
        navigation,
        exercises
      } = this.props;

      return (
        <ScrollView style={ styles.screen }>
          <View style={ styles.list }>
            { Object.keys(exercises || {}).filter(exerciseId => exerciseId !== 'rest').map(exerciseId => (
              <TouchableOpacity
                key={ `exercise-${exerciseId}` }
                onPress={ () => navigation.navigate('ExercisePreview', { id: exerciseId, label: exercises[exerciseId].label }) }
                style={ styles.item }
              >
                <Image
                  style={ styles.image }
                  source={{ uri: exercises[exerciseId].image }}
                />
                <Text style={ styles.label }>
                  { exercises[exerciseId].label }
                </Text>
              </TouchableOpacity>
            )) }
          </View>
        </ScrollView>
      );
    }
  }
);
