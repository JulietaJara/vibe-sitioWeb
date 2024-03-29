import 'bootstrap/dist/css/bootstrap.css';
import { Image, StyleSheet, View, Text } from 'react-native';

const Informacion = () => {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Text style={styles.textoDebajo}>
          <Text style={styles.destacado}>Nuestras piezas se piden con 30 días de antelación,</Text>
          {' '}
          ya que requieren dos cocciones en horno. Podemos personalizar cualquier pieza que desees para ese evento especial que tengas, y estaremos encantadas de asesorarte. Aceptamos pagos en efectivo o a través de MercadoPago.
          {' '}
          <Text style={styles.destacado}>Una vez seleccionada la(s) pieza(s), se abonará la mitad del importe total.</Text>
          {' '}
          El resto se abonará al momento de la entrega. Una vez terminadas las piezas, nos pondremos en contacto contigo para coordinar la entrega.
          {' '}
          Esta puede realizarse en un punto de encuentro o a domicilio, si este se encuentra cerca del taller. Si las piezas no son retiradas en 20 días, pasarán a ser propiedad del taller de arte.
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  logoContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  textoDebajo: {
    textAlign: 'justify',
    fontSize: 16,
    lineHeight: 24,
    color: '#333',
    margin: 20
  },
  destacado: {
    fontWeight: 'bold',
    color: '#2351a7',
    marginTop: 6
  },
});

export default Informacion;