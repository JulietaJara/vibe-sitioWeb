import 'bootstrap/dist/css/bootstrap.css';
import { Text, StyleSheet, View } from 'react-native';
import CarouselProducts from './CarouselProducts'

const Producto = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}> #Destacados </Text>
      <View style={styles.carousel}>
        <CarouselProducts />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  carousel: {
    //flex: 1,
    //flexDirection: 'row',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  container: {
    margin: 10
  }
});

export default Producto;