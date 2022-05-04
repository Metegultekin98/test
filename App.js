import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, TextInput, Image } from 'react-native';
import SearchBar from './components/SearchBar';

export default function App() {
  return (
    <View style={styles.container}>
      <Image style={styles.imgStyle} source={require('./assets/varlik2_2.png')} />
      <SearchBar />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  imgStyle: {
    width: 116,
    height: 85,
    marginTop: 51,
    marginBottom: 35,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
