import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { SafeAreaView, ScrollView, Text, View, TextInput, Button, StyleSheet, Pressable } from 'react-native';
import { styles } from './_layout';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

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
      setActions((prevActions) => [..prevActions, action]);
    } else {
      alert('Veuillez saisir une action');
    }

    setAction('');
  }

  return (
    <View style={styles.formContainer}>
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

      <SafeAreaView style={{height: 500, paddingBottom: 30}}>
        <ScrollView style={{marginTop: 40 }}>
          {actions.map((action, index) => (
            <View key={index} style={customStyles.action}>
              <Text>{action}</Text>
              <Pressable onPress={() => deleteAction(index)}>
                <MaterialIcons size={25} name='delete' style={customStyles.btnDelete} />
              </Pressable>
            </View>
          ))}
        </ScrollView>
      </SafeAreaView>
    </View>
  )
}

const customStyles = StyleSheet.create({
  action: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: "space-between",
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 15,
    padding: 5,
    alignItems: 'center'
  },
  btnDelete: {
    backgroundColor: 'red',
    color: 'white',
    padding: 5,
    borderRadius: 5
  }

})
