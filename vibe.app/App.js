import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import "react-native-gesture-handler";
import Homepage from './components/Homepage';

const ReactNavigationDrawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <ReactNavigationDrawer.Navigator initialRouteName="Home">
        <ReactNavigationDrawer.Screen name="Home" component={Homepage} />
      </ReactNavigationDrawer.Navigator>
    </NavigationContainer>
  );
}
