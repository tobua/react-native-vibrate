import { TurboModuleRegistry, type TurboModule } from 'react-native'

export type ImpactStyle = 'light' | 'medium' | 'heavy' | 'soft' | 'rigid'

export interface Specification extends TurboModule {
  vibrate(impact: ImpactStyle): Promise<string>;
}

const Vibrate = TurboModuleRegistry.getEnforcing<Specification>('Vibrate')

export async function vibrate(impact: ImpactStyle) {
  return Vibrate.vibrate(impact)
}
