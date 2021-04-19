import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Welcome } from './src/pages/Welcome';

export default function App() {
  return (
    <Welcome />
  );
}
// No reactive native não podemos retornar mais de uma tag no return
// Por isso tem essa view encapsulando tudo



// Link para o Layout do figma
// https://www.figma.com/file/8Xyhx7nrNagrYGj4FcAtgj/PlantManager-(Copy)?node-id=0%3A1
// codigo primeira aula: Missão Espacial