import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import "react-native-gesture-handler";

import StarMap from './Screens/StarMap';
import DailyPic from './Screens/DailyPic';
import SpaceCraft from './Screens/SpaceCrafts';
import HomeScreen from './Screens/HomeScreen';

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown : false}}>

        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="StarMap" component={StarMap} />
        <Stack.Screen name="DailyPic" component={DailyPic} />
        <Stack.Screen name="SpaceCraft" component={SpaceCraft} />
      
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
