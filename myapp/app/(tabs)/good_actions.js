import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { SafeAreaView, ScrollView, Text, View, TextInput, Button, StyleSheet } from 'react-native';
import { styles } from './_layout';

export default function TabActionsScreen() {
  const [actions, setActions] = useState([]);
  const [action, setAction] = useState('');

  // Get storage actions
  useEffect(() => {
    AsyncStorage.getItem('actions').then((data) => {
      if (data) {
        setActions(JSON.parse(data));
      }
    });
  }, []);

  // Save actions to storage
  useEffect(() => {
    AsyncStorage.setItem('actions', JSON.stringify(actions));
  }, [actions]);

  // Delete action form the list
  function deleteAction(index) {
    setActions(actions.filter((_, i) => i !== index));
  }

  // Add action to the list
  function addAction() {
    if (action != "") {
      setActions([...actions, action]);
    } else {
      alert('Veuillez saisir une action');
    }

    setAction('');
  }

  return (
    <View>
      <Text>Mes actions</Text>
      <TextInput
        style={styles.input}
        placeholder="Nouvelle action"
        value={action}
        onChangeText={(text) => setAction(text)}
      />
      <Button
        title="Ajouter"
        onPress={addAction}
      />
      <ScrollView>
        {actions.map((action, index) => (
          <View key={index}>
            <Text>{action}</Text>
            <Button title="Supprimer" onPress={() => deleteAction(index)}/>
          </View>
        ))}
      </ScrollView>
    </View>
  )
}
