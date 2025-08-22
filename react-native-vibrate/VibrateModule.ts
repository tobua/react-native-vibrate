import type { TurboModule } from 'react-native';
import { TurboModuleRegistry } from 'react-native';

export interface Specification extends TurboModule {
  vibrate(impact: string): Promise<string>;
}

export default TurboModuleRegistry.getEnforcing<Specification>('Vibrate')