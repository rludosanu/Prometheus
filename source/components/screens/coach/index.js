import React, {Component} from 'react';
import {ScrollView} from 'react-native';
import {connect} from 'react-redux';
import Card from './card';
import CardCarousel from './card-carousel';

export default connect(
  state => state,
  null
)(
  class extends Component {
    static navigationOptions = {
      header: null
    };

    render() {
      return (
        <ScrollView style={{backgroundColor: 'white'}}>
          <CardCarousel
            label={'Workouts'}
            description={'Prometheus signature workouts'}
            background={'https://images.pexels.com/photos/2261482/pexels-photo-2261482.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'}
            featured={[{
              label: 'Athena',
              description: 'Core, Lower Body',
              level: 1,
              duration: 3,
              onPress: () => this.props.navigation.navigate('WorkoutPreview', { id: 'ath', title: 'Athena' }),
            }, {
              label: 'Prometheus',
              description: 'Core, Upper body',
              level: 2,
              duration: 1,
              onPress: () => this.props.navigation.navigate('WorkoutPreview', { id: 'pth', title: 'Prometheus' }),
            }, {
              label: 'Hyperion',
              description: 'Core, Upper body',
              level: 2,
              duration: 3,
              onPress: () => this.props.navigation.navigate('WorkoutPreview', { id: 'hyp', title: 'Hyperion' }),
            }]}
          />
          <Card
            label={'Single Exercises'}
            description={'Target specific muscles'}
            background={'https://images.pexels.com/photos/949132/pexels-photo-949132.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'}
            onPress={() => this.props.navigation.navigate('SingleExercises')}
          />
          <Card
            label={'Sprints & Runs'}
            description={'Train on the road or track'}
            background={'https://images.pexels.com/photos/186405/pexels-photo-186405.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'}
            onPress={() => this.props.navigation.navigate('SprintsAndRuns')}
          />
        </ScrollView>
      );
    }
  }
);
