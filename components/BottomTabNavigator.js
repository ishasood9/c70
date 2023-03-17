import React, { Component } from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//ta6
import Ionicons from 'react-native-vector-icons/Ionicons';

import TransactionScreen from '../screens/Transaction';
import SearchScreen from '../screens/Search';

//ta5
const Tab = createBottomTabNavigator();

export default class BottomTabNavigator extends Component {
  render() {
    return (
      //ta6
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            //ta7
            tabBarIcon: ({ focused, color, size }) => {
              //ta8
              let iconName;

              if (route.name === 'Transaction') {
                iconName = 'book';
              } else if (route.name === 'Search') {
                iconName = 'search';
              }

              // You can return any component that you like here!
              return (
                //ta8
                <Ionicons
                  name={iconName}
                  size={size}
                  color={color}
                  //size={size}
                />
              );
            },
          })}
          //ta9
          tabBarOptions={{
            activeTintColor: '#FFFFFF',
            inactiveTintColor: 'black',
            style: {
              height: 130,
              borderTopWidth: 0,
              backgroundColor: '#5653d4',
            },
            labelStyle: {
              fontSize: 20,
              fontFamily: 'Rajdhani_600SemiBold',
            },
            labelPosition: 'beside-icon',
            tabStyle: {
              marginTop: 25,
              marginLeft: 10,
              marginRight: 10,
              borderRadius: 30,
              borderWidth: 2,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#5653d4',
            },
          }}>
          <Tab.Screen name="Transaction" component={TransactionScreen} />
          <Tab.Screen name="Search" component={SearchScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}
