const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config')
const path = require('path')
const root = path.resolve(__dirname, '..')

/**
 * Metro configuration
 * https://facebook.github.io/metro/docs/configuration
 *
 * @type {import('@react-native/metro-config').MetroConfig}
 */
const config = {
  watchFolders: [root],
  resolver: {
    // Symlinks will not work properly, link to source directly.
    extraNodeModules:[ path.join(__dirname, '../react-native-nitro-vibrate')],
    // Ensure symlinked modules are resolved (not working, no effect).
    unstable_enableSymlinks: true,
  },
}

module.exports = mergeConfig(getDefaultConfig(__dirname), config)