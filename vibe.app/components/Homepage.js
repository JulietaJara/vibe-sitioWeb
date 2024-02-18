import './Homepage.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Image, StyleSheet, View } from 'react-native';

const Homepage = () => {
    return (
        <View style={styles.container}>
        <Image source={require('../images/logo_vibe.png')} style={styles.imagenDeFondo} />
    </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 50, // Ajusta la distancia desde la parte superior según tus necesidades
    },
    imagenDeFondo: {
      width: 200, // Ajusta el ancho según tus necesidades
      height: 200, // Ajusta la altura según tus necesidades
      resizeMode: 'contain', // Ajusta según tus necesidades
    },
  });

export default Homepage;