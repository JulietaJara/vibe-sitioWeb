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
      <View style={styles.whatsappLinkContainer}>
      <TouchableHighlight style={styles.button} onPress={handleWhatsAppPress}>
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
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 50,
    elevation: 3,
    backgroundColor: '#128c7e',
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
    color: 'white',
    fontWeight: 'bold',
  },
});

export default Contacto;
