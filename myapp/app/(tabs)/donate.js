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
    alert(`Merci ${name} pour votre don de ${donation} €`);
  };

  return(
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text
          style={styles.title}
        >
          Dons
        </Text>

        <View style={customStyles.formContainer}>
          <Controller
            control={control}
            render={({ field }) => (
              <TextInput
                id="amount"
                onChangeText={setDonation}
                style={styles.input}
                placeholder="Montant du don"
                value={donation}
                keyboardType='numeric'
                {...field}
              />
            )}
            name="amount"
            rules={{ required: 'Sois pas radin', type: 'number'}}
          />

          <Controller
            control={control}
            render={({ field }) => (
              <TextInput
                id="name"
                style={styles.input}
                placeholder="Ton nom pour te retrouver"
                onChangeText={setName}
                value={name}
                {...field}
              />
            )}
            name="name"
            rules={{ required: 'Aie confiance !!', type: 'string'}}
          />
          
          <Button 
            title="Submit"
            onPress={() => {
              onSubmit();
              setDonation(0);
              setName('');
            }} />     
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const customStyles = StyleSheet.create({
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