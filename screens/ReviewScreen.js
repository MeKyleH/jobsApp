import React, { Component } from 'react';
import { Platform, Text, View } from 'react-native';
import { Button } from 'react-native-elements';
import { connect } from 'react-redux';

class ReviewScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
       title: 'Review Jobs',
       headerRight: (
         <Button
           title="Settings"
           onPress={() => navigation.navigate('settings')}
           backgroundColor="rgba(0,0,0,0)"
           color="rgba(0, 122, 255, 1)"
         />
       ),
       style: {
         marginTop: Platform.OS === 'android' ? 24 : 0
       }
    };
  };

  render() {
    return (
      <View>

      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return { likedJobs: state.likedJobs };
};

export default (mapStateToProps)(ReviewScreen);
