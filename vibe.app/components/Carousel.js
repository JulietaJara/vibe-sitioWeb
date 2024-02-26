import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Swiper from 'react-native-swiper';

const Carousel = () => {
  
  return (
    <Swiper index={0} loop={false} showsPagination>
      <Image
      source={require('../images/logo_vibe.png')} resizeMode='center'/>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Slide 2</Text>
      </View>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Slide 3</Text>
      </View>
    </Swiper>
  );
};

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  paginationContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  paginationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 5,
    backgroundColor: 'gray', // Cambia esto al color que desees
  },
  activeDot: {
    backgroundColor: 'blue', // Cambia esto al color que desees para el punto activo
  },
  inactiveDot: {
    backgroundColor: 'gray', // Cambia esto al color que desees para los puntos inactivos
  },
});

export default Carousel;
