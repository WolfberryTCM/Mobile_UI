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
  ScrollView,
  Divider

} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import bgImage from '../img/background.jpg';
const {width: WIDTH} = Dimensions.get('window')
const {height: HEIGHT} = Dimensions.get('window')


export default class ViewExp extends Component {
  render() {
    return (
      <ScrollView>
      <ImageBackground source={bgImage} style={styles.backgroundContainer}>

      <View style={styles.topContainer}>
        <Text style={styles.logoText}>EXPERTS</Text>
        <Icon name={'menu'} size={24} color={'#000000'}
          style={styles.inputIcon}
        />
        </View>

      <View style={styles.topContainer}>
        <Icon name={'arrow-left'} size={24} color={'#000000'}
          style={styles.input2Icon}
        />
      </View>

      <TouchableOpacity style={styles.inputContainer}>
        <Icon name={'account'} size={40} color={'#ffffff'}
          style={styles.userIcon}
        />
      </TouchableOpacity>


      <View style={styles.labelContainer}>
        <Text style={styles.label}>NAME</Text>
        <Text style={styles.labelLight}>LABEL</Text>
        <View style={styles.rowStar}>
          <Icon name={'star'} size={24} color={'#ffffff'}
            style={styles.starIcon}
          />
          <Icon name={'star'} size={24} color={'#ffffff'}
            style={styles.starIcon}
          />
          <Icon name={'star'} size={24} color={'#ffffff'}
            style={styles.starIcon}
          />
          <Icon name={'star'} size={24} color={'#ffffff'}
            style={styles.starIcon}
          />
          <Icon name={'star'} size={24} color={'#ffffff'}
            style={styles.starIcon}
          />
        </View>
        <Text style={styles.label}>ZIPCODE</Text>

      </View>

      <TouchableOpacity style={styles.inputContainer}>
        <Icon name={'account'} size={40} color={'#ffffff'}
          style={styles.userIcon}
        />
      </TouchableOpacity>

      <View style={styles.labelContainer}>
        <Text style={styles.label}>NAME</Text>
        <Text style={styles.labelLight}>LABEL</Text>
        <View style={styles.rowStar}>
          <Icon name={'star'} size={24} color={'#ffffff'}
            style={styles.starIcon}
          />
          <Icon name={'star'} size={24} color={'#ffffff'}
            style={styles.starIcon}
          />
          <Icon name={'star'} size={24} color={'#ffffff'}
            style={styles.starIcon}
          />
          <Icon name={'star'} size={24} color={'#ffffff'}
            style={styles.starIcon}
          />
          <Icon name={'star-half'} size={24} color={'#ffffff'}
            style={styles.starIcon}
          />
        </View>
        <Text style={styles.label}>ZIPCODE</Text>

      </View>

      <TouchableOpacity style={styles.inputContainer}>
        <Icon name={'account'} size={40} color={'#ffffff'}
          style={styles.userIcon}
        />
      </TouchableOpacity>

      <View style={styles.labelContainer}>
        <Text style={styles.label}>NAME</Text>
        <Text style={styles.labelLight}>LABEL</Text>
      <View style={styles.rowStar}>
        <Icon name={'star'} size={24} color={'#ffffff'}
          style={styles.starIcon}
        />
        <Icon name={'star'} size={24} color={'#ffffff'}
          style={styles.starIcon}
        />
        <Icon name={'star'} size={24} color={'#ffffff'}
          style={styles.starIcon}
        />
        <Icon name={'star'} size={24} color={'#ffffff'}
          style={styles.starIcon}
        />
        <Icon name={'star-half'} size={24} color={'#ffffff'}
          style={styles.starIcon}
        />
      </View>
        <Text style={styles.label}>ZIPCODE</Text>

      </View>


      </ImageBackground>
      </ScrollView>
    );
  }
}

 const styles = StyleSheet.create({
   backgroundContainer: {
     flexGrow: 1,
     width: null,
     height: null,
     justifyContent: 'space-around',
     alignItems: 'center'
   },
   topContainer: {
     marginTop: 60,
     marginBottom: -40
   },
   inputIcon: {
    position: 'absolute',
    paddingLeft: 240,
    paddingTop: -180,
    top: 1
  },
   inputContainer: {
     marginTop: 60,
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
    marginBottom: 10,
    width: 200,
    height: 200,
    backgroundColor: '#0A2707',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
  },
  label: {
    fontFamily: 'OpenSans-Bold',
    fontSize: 14,
    letterSpacing: 3,
    textAlign: 'center',
    color: '#ffffff',
    justifyContent: 'center',
  },
  userIcon: {
    position: 'absolute',
    left: 18,
    top: 18
  },
  labelLight: {
    fontFamily: 'OpenSans-Bold',
    fontSize: 14,
    letterSpacing: 3,
    textAlign: 'center',
    color: '#A0A0A0',
    justifyContent: 'center',
  },
  starIcon: {
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 5,
    left: 25,
    right: 25,
    top: 3,

  },
  rowStar: {
    flexDirection: 'row',
  },
  input2Icon: {
  position: 'absolute',
  left: -155,
  paddingTop: -140,
  top: -73,
}

 });
