import { View, Text, StyleSheet, TextInput, Button, SafeAreaView, ScrollView } from 'react-native';
import { styles } from './_layout';
import React from 'react';
import { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { useEffect } from 'react';

export default function TabDonateScreen() {
  const { control, handleSubmit, formState: { errors } } = useForm();
  const [donation, setDonation] = useState(0);
  const [name, setName] = useState('');

  const onSubmit = data => {
    alert(`Merci ${name} pour votre don de ${donation} €`);
    setDonation('');
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

        <View style={customStyles.formContainer}>
          <Controller
            control={control}
            render={({ field }) => (
              <TextInput
                id="amount"
                onChangeText={setDonation}
                style={customStyles.input}
                placeholder="Montant du don"
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
                style={customStyles.input}
                placeholder="Ton nom pour te retrouver"
                onChangeText={setName}
                {...field}
              />
            )}
            name="name"
            rules={{ required: 'Aie confiance !!', type: 'string'}}
          />
          
          <Button title="Submit" onPress={onSubmit} />     
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