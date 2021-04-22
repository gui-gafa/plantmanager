import React from 'react';
import {
  SafeAreaView,
  StyleSheet, Text, View, TextInput,
  KeyboardAvoidingView,
  Platform
} from 'react-native'

import { Button } from '../components/Button';
import colors from '../styles/colors';
import fonts from '../styles/fonts';

export function Confirmation() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.emoji}>
          {'😀️'}
        </Text>
        <Text style={styles.title}>
          Prontinho
        </Text>
        <Text style={styles.subtitle}>
          Agora vamos começar a cuidar das suas {'\n'} plantinhas com muito carinho
        </Text>
        <View style={
          styles.footer
        }>
          <Button title={'Começar'} />
        </View>
      </View>
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  content: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  form: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 50,
    alignItems: 'center',
  },
  emoji: {
    fontSize: 44,

  },
  input: {
    borderBottomWidth: 1,
    borderColor: colors.gray,
    color: colors.heading,
    width: '100%',
    fontSize: 18,
    marginTop: 50,
    padding: 10,
    textAlign: 'center',
  },
  title: {
    fontSize: 22,
    textAlign: 'center',
    lineHeight: 32,
    color: colors.heading,
    fontFamily: fonts.heading,
    marginTop: 20,
  },
  subtitle: {
    fontSize: 17,
    textAlign: 'center',
    lineHeight: 32,
    color: colors.heading,
    fontFamily: fonts.text,
    marginTop: 20,
    paddingVertical: 20
  },
  footer: {
    width: '100%',
    marginTop: 40,
    paddingHorizontal: 75,
    alignItems: 'center',
  }
})