import { TurboModuleRegistry, type TurboModule } from 'react-native'

export type ImpactStyle = 'light' | 'medium' | 'heavy' | 'soft' | 'rigid'

export interface Spec extends TurboModule {
  vibrate(impact: ImpactStyle): Promise<void>;
}

export default TurboModuleRegistry.getEnforcing<Spec>('Vibrate')