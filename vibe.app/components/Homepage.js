import 'bootstrap/dist/css/bootstrap.css';
import { Image, StyleSheet, View } from 'react-native';
import DropdownMenu from '../components/DropdownMenu';

const Homepage = () => {
  return (
      <View style={styles.container}>
        <View style={styles.dropdownContainer}>
              <DropdownMenu />
          </View>
          <View style={styles.logoContainer}>
              <Image source={require('../images/logo_vibe.png')} style={styles.imagenLogo} />
          </View>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',     
  },
  dropdownContainer: {  
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

export default Homepage;