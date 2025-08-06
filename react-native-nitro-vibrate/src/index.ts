import { NitroModules } from 'react-native-nitro-modules'
import { type Vibrate } from './specs/Vibrate.nitro'

export * from './specs/Vibrate.nitro'

export const HybridVibrate = NitroModules.createHybridObject<Vibrate>('Vibrate')