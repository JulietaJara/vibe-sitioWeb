import React from 'react';
import { View, Text } from 'react-native';
import Swiper from 'react-native-swiper';

const Carousel = () => {
  return (
    <Swiper>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Slide 1</Text>
      </View>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Slide 2</Text>
      </View>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Slide 3</Text>
      </View>
    </Swiper>
  );
};

export default Carousel;
