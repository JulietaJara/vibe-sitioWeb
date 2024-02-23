import React from 'react';
import { Image, StyleSheet, View, TouchableHighlight, Text, Linking } from 'react-native';

const Contacto = () => {
  const handleWhatsAppPress = async () => {
    const whatsappLink = "https://wa.me/541561863395";

    const canOpenWhatsApp = await Linking.canOpenURL(whatsappLink);
    if (canOpenWhatsApp) {
      Linking.openURL(whatsappLink);
    } else {
      console.log('WhatsApp no está instalado en el dispositivo.');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={require('../images/logo_vibe.png')} style={styles.imagenLogo} />
      </View >
      <View style={styles.whatsappLinkContainer}>
      <TouchableHighlight onPress={handleWhatsAppPress}>
        <Text style={styles.whatsappLink}>Enviar mensaje por WhatsApp</Text>
      </TouchableHighlight>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  dropdownContainer: {},
  logoContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  imagenLogo: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
  whatsappLinkContainer: {
    flex: 1,
    justifyContent: 'flex-start', 
    alignItems: 'center',
  },
  whatsappLink: {
    color: '#00da60',
    textDecorationLine: 'underline',
    fontWeight: 'bold',
  },
});

export default Contacto;
