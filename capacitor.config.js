/** @type {import('@capacitor/cli').CapacitorConfig} */
const config = {
  appId: 'com.newyou.app',
  appName: 'NEW YOU',
  webDir: 'dist',
  server: {
    androidScheme: 'https',
  },
  android: {
    allowMixedContent: true,
  },
};

module.exports = config;
