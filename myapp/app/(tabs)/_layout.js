import { Tabs } from 'expo-router';
import { StyleSheet } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';


export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{ 
          title: "Accueil",
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={ color } /> 
        }} 
      />

      <Tabs.Screen
        name="about"
        options={{ 
          title: "A propos",
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="info-circle" color={ color } /> 
        }} 
      />

      <Tabs.Screen
        name="donate"
        options={{ 
          title: "Dons",
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="money" color={ color } /> 
        }} 
      />

      <Tabs.Screen
        name="good_actions"
        options={{ 
          title: "Mes actions",
          tabBarIcon: ({ color }) => <MaterialIcons size={28} name="pending-actions" color={ color } /> 
        }} 
      />

      <Tabs.Screen
        name="legals"
        options={{ 
          title: "Mentions Légales",
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="legal" color={ color } /> 
        }} 
      />
    </Tabs>
  );
}

export const styles = StyleSheet.create({
  container: {
    height: '100%',
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'start',
    padding: 10,
    overflow: 'auto'
  },
  img: {
    marginLeft: '25%'
  },
  profileImg: {
    margin: 5,
    padding: 10,
    width: 320,
    height: 100,
    marginLeft: '15%'
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  subTitle:{
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  section: {
    marginTop: 20,
    backgroundColor: '#f4cddc',
    padding: 10,
    width: 400,
    textAlign: 'center'
  },
  input: {
    margin: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#fff'
  },
  formContainer: {
    marginTop: 40,
    padding: 10,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 15,
    padding: 30
  }
});
