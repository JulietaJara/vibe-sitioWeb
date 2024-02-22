import React from 'react';
import { Image, StyleSheet, View, TouchableHighlight, Text, Linking } from 'react-native';

const Contacto = () => {
  const handleWhatsAppPress = async () => {
    const phoneNumber = '541561863395';
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
      </View>
      <TouchableHighlight onPress={handleWhatsAppPress}>
        <Text style={styles.whatsappLink}>Enviar mensaje por WhatsApp</Text>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
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
  whatsappLink: {
    color: '#0074cc',
    textDecorationLine: 'underline',
    fontWeight: 'bold',
  },
});

export default Contacto;
