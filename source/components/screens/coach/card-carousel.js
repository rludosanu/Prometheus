import React, {Fragment} from 'react';
import {
  ScrollView,
  View,
  Text,
  TouchableWithoutFeedback,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
  StyleSheet
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

const { width } = Dimensions.get('window');

const stylesCCI = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    backgroundColor: 'white',
    width: 240,
    height: 110,
    borderRadius: 4,
  },
  body: {
    padding: 15,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#161616',
  },
  description: {
    fontSize: 13,
    color: '#7F7F7F',
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderTopWidth: 1,
    borderTopColor: '#EBEBEB',
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 15,
    paddingRight: 15,
  },
  footerTag: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  footerTagText: {
    fontSize: 13,
    color: '#7F7F7F',
    marginRight: 4,
  },
});

const stylesCC = StyleSheet.create({
  background: {
    width: width,
    height: 300
  },
  body: {
    padding: 20
  },
  label: {
    fontSize: 36,
    color: 'white',
    fontWeight: 'bold',
    marginBottom: 4
  },
  description: {
    fontSize: 16,
    color: '#EBEBEB',
    fontWeight: 'bold',
    width: (width / 2) - 40
  }
});

function CardCarouselRatings({ count }) {
  const applyStyle = (b, c) => ({
    fontSize: 8,
    color: c >= b ? '#161616' : '#EBEBEB',
    marginLeft: 2,
    marginTop: 4
  });

  return (
    <Fragment>
      <Feather
        style={ applyStyle(1, count) }
        name={ 'hexagon' }
      />
      <Feather
        style={ applyStyle(2, count) }
        name={ 'hexagon' }
      />
      <Feather
        style={ applyStyle(3, count) }
        name={ 'hexagon' }
      />
    </Fragment>
  );
}

function CardCarouselItem({ onPress, isFirst, isLast, label, description, difficulty, duration }) {
  return (
    <TouchableWithoutFeedback onPress={ onPress }>
      <View style={ [stylesCCI.container, { marginLeft: isFirst ? 20 : 10, marginRight: isLast ? 20 : 10 }] }>
        <View style={ stylesCCI.body }>
          <Text style={ stylesCCI.label }>
            { label }
          </Text>
          <Text style={ stylesCCI.description }>
            { description }
          </Text>
        </View>
        <View style={ stylesCCI.footer }>
          <View style={ stylesCCI.footerTag }>
            <Text style={ stylesCCI.footerTagText }>
              Difficulty
            </Text>
            <CardCarouselRatings count={ difficulty } />
          </View>
          <View style={ stylesCCI.footerTag }>
            <Text style={ stylesCCI.footerTagText }>
              Duration
            </Text>
            <CardCarouselRatings count={ duration } />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

export default function CardCarousel({ label, description, background, onPress, featured }) {
  return (
    <ImageBackground
      source={{ uri: background }}
      style={ stylesCC.background }
    >
      <View style={ stylesCC.body }>
        <Text style={ stylesCC.label }>
          { label }
        </Text>
        <Text style={ stylesCC.description }>
          { description }
        </Text>
      </View>
      <ScrollView horizontal={ true }>
        { featured.map((item, index) => (
          <CardCarouselItem
            key={ `featured-tile-${index}` }
            onPress={ item.onPress }
            isFirst={ index === 0 }
            isLast={ index === featured.length - 1 }
            label={ item.label }
            description={ item.description }
            difficulty={ item.difficulty }
            duration={ item.duration }
          />
        )) }
      </ScrollView>
      <TouchableOpacity
        style={{ paddingLeft: 20, paddingRight: 20, marginTop: 10, marginBottom: 20, justifyContent: 'flex-end' }}
        onPress={ onPress }
      >
        <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'white', textAlign: 'right' }}>See All</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
}
