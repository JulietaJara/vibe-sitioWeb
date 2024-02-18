import 'bootstrap/dist/css/bootstrap.css';
import { Image, StyleSheet, View } from 'react-native';
import DropdownMenu from '../components/DropdownMenu';

const Homepage = () => {
    return (
        <View style={styles.container}>
        <Image source={require('../images/logo_vibe.png')} style={styles.imagenDeFondo} />
        <DropdownMenu />
    </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 50, 
    },
    imagenDeFondo: {
      width: 200, 
      height: 200, 
      resizeMode: 'contain', 
    },
  });

export default Homepage;