import './src/tools/wdyr'; // <--- first import

import { AppRegistry } from 'react-native';
import App from './src/App';
import { name as appName } from './app.json';

import { initI18N } from './src/services/i18n';

initI18N();

AppRegistry.registerComponent(appName, () => App);
