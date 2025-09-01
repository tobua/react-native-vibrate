# react-native-vibrate

Access the full native haptics interface on iOS and Android.

```ts
import { vibrate } from 'react-native-vibrate'

await vibrate('light' | 'medium' | 'heavy' | 'soft' | 'rigid')
```

## Permissions

Haptics requires Vibration permissions on Android, add this to your `AndroidManifest.xml`:

```xml
<?xml version="1.0" encoding="utf-8"?>
<manifest xmlns:android="http://schemas.android.com/apk/res/android">
    <uses-permission android:name="android.permission.VIBRATE" />
</manifest>
```
