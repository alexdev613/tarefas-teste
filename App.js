import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function App() {
  const [nome, setNome] = useState("Fulano");

  function handleMudaNome() {
    setNome("Alex Heisenberg");
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Alex</Text>
      <Text style={[styles.title, styles.text]}>Camarada Programador: {nome}</Text>
      
      <TouchableOpacity style={styles.button} onPress={handleMudaNome}>
        <Text style={styles.buttonText}>Mudar Nome</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#343434',
    paddingTop: 28,
  },
  title: {
    fontSize: 32,
    color: "#f1f1f1",
    fontWeight: 'bold',
    textAlign: 'center'
  },
  text: {
    color: "red"
  },
  button: {
    backgroundColor: 'blue',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 35,
  },
  buttonText: {
    color: '#FFF',
    fontWeight: 'bold'
  }
})