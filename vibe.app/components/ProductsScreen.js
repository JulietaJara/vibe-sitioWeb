import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import "react-native-gesture-handler";

const ProductsDrawer = createDrawerNavigator();

const ProductsScreens = () => (
    <NavigationContainer>
        <ProductsDrawer.Navigator>
      <ProductsDrawer.Screen
          name="Inicio"
          options={{
            drawerLabel: "Inicio",
            title: "Inicio",
            drawerIcon: () => (
              <SimpleLineIcons name="home" size={18} color="#808080" />
            )
          }}
          component={Homepage} />
    </ProductsDrawer.Navigator>
    </NavigationContainer>
  );

  export default ProductsScreens;