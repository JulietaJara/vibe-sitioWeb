import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import "react-native-gesture-handler";
import { Image, StyleSheet } from 'react-native';
import { SimpleLineIcons } from '@expo/vector-icons';
import Homepage from './components/Homepage';
import Products from './components/Products';
import Contacto from './components/Contacto';
import Informacion from './components/Informacion';

const styles = StyleSheet.create({
  headerImage: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
});

const ReactNavigationDrawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <ReactNavigationDrawer.Navigator initialRouteName="Home" screenOptions={{
        headerStyle: {
          height: 200, 
        },

        headerTitleAlign: 'center',
        headerTitle: () => (
          <Image
            source={require('./images/logo_vibe.png')}
            style={styles.headerImage}
          />
        ),
      }}>


        <ReactNavigationDrawer.Screen
          name="Inicio"
          options={{
            drawerLabel: "Inicio",
            title: "Inicio",
            drawerIcon: () => (
              <SimpleLineIcons name="home" size={18} color="#808080" />
            )
          }}
          component={Homepage} />

        <ReactNavigationDrawer.Screen
          name="Productos"
          options={{
            drawerLabel: "Productos",
            title: "Productos",
            drawerIcon: () => (
              <SimpleLineIcons name="tag" size={18} color="#808080" />
            )
          }}
          component={Products} />

        <ReactNavigationDrawer.Screen
          name="Contacto"
          options={{
            drawerLabel: "Contacto",
            title: "Contacto",
            drawerIcon: () => (
              <SimpleLineIcons name="phone" size={18} color="#808080" />
            )
          }}
          component={Contacto} />

        <ReactNavigationDrawer.Screen
          name="Terminos y condiciones"
          options={{
            drawerLabel: "Terminos y condiciones",
            title: "Terminos y condiciones",
            drawerIcon: () => (
              <SimpleLineIcons name="info" size={18} color="#808080" />
            )
          }}
          component={Informacion} />

      </ReactNavigationDrawer.Navigator>
    </NavigationContainer>
  );

}
