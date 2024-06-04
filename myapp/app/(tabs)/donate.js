import { View, Text, StyleSheet, TextInput, Button, SafeAreaView, ScrollView } from 'react-native';
import { styles } from './_layout';
import React from 'react';
import { useState } from 'react';
import { useForm, Controller, set } from 'react-hook-form';

export default function TabDonateScreen() {
  const { control, formState: { errors } } = useForm();
  const [donation, setDonation] = useState(0);
  const [name, setName] = useState('');

  function onSubmit() {
    if (donation == 0 && name == '') {
      alert('Veuillez saisir un montant et un nom');
      return;
    } else if(donation < 5) {
      alert('Soit pas radin, donne au moins 5€')
      return;
    } else if(name == '') {
      alert('Veuillez saisir un nom');
      return;
    } else {
      alert(`Merci ${name} pour votre don de ${donation} €`);
    }

    setDonation(0);
    setName('');
  };

  return(
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text
          style={styles.title}
        >
          Dons
        </Text>

        <View style={styles.formContainer}>
          <TextInput
            id="amount"
            onChangeText={(value) => setDonation(value)}
            style={styles.input}
            placeholder="Montant du don"
            value={donation}
            keyboardType='numeric'
          />

          <TextInput
            id="name"
            style={styles.input}
            placeholder="Ton nom pour te retrouver"
            onChangeText={(text) => setName(text)}
            value={name}
          />
          
          <Button 
            title="Submit"
            onPress={() => {
              onSubmit();
            }} />     
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
