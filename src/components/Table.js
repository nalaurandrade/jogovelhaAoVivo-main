
import { StyleSheet, View } from 'react-native';
import { useState } from 'react';
import Cell from './Cell';

export default function Table() {
  const [tabuleiro, setTabuleiro] = useState(Array(9).fill('--'));
  const [jogadorX, setJogadorX] = useState(true);

  function fazJogada(index) {
    
    if (tabuleiro[index] !== '--') return;

    const novoTabuleiro = [...tabuleiro]; 
    novoTabuleiro[index] = jogadorX ? 'X' : 'O';

    setTabuleiro(novoTabuleiro);
    setJogadorX(!jogadorX);
  }

  return (
    <View style={styles.board}>
      {tabuleiro.map((valor, index) => (
        <Cell 
          key={index}
          value={valor}
          onPress={() => fazJogada(index)}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  board: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: 300,
  },
});
