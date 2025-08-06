import type { HybridObject } from 'react-native-nitro-modules'

export interface Vibrate extends HybridObject<{ ios: 'swift'; android: 'kotlin' }> {
  vibrate(a: number, b: number): number
}
