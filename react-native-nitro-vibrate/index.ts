import { NitroModules } from 'react-native-nitro-modules'
import { type MyVibrate as Module } from './Vibrate.nitro'

export * from './Vibrate.nitro'

export const Vibrate = NitroModules.createHybridObject<Module>('MyVibrate')
