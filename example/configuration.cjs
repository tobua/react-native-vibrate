const path = require('path')

module.exports = {
    typescript: 'react-native',
    reactNative: { name: 'mobile', displayName: 'mobile' },
    gitignore: ['extends:numic', 'patch/*'],
    metro: {
        // Required as package is outside project root.
        watchFolders: [path.resolve(__dirname, '../react-native-nitro-vibrate')],
        resolver: {
            // Symlinks will not work properly, link to source directly.
            extraNodeModules:[path.join(__dirname, '../react-native-nitro-vibrate')],
            // Ensure symlinked modules are resolved (not working, no effect).
            unstable_enableSymlinks: true,
            unstable_enablePackageExports: true,
        },
    },
    babel: {
        // Preset still required for jest, but leads to JSX runtime errors in regular app.
        presets: process.env.NODE_ENV === 'test' ? ['module:@react-native/babel-preset'] : [],
    },
}