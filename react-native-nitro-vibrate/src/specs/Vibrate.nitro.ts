import type { HybridObject } from 'react-native-nitro-modules'

export type ImpactStyle = 'light' | 'medium' | 'heavy' | 'soft' | 'rigid'

export interface Vibrate extends HybridObject<{ ios: 'swift'; android: 'kotlin' }> {
  vibrate(impact: ImpactStyle): string
}
