module.exports = {
  dependency: {
    platforms: {
      android: {
        sourceDir: './android',
        packageImportPath: 'import com.tobua.vibrate.VibratePackage;',
        packageInstance: 'new VibratePackage()',
      },
    },
  },
};
