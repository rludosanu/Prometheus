import React, { Component } from 'react';
import {
  ScrollView,
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { connect } from 'react-redux';
import Feather from 'react-native-vector-icons/Feather';

const { width, height } = Dimensions.get('window');
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
  picker: {
    backgroundColor: 'white',
    borderRadius: 4,
    padding: 20,
    position: 'absolute',
    zIndex: 999,
    top: 40,
    left: 40,
    width: width - 80,
    height: height - 220
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
    color: 'white',
    flexGrow: 1
  },
  aboutListVolumeText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'white',
    marginRight: 5,
  },
  aboutListVolumeIcon: {
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
  }
});

function Picker({ title, value, items, onPress }) {
  return (
    <View style={ styles.picker }>
      <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'black', marginBottom: 10 }}>
        { title }
      </Text>
      { items.map((item, index) => (
        <TouchableOpacity
          key={ `picker-${index}` }
          onPress={ () => onPress(item.value) }
          style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}
        >
          <Feather
            style={{ fontSize: 16, color: 'black', marginRight: 15 }}
            name={ value === item.value ? 'check-circle' : 'circle' }
          />
          <Text style={{ fontSize: 16, color: 'black' }}>
            { item.label }
          </Text>
        </TouchableOpacity>
      )) }
    </View>
  )
}

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

    constructor(props) {
      super(props);
      this.state = {
        showPicker: false,
        volume: 25
      };
    }

    render() {
      const exerciseId = this.props.navigation.getParam('id', null);
      const exercise = this.props.exercises[exerciseId];
      const equipments = exercise.equipments.length > 0 ? exercise.equipments.map(id => this.props.equipments[id].label).join(', ') : 'No equipment';
      const muscles = exercise.muscles.map(muscle => muscle.charAt(0).toUpperCase() + muscle.slice(1)).join(', ');
      const { showPicker, volume } = this.state;

      return (
        <View style={ styles.screen }>
          <TouchableOpacity
            onPress={
              () => this.props.navigation.navigate('ExercisePractice', {
                id: exerciseId,
                label: exercise.label,
                volume: volume
              })
            }
            style={ styles.button }
          >
            <Text style={ styles.buttonText }>
              Start
            </Text>
          </TouchableOpacity>
          { showPicker && (
            <Picker
              title={ 'Volume' }
              value={ volume }
              items={
                [
                  { label: '10', value: 10 },
                  { label: '25', value: 25 },
                  { label: '50', value: 50 },
                  { label: '100', value: 100 },
                  { label: '250', value: 250 },
                  { label: '500', value: 500 },
                  { label: '1000', value: 1000 },
                ]
              }
              onPress={
                value => this.setState({
                  volume: value,
                  showPicker: false
                })
              }
            />
          ) }
          <ScrollView>
            <View style={ styles.container }>
              <View style={ styles.section }>
                <Text style={ styles.title }>
                  What to know
                </Text>
                <Image
                  style={ styles.aboutVideo }
                  source={{ uri: exercise.image }}
                />
                <View style={ [styles.aboutListItem, { marginBottom: 10 }] }>
                  <Feather
                    name={ 'triangle' }
                    style={ styles.aboutListIcon }
                  />
                  <Text style={ styles.aboutListText }>
                    { equipments }
                  </Text>
                </View>
                <View style={ [styles.aboutListItem, { marginBottom: 10 }] }>
                  <Feather
                    name={ 'hexagon' }
                    style={ styles.aboutListIcon }
                  />
                  <Text style={ styles.aboutListText }>
                    { muscles }
                  </Text>
                </View>
                <View style={ styles.aboutListItem }>
                  <Feather
                    name={ 'square' }
                    style={ styles.aboutListIcon }
                  />
                  <Text style={ styles.aboutListText }>
                    Volume
                  </Text>
                  <TouchableOpacity
                    onPress={ () => this.setState({ showPicker: true }) }
                    style={{ flexDirection: 'row', alignItems: 'center' }}
                  >
                    <Text style={ styles.aboutListVolumeText }>
                      { this.state.volume }
                    </Text>
                    <Feather
                      name={ 'chevron-down' }
                      style={ styles.aboutListVolumeIcon }
                    />
                  </TouchableOpacity>
                </View>
              </View>
              <View style={ styles.section }>
                <Text style={ styles.title }>
                  Summary
                </Text>
                <View style={ styles.exercise }>
                  <Image
                    source={{ uri: exercise.image }}
                    style={ styles.exerciseImage }
                  />
                  <Text style={ styles.exerciseLabel }>
                    { this.state.volume }x { exercise.label }
                  </Text>
                </View>
              </View>
            </View>
          </ScrollView>
        </View>
      );
    }
  }
);
