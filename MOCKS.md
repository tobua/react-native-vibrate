# Mocks for Jest

## react-native-vibrate

```ts
import { NativeModules } from 'react-native'

NativeModules.Vibrate = {
  vibrate: jest.fn(),
}
```

## react-native-nitro-vibrate

```ts
jest.mock('react-native-nitro-modules', () => ({
  NitroModules: {
    createHybridObject: () => ({
      vibrate: () => {},
    }),
  },
}))
```