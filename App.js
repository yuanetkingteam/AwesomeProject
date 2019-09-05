//This is an example code for Navigator// 
import React, { Component } from 'react';
//import react in our code. 
//For React Navigation Version 2+
//import {createStackNavigator} from 'react-navigation';
//For React Navigation Version 3+
import {createStackNavigator,createAppContainer,createBottomTabNavigator} from 'react-navigation';
//import Navigator in our project
import ChexianFuwu from './pages/ChexianFuwu';
import ChewuGuanli from './pages/ChewuGuanli';
import GetMethodPage from './pages/GetMethodPage';

import Ionicons from 'react-native-vector-icons/Ionicons';

//import all the screens we are going to switch 
const App = createBottomTabNavigator({
  //Constant which holds all the screens like index of any book 
    First: ChexianFuwu, 
    //First entry by default be our first screen if we do not define initialRouteName
    Second: ChewuGuanli, 
    Third: GetMethodPage, 
  }, 
  { 
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        iconName = `ios-options`;
        // You can return any component that you like here!
        return <Ionicons name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
  },  
  {
    initialRouteName: 'Second',
  },
);
//Version 3+ changes are here. 
//In version 2+ createAppContainer was default container 
//but in version 3+ you have to export it manually
//For React Navigation Version 2+
//export default App;
//For React Navigation Version 3+
export default createAppContainer(App);