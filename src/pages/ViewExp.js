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


export default class HomeScreen extends Component {
  render() {
    return (
      <ImageBackground source={bgImage} style={styles.backgroundContainer}>

      <View style={styles.topContainer}>
        <Text style={styles.logoText}>EXPERTS</Text>
        <Icon name={'menu'} size={24} color={'#000000'}
          style={styles.inputIcon}
        />

      </View>

      <TouchableOpacity style={styles.inputContainer}>
        <Icon name={'account'} size={40} color={'#ffffff'}
          style={styles.userIcon}
        />
      </TouchableOpacity>

      <View style={styles.labelContainer}>
        <Text style={styles.label}>LABEL 1</Text>
      </View>

      <TouchableOpacity style={styles.inputContainer}>
        <Icon name={'account'} size={40} color={'#ffffff'}
          style={styles.userIcon}
        />
      </TouchableOpacity>

      <View style={styles.labelContainer}>
        <Text style={styles.label}>LABEL 1</Text>
      </View>

      <TouchableOpacity style={styles.inputContainer}>
        <Icon name={'account'} size={40} color={'#ffffff'}
          style={styles.userIcon}
        />
      </TouchableOpacity>

      <View style={styles.labelContainer}>
        <Text style={styles.label}>LABEL 1</Text>
      </View>


      </ImageBackground>
    );
  }
}

 const styles = StyleSheet.create({
   backgroundContainer: {
     flexGrow: 1,
     width: null,
     height: null,
     justifyContent: 'center',
     alignItems: 'center'
   },
   topContainer: {
     marginTop: 0

   },
   inputIcon: {
    position: 'absolute',
    paddingLeft: 240,
    paddingTop: -180
  },
   inputContainer: {
     marginTop: 65,
     marginBottom: 40,
     width: 77,
     height: 77,
     backgroundColor: '#0A2707',
     borderRadius: 100,
   },
   userIcon: {
     position: 'absolute',
     left: 18,
     top: 18
   },
   input: {
     fontFamily: 'OpenSans-Bold',
     letterSpacing: 3,
     fontSize: 15,
     paddingLeft: 37,
     paddingTop: 71,
     textAlign: 'auto',
     color: '#ffffff'
  },
  logoText: {
    color: '#000000',
    fontSize: 14,
    fontFamily: 'OpenSans-Bold',
    letterSpacing: 2.5,
    textAlign: 'center',
    width: WIDTH-150,
    height: HEIGHT-758,
    top: 3
  },
  labelContainer: {
    top: -17,
    width: 70,
    height: 30,
    backgroundColor: '#A0A0A0',
    borderRadius: 10
  },
  label: {
    fontFamily: 'OpenSans-Bold',
    fontSize: 10,
    paddingTop: 8,
    textAlign: 'center',
    color: '#ffffff'
  }
 });
