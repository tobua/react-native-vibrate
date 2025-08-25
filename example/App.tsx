/// <reference types="numic/types" />
import React from 'react'
import { StatusBar, StyleSheet, View, Text, Button } from 'react-native'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import { Vibrate } from 'react-native-nitro-vibrate'
import { vibrate } from 'react-native-vibrate'

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
  title: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  text: {
    fontSize: 16,
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
          <Text style={styles.title}>
            React Native Vibrate
          </Text>
          <Text style={styles.text}>
            Regular
          </Text>
          <Button title="Heavy" onPress={() => vibrate('heavy')} />
          <Button title="Medium" onPress={() => vibrate('medium')} />
          <Button title="Light" onPress={() => vibrate('light')} />
          <Text style={styles.text}>
            Nitro
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
