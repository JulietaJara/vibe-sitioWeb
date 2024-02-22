import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import "react-native-gesture-handler";
import Homepage from './components/Homepage';
import Producto from './components/Producto';
import Contacto from './components/Contacto';
import Informacion from './components/Informacion';



const ReactNavigationDrawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <ReactNavigationDrawer.Navigator initialRouteName="Home">
        <ReactNavigationDrawer.Screen name="Inicio" component={Homepage} />
        <ReactNavigationDrawer.Screen name="Productos" component={Producto} />
        <ReactNavigationDrawer.Screen name="Contacto" component={Contacto} />
        <ReactNavigationDrawer.Screen name="+ Información" component={Informacion}/>

      </ReactNavigationDrawer.Navigator>
    </NavigationContainer>
  );
}
