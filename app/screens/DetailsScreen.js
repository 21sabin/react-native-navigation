import React, { Component } from 'react';
import { View,Text,Button } from 'react-native'

export default class DetailsScreen extends Component {
    state={
        message:''
    }

    // static navigationOptions={
    //     headerTitle:'DetailScreen',
    //     headerTintColor:'teal',
    //     headerStyle:{
    //         backgroundColor:'#ccc'
    //     }
    // }

    static navigationOptions=({ navigation })=>{
        return {
            title:navigation.getParam('message','derault message if message property doesnot exist'),//we can create a button in title as well
            headerRight:<Button title="press me" onPress={()=>navigation.navigate('Home')} />
        }
    }

    componentDidMount(){
        console.log("compoentdid mount called",this.props.navigation.getParam)
        // console.log(this.props.navigation.state.params.message,"component didmount")
    }
    gotoDetailScreen(){
        this.props.navigation.push('Detail',{message:'new message'})
    }
  render() {
      const { navigation } =this.props;
    return (
     <View style={{flex:1,padding:10,justifyContent:'center'}}>
         <Text>DetailsScreen  { navigation.state.params.message }</Text>
         <Button title="go to detail screen" onPress={this.gotoDetailScreen.bind(this)}/>
         <Button title="go back" onPress={()=>this.props.navigation.goBack()}/>
     </View>
    )
  }
}
// { this.props.navigation.getParam('value','default value')}