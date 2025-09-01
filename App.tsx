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
  row: {
    flexDirection: 'row'
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  text: {
    fontSize: 16,
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
            TurboModule
          </Text>
          <View style={styles.row}>
            <Button title="Heavy" onPress={() => vibrate('heavy')} />
            <Button title="Medium" onPress={() => vibrate('medium')} />
            <Button title="Light" onPress={() => vibrate('light')} />
            <Button title="Rigid" onPress={() => vibrate('rigid')} />
            <Button title="Soft" onPress={() => vibrate('soft')} />
          </View>
          <Text style={styles.text}>
            NitroModule
          </Text>
          <View style={styles.row}>
            <Button title="Heavy" onPress={() => Vibrate.vibrate('heavy')} />
            <Button title="Medium" onPress={() => Vibrate.vibrate('medium')} />
            <Button title="Light" onPress={() => Vibrate.vibrate('light')} />
            <Button title="Rigid" onPress={() => Vibrate.vibrate('rigid')} />
            <Button title="Soft" onPress={() => Vibrate.vibrate('soft')} />
          </View>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  )
}
