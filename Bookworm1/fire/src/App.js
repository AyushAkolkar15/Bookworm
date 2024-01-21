import * as React from 'react';
import HomeScreen from "./Home"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FictionScreen from "./Fiction";
import ComedyScreen from "./Comedy";
import UploadScreen from "./Upload";
import { Text, SafeAreaView, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />  
        <Tab.Screen name="Fiction" component={FictionScreen} /> 
        <Tab.Screen name="Comedy" component={ComedyScreen} />
        <Tab.Screen name="Upload" component={UploadScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;

