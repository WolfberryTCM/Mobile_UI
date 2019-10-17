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

import bgImage from './images/background.jpg'
import Logo from './images/WolfberryLogo1.png'
import Icon from 'react-native-vector-icons/Ionicons'
const {width: WIDTH} = Dimensions.get('window')
const {height: HEIGHT} = Dimensions.get('window')


export default class Example extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showPass: true,
      press: false
    }
  }

  showPass = () => {
    if (this.state.press == false){
      this.setState({showPass: false, press: true})
    } else {
      this.setState({showPass: true, press: false})
    }
  }
  render() {
    return (
      <ImageBackground source={bgImage} style={styles.backgroundContainer}>
      <View style={styles.logoContainer}>
        <Image source={Logo} style={styles.Logo}/>

        <Text style={styles.logoText}>WOLFBERRY</Text>
      </View>

      <View style={styles.inputContainer}>
        <Icon name={'ios-person'} size={20} color={'#BEBEBE'}
          style={styles.inputIcon}
        />
        <TextInput
          style={styles.input}
          placeholder={'Username'}
          placeholderTextColor={'#BEBEBE'}
          underLineColorAndroid='transparent'
        />
      </View>

      <View style={styles.inputContainer}>
        <Icon name={'ios-lock'} size={20} color={'#BEBEBE'}
          style={styles.inputIcon}
          />
        <TextInput
          style={styles.input}
          placeholder={'Password'}
          secureTextEntry={this.state.showPass}
          placeholderTextColor={'#BEBEBE'}
          underLineColorAndroid='transparent'
        />

        <TouchableOpacity style={styles.btnEye}
          onPress={this.showPass.bind(this)}>
          <Icon name={this.state.press == false ? 'ios-eye' : 'ios-eye-off'}
            size={20} color={'#BEBEBE'} style={styles.inputIcon}
          />
        </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.btnLogin}>
          <Text style={styles.text}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnGuest}>
          <Text style={styles.text}>Continue as Guest</Text>
        </TouchableOpacity>

        <View style={styles.signupTextCont}>
          <Text style={styles.signupText}>Don't have an account yet? Sign Up</Text>
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
   Logo: {
     width: 150,
     height: 150
   },
   logoContainer: {
     alignItems: 'center'
   },
   logoText: {
     color: '#92ba64',
     fontSize: 25,
     marginTop: 2,
     fontWeight: 'bold'

   },
   input: {
     width: WIDTH - 75,
     height: 35,
     borderRadius: 25,
     fontSize: 16,
     paddingLeft: 45,
     backgroundColor: '#F2F2F2',
     color: '#000000',
     marginHorizontal: 25,

   },
   inputContainer: {
     marginTop: 15,
   },
   inputIcon: {
     position: 'absolute',
     top: 8,
     paddingLeft: 5,
     left: 37
   },
   btnLogin: {
     width: WIDTH - 75,
     height: 40,
     borderRadius: 25,
     backgroundColor: '#92ba64',
     justifyContent: 'center',
     marginTop: 25,
     marginHorizontal: 25
   },
   text: {
     color: '#ffffff',
     fontSize: 16,
     textAlign: 'center'
   },
   btnEye: {
     position: 'absolute',
     right: 99
   },
   btnGuest: {
     width: WIDTH - 75,
     height: 40,
     borderRadius: 25,
     backgroundColor: '#c26755',
     justifyContent: 'center',
     marginTop: 15,
     marginHorizontal: 25
   },
   signupTextCont: {
     alignItems: 'center',
     justifyContent: 'flex-end',
     marginTop: 15
   },
   signupText: {
     color: '#BEBEBE',
   }

 });
