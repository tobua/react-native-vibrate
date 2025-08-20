# react-native-nitro-vibrate

Access the full native haptics interface on iOS and Android.

## Usage

Requires NitroModules `react-native-nitro-modules` installed in your project.

```ts
import { Vibrate } from 'react-native-nitro-vibrate'

Vibrate.vibrate('light' | 'medium' | 'heavy' | 'soft' | 'rigid')
```

## Permissions

Haptics requires Vibration permission, add this to your `AndroidManifest.xml`:

```xml
<?xml version="1.0" encoding="utf-8"?>
<manifest xmlns:android="http://schemas.android.com/apk/res/android">
    <uses-permission android:name="android.permission.VIBRATE" />
</manifest>
```