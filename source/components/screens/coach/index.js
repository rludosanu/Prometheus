import React, { Component, Fragment } from 'react';
import { ScrollView, View, Text, TouchableOpacity, ImageBackground, Dimensions, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import Feather from 'react-native-vector-icons/Feather';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white'
  },
  band: {
    backgroundColor: '#161616',
    height: 10
  },
  label: {
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold',
    width: width / 2,
    marginBottom: 2
  },
  description: {
    fontSize: 16,
    color: '#EBEBEB',
    width: width / 2
  }
});

function TouchableImage(props) {
  return (
    <TouchableOpacity
      onPress={ props.onPress }
    >
      <View style={ styles.band }></View>
      <ImageBackground
        source={{ uri: props.background }}
        style={{ width: width, height: 200 }}
      >
        <View style={{ padding: 20 }}>
          <Text style={ styles.label }>{ props.label }</Text>
          <Text style={ styles.description }>{ props.description }</Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
}

function CircleRate(props) {
  const applyStyle = (base, count) => ({
    fontSize: 8,
    color: count >= base ? '#161616' : '#EBEBEB',
    marginLeft: 2,
    marginTop: 4
  });

  return (
    <Fragment>
      <Feather style={ applyStyle(1, props.count) } name={ 'hexagon' } />
      <Feather style={ applyStyle(2, props.count) } name={ 'hexagon' } />
      <Feather style={ applyStyle(3, props.count) } name={ 'hexagon' } />
    </Fragment>
  );
}

function TouchableImageWithList(props) {
  return (
    <View>
      <View style={ styles.band }></View>
      <ImageBackground
        source={{ uri: props.background }}
        style={{ width: width, height: 260 }}
      >
        <View style={{ padding: 20 }}>
          <Text style={ styles.label }>{ props.label }</Text>
          <Text style={ styles.description }>{ props.description }</Text>
        </View>
        <ScrollView
          horizontal={ true }
        >
          { props.featured.map((item, index) => (
            <View key={ index } style={{ justifyContent: 'space-between', backgroundColor: 'white', padding: 15, width: 240, height: 120, marginLeft: index === 0 ? 20 : 10, marginRight: index === props.featured.length - 1 ? 20 : 10 }}>
              <View>
                <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#161616' }}>{ item.label }</Text>
                <Text style={{ fontSize: 15, color: '#7F7F7F' }}>{ item.description }</Text>
              </View>
              <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <Text style={{ fontSize: 15, color: '#7F7F7F', marginRight: 4 }}>Level</Text>
                  <CircleRate count={ item.level } />
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <Text style={{ fontSize: 15, color: '#7F7F7F', marginRight: 4 }}>Duration</Text>
                  <CircleRate count={ item.duration } />
                </View>
              </View>
            </View>
          )) }
        </ScrollView>
      </ImageBackground>
    </View>
  );
}

export default connect(
  state => state,
  null
)(
  class extends Component {
    render() {
      return (
        <ScrollView style={ styles.container }>
          <TouchableImageWithList
            onPress={() => {}}
            background={'https://images.pexels.com/photos/2261482/pexels-photo-2261482.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'}
            label={'WORKOUTS'}
            description={'Prometheus signature workouts'}
            featured={[{
              label: 'ATHENA',
              description: 'Core, Lower Body',
              level: 1,
              duration: 3,
            }, {
              label: 'PROMETHEUS',
              description: 'Core, Upper body',
              level: 2,
              duration: 1,
            }, {
              label: 'HYPERION',
              description: 'Core, Upper body',
              level: 2,
              duration: 3,
            }]}
          />
          <TouchableImage
            onPress={() => {}}
            background={'https://images.pexels.com/photos/949132/pexels-photo-949132.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'}
            label={'SINGLE EXERCICES'}
            description={'Target specific muscles'}
          />
          <TouchableImage
            onPress={() => {}}
            background={'https://images.pexels.com/photos/186405/pexels-photo-186405.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'}
            label={'SPRINTS & RUNS'}
            description={'Train on the road or track'}
          />
        </ScrollView>
      );
    }
  }
);
