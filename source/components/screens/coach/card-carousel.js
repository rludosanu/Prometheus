import React, {Fragment} from 'react';
import {
  ScrollView,
  View,
  Text,
  TouchableWithoutFeedback,
  ImageBackground,
  Dimensions,
  StyleSheet
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

const {width} = Dimensions.get('window');

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
  container: {
    // borderTopWidth: 10,
    // borderTopColor: '#161616'
  },
  background: {
    width: width,
    height: 260
  },
  body: {
    padding: 20
  },
  label: {
    fontSize: 25,
    color: 'white',
    fontWeight: 'bold',
    width: (width / 2),
    marginBottom: 4
  },
  description: {
    fontSize: 15,
    color: '#EBEBEB',
    fontWeight: 'bold',
    width: (width / 2)
  }
});

function CardCarouselRatings(props) {
  const applyStyle = (base, count) => ({
    fontSize: 8,
    color: count >= base ? '#161616' : '#EBEBEB',
    marginLeft: 2,
    marginTop: 4
  });

  return (
    <Fragment>
      <Feather style={applyStyle(1, props.count)} name={'hexagon'} />
      <Feather style={applyStyle(2, props.count)} name={'hexagon'} />
      <Feather style={applyStyle(3, props.count)} name={'hexagon'} />
    </Fragment>
  );
}

function CardCarouselItem(props) {
  return (
    <TouchableWithoutFeedback onPress={props.onPress}>
      <View style={[stylesCCI.container, {marginLeft: props.isFirst ? 20 : 10, marginRight: props.isLast ? 20 : 10}]}>
        <View style={stylesCCI.body}>
          <Text style={stylesCCI.label}>
            {props.label}
          </Text>
          <Text style={stylesCCI.description}>
            {props.description}
          </Text>
        </View>
        <View style={stylesCCI.footer}>
          <View style={stylesCCI.footerTag}>
            <Text style={stylesCCI.footerTagText}>
              Level
            </Text>
            <CardCarouselRatings count={props.level} />
          </View>
          <View style={stylesCCI.footerTag}>
            <Text style={stylesCCI.footerTagText}>
              Duration
            </Text>
            <CardCarouselRatings count={props.duration} />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

export default function CardCarousel(props) {
  return (
    <View style={stylesCC.container}>
      <ImageBackground
        source={{uri: props.background}}
        style={stylesCC.background}
      >
        <View style={stylesCC.body}>
          <Text style={stylesCC.label}>
            {props.label}
          </Text>
          <Text style={stylesCC.description}>
            {props.description}
          </Text>
        </View>
        <ScrollView horizontal={true}>
          {props.featured.map((item, index) => (
            <CardCarouselItem
              key={`featured-tile-${index}`}
              onPress={item.onPress}
              isFirst={index === 0}
              isLast={index === props.featured.length - 1}
              label={item.label}
              description={item.description}
              level={item.level}
              duration={item.duration}
            />
          )) }
        </ScrollView>
      </ImageBackground>
    </View>
  );
}
