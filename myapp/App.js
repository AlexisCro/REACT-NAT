import { StatusBar } from 'expo-status-bar';
import { Animated, StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text
        style={{ marginBottom: 15, fontWeight: 'bold' }}
      >
        Hi I'm Alexis, a Web developper
      </Text>
      <Image 
        source={require ('./assets/img/profil_picture.jpg')}
        style={styles.profileImg} 
      />
      <Text>Welcome on my app !</Text>
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
  profileImg: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 15,
  },
});
