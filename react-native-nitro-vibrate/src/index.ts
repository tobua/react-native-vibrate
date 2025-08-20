import { NitroModules } from 'react-native-nitro-modules'
import { type Vibrate as Module } from './specs/Vibrate.nitro'

export * from './specs/Vibrate.nitro'

export const Vibrate = NitroModules.createHybridObject<Module>('Vibrate')
