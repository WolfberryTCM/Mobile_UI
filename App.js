import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  TextInput,
  ImageBackground,
  Image,

} from 'react-native';

import Splash from './src/pages/Splash';
import HomeScreen from './src/pages/HomeScreen';
import setSplash from './src/pages/setSplash';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import subView from './src/pages/subView';
const {width: WIDTH} = Dimensions.get('window')
const {height: HEIGHT} = Dimensions.get('window')


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state={currentScreen: 'Splash'}
    console.log('Start doing some tasks for about 3 seconds')
    setTimeout(()=>{
      console.log('Done some tasks for about 3 seconds')
      this.setState({currentScreen:'HomeScreen'})
    }, 3000)
  }

  render() {
      const {currentScreen}=this.state
      let mainScreen = currentScreen === 'Splash' ? <Splash/> : <HomeScreen/>
      return mainScreen
  }
}
