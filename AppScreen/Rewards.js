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
import {
    View,
    Text,
    Image,
    StyleSheet,
    ScrollView,
    TouchableOpacity,

} from 'react-native';

import { defaultStyle } from "../Stylesheet/defaultStyle";

import Ionicons from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//==========================================================================================
// const begins here
//==========================================================================================

const Rewards = ({ navigation }) => {

    const Tab = createBottomTabNavigator();
    
    //==========================================================================================
    // return
    //==========================================================================================

    return (
        <ScrollView style={defaultStyle.container}>

            <Text>XXXXXXX</Text>
            
           
        </ScrollView>

    );
};

export default Rewards;