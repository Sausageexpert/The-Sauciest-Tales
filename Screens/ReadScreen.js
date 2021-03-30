import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createAppContainer} from 'react-navigation';

export default class ReadScreen extends React.Component{
    render(){
        return(
            <View>
                <Text>Welcome, Bob the Dracula! Please don't eat the numbers on the screen, like
                    Horizon theme did, because that would be mean
                </Text>
            </View>
        );
    }
}