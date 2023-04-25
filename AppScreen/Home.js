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

const Home = ({ navigation }) => {

    const Tab = createBottomTabNavigator();
    
    //==========================================================================================
    // return
    //==========================================================================================

    return (
        <ScrollView style={defaultStyle.container}>

            <Text>XXXXXXXXXXX</Text>
            
        

        </ScrollView>

    );
};

export default Home;