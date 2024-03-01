import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Swiper from 'react-native-swiper';

const CarouselProducts = () => {
  const slides = [
    { id: 1, text: 'Slide 1', image: require('../images/mate1.png') },
    { id: 2, text: 'Slide 2', image: require('../images/taza1.png') },
    { id: 3, text: 'Slide 3', image: require('../images/jabonera1.png') },
  ];

  return (
    <Swiper
      index={0}
      loop={false}
      showsPagination
      dot={<View style={styles.paginationDot} />}
      activeDot={<View style={[styles.paginationDot, styles.activeDot]} />}
    >
      {slides.map((slide) => (
        <View key={slide.id} style={styles.slide}>
          {slide.image && (
            <Image source={slide.image} style={styles.image} resizeMode="contain" />
          )}
          <Text>{slide.text}</Text>
        </View>
      ))}
    </Swiper>
  );
};

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '70%', 
    height: '70%', 
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
});

export default CarouselProducts;
