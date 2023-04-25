/*
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * Practical - Navigation Applications
 *
 */

import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// For importing the vector icons
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

// For importing the app page
import Home from './AppScreen/Home';
import Rewards from './AppScreen/Rewards';
import Profile from './AppScreen/Profile';

const Stack = createStackNavigator();

const App = () => {

  const Tab = createBottomTabNavigator();

  return (

    <NavigationContainer>

      {/* Tab navigator starts here*/}

      <Tab.Navigator initialRouteName="SG Service"

        screenOptions={({ route }) => ({

          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'ios-information-circle'
                : 'ios-information-circle-outline';
                return <Ionicons name='md-home' size={24} color={focused ? "#1976D2" : "#8e8e93"} />;
            } 

            if (route.name === 'Rewards') {
              iconName = focused
                ? 'ios-information-circle'
                : 'ios-information-circle-outline';
                return <MaterialIcons name='redeem' size={24} color={focused ? "#1976D2" : "#8e8e93"} />;
            } 

            if (route.name === 'Profile') {
              iconName = focused
                ? 'ios-information-circle'
                : 'ios-information-circle-outline';
                return <Ionicons name='ios-person' size={24} color={focused ? "#1976D2" : "#8e8e93"} />;
            } 

            
          },
        })}>

        <Tab.Screen name="Home" component={Home} options={{ headerStyle: { backgroundColor: '#09A223' }, headerTitleStyle: { color: 'white' }, headerTitleAlign: 'center' }} />
        <Tab.Screen name="Rewards" component={Rewards} options={{ headerStyle: { backgroundColor: '#09A223' }, headerTitleStyle: { color: 'white' }, headerTitleAlign: 'center' }} />
        <Tab.Screen name="Profile" component={Profile} options={{ headerStyle: { backgroundColor: '#09A223' }, headerTitleStyle: { color: 'white' }, headerTitleAlign: 'center' }} />

      </Tab.Navigator>

    </NavigationContainer>

  );
};

export default App;