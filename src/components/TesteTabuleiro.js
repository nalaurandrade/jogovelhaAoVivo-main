import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import TesteCell from './TesteCell';



export default function TesteTabuleiro() {
  return (
    <View style={styles.container}>
        <TesteCell valor={'--'} />
        <TesteCell valor={'--'} />
        <TesteCell valor={'--'} />
        <TesteCell valor={'--'} />
        <TesteCell valor={'--'} />
        <TesteCell valor={'--'} />
        <TesteCell valor={'--'} />
        <TesteCell valor={'--'} />
        <TesteCell valor={'--'} />        
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection:'row',
    flexWrap:'wrap',
    width:300
  }
});
