/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { createStackNavigator ,createSwitchNavigator,createBottomTabNavigator } from 'react-navigation';
import HomeScreen from './app/screens/HomeScreen';
import DetailsScreen from './app/screens/DetailsScreen';
import ProfileScreen from './app/screens/ProfileScreen';
import SettingScreen from './app/screens/SettingScreen';
import Login from './app/screens/Login'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});



// class ScreenComponentTwo extends Component {
//   render() {
//     return (
//       <View>
//       <Text>Component2</Text>
//   <Button title="Component2" onPress={ ()=>this.props.navigation.navigate('RouteOne')} />
//     </View>
//     )
//   }
// }



//  class ScreenComponentOne extends Component {
//   render() {
//     return (
//       <View>
//       <Text>Component1</Text>
//   <Button title="Component1"  onPress={ ()=>this.props.navigation.navigate('RouteTwo')}/>
//     </View>
//     )
//   }
// }


 export default class App extends Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
      <View style={styles.container}>
        {/* <TabNavigator/> */}
        <AppNavigator />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

const HomeStack = createStackNavigator({
  Home:HomeScreen,
  Detail:DetailsScreen

} ,{
  initialRouteName: 'Home',
  /* The header config from HomeScreen is now here */
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: '#f4511e',
    },
    headerTintColor: 'green',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  }

})
const SettingStack = createStackNavigator({
  setting:SettingScreen,
  profile:ProfileScreen
})
const TabNavigator = createBottomTabNavigator({
  Home:HomeStack,
  Setting:SettingStack
})
const AppNavigator=createSwitchNavigator({
  Login:Login,
  TabNav:TabNavigator
})

//the above code is composing navigator





// const AppRoute = createSwitchNavigator({
//   RouteOne:ScreenComponentOne,
//   RouteTwo:ScreenComponentTwo
// },{
//   initialRouteName:'RouteOne'
// })


//note we can pass screenProps globally to the navigator