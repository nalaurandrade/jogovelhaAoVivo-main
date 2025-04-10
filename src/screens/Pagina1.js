import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function Pagina1({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Escolha o modo de jogo:</Text>

      {/* Botão 1 */}
      <TouchableOpacity 
        style={styles.button} 
        onPress={() => navigation.navigate('Pagina3')}
      >
        <Text style={styles.buttonText}>Humano x Humano</Text>
      </TouchableOpacity>

      {/* Botão 2 */}
      <TouchableOpacity 
        style={styles.button} 
        onPress={() => navigation.navigate('Pagina2')}
      >
        <Text style={styles.buttonText}>Humano x Máquina</Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 40,
    fontWeight: 'bold',
  },
  button: {
    marginVertical: 10,
    padding: 15,
    backgroundColor: '#6200ee',
    borderRadius: 10,
    width: 250,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
});
