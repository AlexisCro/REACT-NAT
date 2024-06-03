import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Image, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './_layout';

export default function TabHomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView> 
        
        <Image 
          source={require ('../../assets/img/logo-ong.png')}
          style={styles.profileImg} 
        />

        <Text
          style={styles.title}>
          Bienvenue sur "Sauver Des Vies"
        </Text>
        <Text
          style={styles.section}
        >
          Nous luttons contre la faim dans le monde en fournissant une aide alimentaire d'urgence,
          en soutenant l'agriculture durable et en promouvant l'autonomie des communautés vulnérables.
          Ensemble, nous pouvons créer un avenir sans faim.
        </Text>

        <Image
          source={require ('../../assets/img/home-img.jpg')}
          style={{ width: 400, height: 200}}
        />
        <Text
          style={styles.subTitle}>
          Notre Mission
        </Text>
        <Text
          style={styles.section}
        >
          Chez "Sauver Des Vies", notre mission est de mettre fin à la faim et à la malnutrition dans les régions les plus touchées du globe.
          Nous croyons en un monde où chaque individu a accès à une alimentation suffisante, saine et nutritive.
        </Text>

        <StatusBar style="auto" />
      </ScrollView>
    </SafeAreaView>
  );
}
