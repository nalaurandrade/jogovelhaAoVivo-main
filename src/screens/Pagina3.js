import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';
import { useState, useEffect } from 'react';

export default function Pagina3() {
  const [tabuleiro, setTabuleiro] = useState(Array(9).fill(''));
  const [jogadorAtual, setJogadorAtual] = useState('X');
  const [jogoAtivo, setJogoAtivo] = useState(true);



  function fazerJogada(index) {
    if (tabuleiro[index] !== '' || !jogoAtivo) return;

    const novoTabuleiro = [...tabuleiro];
    novoTabuleiro[index] = jogadorAtual;
    setTabuleiro(novoTabuleiro);

    if (verificarVencedor(novoTabuleiro)) {
      setJogoAtivo(false);
      Alert.alert('Fim de jogo', `Jogador ${jogadorAtual} venceu!`);
    } else if (!novoTabuleiro.includes('')) {
      setJogoAtivo(false);
      Alert.alert('Fim de jogo', 'Empate!');
    } else {
      setJogadorAtual(jogadorAtual === 'X' ? 'O' : 'X');
    }
  }

  function verificarVencedor(tab) {
    const combinacoes = [
      [0,1,2], [3,4,5], [6,7,8], 
      [0,3,6], [1,4,7], [2,5,8], 
      [0,4,8], [2,4,6],         
    ];

    return combinacoes.some(combinacao => {
      const [a, b, c] = combinacao;
      return tab[a] !== '' && tab[a] === tab[b] && tab[b] === tab[c];
    });
  }

  function reiniciarJogo() {
    setTabuleiro(Array(9).fill(''));
    setJogadorAtual('X');
    setJogoAtivo(true);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Humano vs Humano</Text>

      <View style={styles.tabuleiro}>
        {tabuleiro.map((valor, index) => (
          <TouchableOpacity 
            key={index} 
            style={styles.celula} 
            onPress={() => fazerJogada(index)}
          >
            <Text style={styles.celulaTexto}>{valor}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <TouchableOpacity style={styles.botao} onPress={reiniciarJogo}>
        <Text style={styles.botaoTexto}>Reiniciar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 28,
    marginBottom: 20,
  },
  tabuleiro: {
    width: 300,
    height: 300,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  celula: {
    width: '33.33%',
    height: '33.33%',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  celulaTexto: {
    fontSize: 48,
  },
  botao: {
    marginTop: 30,
    padding: 15,
    backgroundColor: '#6200ee',
    borderRadius: 8,
  },
  botaoTexto: {
    color: '#fff',
    fontSize: 18,
  },
});
