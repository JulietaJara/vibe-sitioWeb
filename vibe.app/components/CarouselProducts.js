import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import Swiper from 'react-native-swiper';

const CarouselProducts = () => {
  const slides = [
    { id: 1, text: 'Slide 1', image: require('../images/mate1.png') },
    { id: 2, text: 'Slide 2', image: require('../images/taza1.png') },
    { id: 3, text: 'Slide 3', image: require('../images/jabonera1.png') },
    { id: 4, text: 'Slide 2', image: require('../images/taza2.png') },
    { id: 5, text: 'Slide 2', image: require('../images/taza3.png') },
    { id: 6, text: 'Slide 2', image: require('../images/taza4.png') },
    { id: 7, text: 'Slide 2', image: require('../images/taza5.png') },
    { id: 8, text: 'Slide 2', image: require('../images/taza6.png') },
    { id: 9, text: 'Slide 2', image: require('../images/taza7.png') },
    { id: 10, text: 'Slide 2', image: require('../images/taza8.png') },  
  ];

  const itemWidth = Dimensions.get('window').width; // Ancho de la pantalla

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
        <View key={index} style={[styles.slide, { width: itemWidth }]}>
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
    //justifyContent: 'center',
  },
  imageContainer: {
    flex: 1,
    alignItems: 'flex-start',
  },
  image: {
    width: '30%', 
    height:'30%'
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
