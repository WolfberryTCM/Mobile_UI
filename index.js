/**
 * @format
 */
import {AppRegistry} from 'react-native';
import App from './App';
import ViewExp from './src/pages/ViewExp'
import subView from './src/pages/subView'
import expProfile from './src/pages/expProfile'
import logIn from './src/pages/logIn'
import ViewStore from './src/pages/ViewStore'
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
//AppRegistry.registerComponent(appName, () => ViewStore);
