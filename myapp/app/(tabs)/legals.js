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
          Les mentions légales ??
        </Text>

        <Image
          source={require ('../../assets/img/no-legals.jpg')}
          style={customStyles.img} 
        />

        <Text
          style={styles.section}>
          Le Saviez-vous ??        
        </Text>

        <Text
          style={styles.section}>
          Le site "Sauver des vies" est un site qui ne possède pas de mentions légales alors que c'est obligatoire.
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const customStyles = StyleSheet.create({
  img: {
    width: 400,
  }
});
