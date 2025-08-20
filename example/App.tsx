/// <reference types="numic/types" />
import React from 'react'
import { StatusBar, StyleSheet, View, Text, Button } from 'react-native'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import { Vibrate } from 'react-native-nitro-vibrate'
import * as allExports from 'react-native-nitro-vibrate'

console.log({ allExports })

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: '#FFFFFF',
    flex: 1,
  },
  wrapper: {
    padding: 20,
    alignItems: 'center',
    gap: 40,
  },
  image: {
    width: 100,
    height: 100,
    marginTop: 40,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  mode: {
    fontSize: 16,
  },
  green: {
    color: '#3add85',
  },
})

export function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.safeArea}>
        <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
        <View style={styles.wrapper}>
          <Text style={styles.text}>
            React Native Vibrate
          </Text>
          <Button title="Vibrate Light" onPress={() => alert(Vibrate.vibrate('light'))} />
          <Button title="Heavy" onPress={() => Vibrate.vibrate('heavy')} />
          <Button title="medium" onPress={() => Vibrate.vibrate('medium')} />
          <Button title="rigid" onPress={() => Vibrate.vibrate('rigid')} />
          <Button title="soft" onPress={() => Vibrate.vibrate('soft')} />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  )
}
