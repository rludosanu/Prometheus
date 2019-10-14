import React, { Component } from 'react';
import { ScrollView, View, Text } from 'react-native';
import { connect } from 'react-redux';
import Feather from 'react-native-vector-icons/Feather';
import styles from './styles';

function Log(props) {
  return (
    <View style={ styles.container }>
      <View style={ styles.header }>
        <Feather style={ styles.headerIcon } name={ 'hexagon' } />
        <View>
          <Text style={ styles.headerUserName }>{ props.username }</Text>
          <Text style={ styles.headerDate }>{ props.timestamp }</Text>
        </View>
      </View>
      <View style={ styles.log }>
        <Text style={ styles.logLabel }>{ props.label }</Text>
        <Text style={ styles.logChrono }>{ props.duration }</Text>
      </View>
      { props.comment !== null && props.comment.length > 0 && (
        <View style={ styles.comment }>
          <Text style={ styles.commentText }>{ props.comment }</Text>
        </View>
      ) }
    </View>
  );
}

export default connect(
  state => ({
    workouts: state.workouts,
    exercises: state.exercises,
    logs: state.logs
  }),
  null
)(
  class extends Component {
    render() {
      return (
        <ScrollView style={{ backgroundColor: 'white' }}>
          { this.props.logs.map((log, index) => (
            <Log
              key={ `feed-item-${index}` }
              username={ 'Razvan Ludosanu' }
              timestamp={ item.date }
              label={ item.label }
              duration={ item.duration }
              comment={ item.comment || null }
            />
          )) }
        </ScrollView>
      );
    }
  }
);
