import { AppRegistry, YellowBox } from 'react-native';
import App from './src/app';

YellowBox.ignoreWarnings([
  'Warning: isMounted(...) is deprecated',
  'Module RCTImageLoader',
  'Remote debugger',
]);

AppRegistry.registerComponent('tripWallet', () => App);
