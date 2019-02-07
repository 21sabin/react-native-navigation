import React, { Component } from 'react';
import { View,Text,StyleSheet,Button } from 'react-native';

export default class HomeScreen extends Component {
  render() {
    return (
     <View style={styles.container}>
         <Text>HomeScreen</Text>
         <Button title="go to detailscreen" onPress={()=>this.props.navigation.navigate('Detail',{message:'hello from homeScren'})}/>
     </View>
    )
  }
}

//note 
    //way to pass params --> this.props.navigation.setParams({value:'xyz'})

const styles=StyleSheet.create({
    container:{
        flex:1,
      
    }
})
