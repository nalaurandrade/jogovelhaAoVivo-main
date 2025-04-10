import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Home() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Escolha o modo de jogo</Text>

      <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate('HumanoVsHumano')}>
        <Text style={styles.botaoTexto}>Humano vs Humano</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate('HumanoVsMaquina')}>
        <Text style={styles.botaoTexto}>Humano vs Máquina</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate('MaquinaVsMaquina')}>
        <Text style={styles.botaoTexto}>Máquina vs Máquina</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 28,
    marginBottom: 40,
  },
  botao: {
    backgroundColor: '#6200ee',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginVertical: 10,
    width: '80%',
    alignItems: 'center',
  },
  botaoTexto: {
    color: '#fff',
    fontSize: 18,
  },
});
