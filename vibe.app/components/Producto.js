import 'bootstrap/dist/css/bootstrap.css';
import { Image, StyleSheet, View } from 'react-native';
import CarouselProducts from './CarouselProducts'

const Producto = () => {
  return (
      <View style={styles.container}>
          <CarouselProducts />
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',     
  },
  logoContainer:{
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  imagenLogo: {
      width: 200, 
      height: 200, 
      resizeMode: 'contain', 
  },
});

export default Producto;