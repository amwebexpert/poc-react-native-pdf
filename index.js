import './src/tools/wdyr'; // <--- first import

import { AppRegistry } from 'react-native';
import App from './src/App';
import { name as appName } from './app.json';

import './src/services/i18n';

AppRegistry.registerComponent(appName, () => App);
