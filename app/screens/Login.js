import React, { Component } from 'react';
import {View,Text,Button} from 'react-native'

export default class Login extends Component {
  render() {
    return (
     <View>
         <Button title="click to login" onPress={()=>this.props.navigation.navigate('Home')}/>
     </View>
    )
  }
}
