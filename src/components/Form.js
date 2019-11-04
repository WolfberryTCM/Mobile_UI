import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,

} from 'react-native';

import LogoSplash from '../img/WolfberryLogo1.png'

export default class Example extends Component {
  render() {
    return (
      <View style={styles.logoContainer}>
        <Image source={LogoSplash} style={styles.Logo}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Logo: {
    width: 375,
    height: 375
  },
  logoContainer: {
    alignItems: 'center'
   }
 });
