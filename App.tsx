import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}
      >Engenharia da Computação</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff1ce',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto: {
    fontSize: 30,
    color: '#000000',
    fontWeight: 'bold',
  }
});
