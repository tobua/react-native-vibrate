const path = require('path')

const localPackages = ['react-native-nitro-vibrate', 'react-native-vibrate'].map(packageName => path.resolve(__dirname, packageName))

module.exports = {
    typescript: 'react-native',
    reactNative: { name: 'mobile', displayName: 'mobile' },
    gitignore: ['extends:numic', 'patch/*'],
    metro: {
        // Required as package is outside project root.
        watchFolders: localPackages,
        resolver: {
            // Symlinks will not work properly, link to source directly.
            extraNodeModules: localPackages,
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
