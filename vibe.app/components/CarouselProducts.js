import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import Swiper from 'react-native-swiper';

const CarouselProducts = () => {
  const slides = [
    { id: 1, text: 'Slide 1', image: require('../images/mate1.png') },
    { id: 2, text: 'Slide 2', image: require('../images/taza1.png') },
    { id: 3, text: 'Slide 3', image: require('../images/jabonera1.png') },
  ];

  const itemWidth = Dimensions.get('window').width; // Ancho del item

  return (
    <Swiper
      style={styles.wrapper}
      index={0}
      loop={false}
      showsPagination
      dot={<View style={styles.paginationDot} />}
      activeDot={<View style={[styles.paginationDot, styles.activeDot]} />}
    >
      {[0, 1].map((index) => (
        <View key={index} style={styles.slide}>
          {slides.slice(index * 4, (index + 1) * 4).map((slide) => (
            <View key={slide.id} style={styles.imageContainer}>
              {slide.image && (
                <Image source={slide.image} style={styles.image} resizeMode="contain" />
              )}
              <Text>{slide.text}</Text>
            </View>
          ))}
        </View>
      ))}
    </Swiper>
  );
};

const styles = StyleSheet.create({
  wrapper: {},
  slide: {
    flex: 1,
    flexDirection: 'row',
    
    justifyContent: 'center',
    //alignItems: 'center',
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '25%', // Ancho de cada imagen
  },
  image: {
    width: '100%', 
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
