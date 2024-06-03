import { Text, View, StyleSheet, ScrollView, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './_layout';

export default function TabSettingsScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text
          style={styles.title}
        >
          Qui sommes nous ?
        </Text>

        <Image
          source={require ('../../assets/img/logo-ong-favicon.png')}
          style={styles.img} 
        />

        <Text
          style={styles.section}>
        Nous sommes une organisation non gouvernementale dédiée à la lutte contre la faim et la malnutrition.
        Depuis notre création en {new Date().getFullYear()},
        nous avons touché des millions de vies grâce à nos programmes d'aide alimentaire, d'agriculture durable et de sensibilisation.
        </Text>

        <Image
          source={require ('../../assets/img/team.jpg')}
          style={{ width: 400}}
        />

        <Text
          style={styles.section}>
          Notre équipe est composée de professionnels de l'humanitaire, de l'agriculture et de la santé.
          Nous travaillons ensemble pour apporter des solutions durables aux problèmes de la faim et de la malnutrition dans le monde.
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}
