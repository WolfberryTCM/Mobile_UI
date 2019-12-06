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

import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import bgImage from '../img/background.jpg';
const {width: WIDTH} = Dimensions.get('window')
const {height: HEIGHT} = Dimensions.get('window')


export default class logIn extends Component {
  render() {
    return (
      <ImageBackground source={bgImage} style={styles.backgroundContainer}>

      <View style={styles.topContainer}>
        <Text style={styles.logoText}>WOLFBERRY</Text>
        <Icon name={'menu'} size={24} color={'#000000'}
          style={styles.inputIcon}
        />
      </View>

      <View style={styles.range}>
      <TouchableOpacity style={styles.inputContainer}>
        <Text style={styles.input}>SIGN IN</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.inputContainer}>
        <Text style={styles.input}>CREATE      AN   ACCOUNT</Text>
      </TouchableOpacity>
      </View>


      </ImageBackground>
    );
  }
}

 const styles = StyleSheet.create({
   backgroundContainer: {
    flexGrow: 0.3,
     justifyContent: 'center',
     alignItems: 'center'
   },
   inputContainer: {
     marginTop: 40,
     width: 180,
     height: 180,
     backgroundColor: '#0A2707',
   },
   input: {
     fontFamily: 'OpenSans-Bold',
     letterSpacing: 3,
     fontSize: 15,
     paddingLeft: 37,
     paddingTop: 70,
     textAlign: 'left',
     justifyContent: 'center',
     color: '#ffffff'
  },
  iconContainer: {
     marginTop: 15
   },
   inputIcon: {
    position: 'absolute',
    paddingLeft: 250,
  },
  logoText: {
    color: '#000000',
    fontSize: 14,
    fontFamily: 'OpenSans-Bold',
    letterSpacing: 2.5,
    textAlign: 'center',
    width: WIDTH-133,
    top: 3
  },
  topContainer: {
    height: HEIGHT - 760,
    marginTop: 33
  },
  range: {
    height: HEIGHT - 249,
    top:  30,
    width: WIDTH - 98,
    justifyContent: 'center',
    alignItems: 'center'
  }
 });
