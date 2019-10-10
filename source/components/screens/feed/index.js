import React, { Component } from 'react';
import { ScrollView, View, Text } from 'react-native';
import { connect } from 'react-redux';
import Feather from 'react-native-vector-icons/Feather';
import styles from './styles';

function Item(props) {
  return (
    <View style={ styles.container }>
      <View style={ styles.header }>
        <Feather style={ styles.headerIcon } name={ 'hexagon' } />
        <View>
          <Text style={ styles.headerUserName }>{ props.username }</Text>
          <Text style={ styles.headerDate }>{ props.date }</Text>
        </View>
      </View>
      <View style={ styles.log }>
        <Text style={ styles.logLabel }>{ props.label }</Text>
        <Text style={ styles.logChrono }>{ props.chrono }</Text>
      </View>
      { props.comment !== null && props.comment.length > 0 && (
        <View style={ styles.comment }>
          <Text style={ styles.commentText }>{ props.comment }</Text>
        </View>
      ) }
      <View style={ styles.social }>
        <Feather style={ styles.socialIcon } name={ 'heart' } />
        <Text style={ styles.socialStats }>1.5K</Text>
        <Feather style={ styles.socialIcon } name={ 'message-circle' } />
        <Text style={ styles.socialStats }>296</Text>
      </View>
    </View>
  );
}

export default connect(
  state => state,
  null
)(
  class extends Component {
    render() {
      const data = [{
        username: 'Razvan Ludosanu',
        date: '2d',
        label: '10x Burpee Squat Jumps',
        chrono: '00:45',
        comment: 'What a great way to start the week !',
      }, {
        username: 'Razvan Ludosanu',
        date: '3d',
        label: '50x Jumping Jacks',
        chrono: '01:23',
        comment: null,
      }, {
        username: 'Guillaume Beuriot',
        date: '3d',
        label: '1x Athena',
        chrono: '08:32',
        comment: 'Cardio killer !!!',
      }];

      return (
        <ScrollView style={{ backgroundColor: 'white' }}>
          { data.map((item, index) => (
            <Item
              key={ `feed-item-${index}` }
              username={ item.username }
              date={ item.date }
              label={ item.label }
              chrono={ item.chrono }
              comment={ item.comment }
            />
          )) }
        </ScrollView>
      );
    }
  }
);
