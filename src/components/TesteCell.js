import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';



export default function TesteCell({ valor }) {
  return (
    <View style={styles.container}>
        <Text style={styles.text}>{valor}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderColor: '#000',
    borderWidth: 2,
    width: 100,
    height:100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text :{
    fontWeight:'bold',
    fontSize: 36
  }
});
