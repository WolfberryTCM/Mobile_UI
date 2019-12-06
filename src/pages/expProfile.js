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


export default class expProfile extends Component {
  render() {
    return (
      <ScrollView>
      <ImageBackground source={bgImage} style={styles.backgroundContainer}>

      <View style={styles.topContainer}>
        <Icon name={'arrow-left'} size={24} color={'#000000'}
          style={styles.inputIcon}
        />
      </View>

      <View style={styles.inputContainer}>
        <Icon name={'store'} size={27} color={'#ffffff'}
          style={styles.userIcon}/>
      </View>

      <View style={styles.txtContainer}>
        <Text style={styles.label}>NAME</Text>
        <Text style={styles.labelLight}>LABEL</Text>
      </View>

      <View style={styles.labelContainer}>
        <TouchableOpacity style={styles.btnCont}>
          <Text style={styles.text}>PROFILE</Text>
        </TouchableOpacity>

        <Text style={styles.intCont}>Excepteur sint occaecat
        cupidatat non proident, sunt
        in culpa qui officia deserunt
        mollit anim id est laborum. Excepteur sint occaecat
        Cupidatat non proident, sunt
        in culpa qui officia deserunt
        mollit anim id est laborum. </Text>

        <Icon name={'chevron-left'} size={22} color={'#ffffff'}
          style={styles.leftClick}/>
        <Icon name={'chevron-right'} size={22} color={'#ffffff'}
          style={styles.rightClick}/>
      </View>

      <View style={styles.labelContainer}>
        <TouchableOpacity style={styles.btnCont}>
          <Text style={styles.text}>REVIEWS</Text>
        </TouchableOpacity>

        <Text style={styles.italicCont}>Excepteur sint occaecat
        cupidatat non proident, sunt
        in culpa qui officia deserunt
        mollit anim id est laborum. Excepteur sint occaecat
        Cupidatat non proident, sunt
        in culpa qui officia deserunt
        mollit anim id est laborum. </Text>

        <Icon name={'chevron-left'} size={22} color={'#ffffff'}
          style={styles.leftClick}/>
        <Icon name={'chevron-right'} size={22} color={'#ffffff'}
          style={styles.rightClick}/>
      </View>

      <View style={styles.label2Container}>
        <TouchableOpacity style={styles.btnCont}>
          <Text style={styles.text}>RATINGS</Text>
        </TouchableOpacity>
        <Text style={styles.label2Text}>4.6/5.0</Text>
        <View style={styles.rowStar}>
          <Icon name={'star'} size={24} color={'#ffffff'}
            style={styles.starIcon}/>
          <Icon name={'star'} size={24} color={'#ffffff'}
            style={styles.starIcon}/>
          <Icon name={'star'} size={24} color={'#ffffff'}
            style={styles.starIcon}/>
          <Icon name={'star'} size={24} color={'#ffffff'}
            style={styles.starIcon}/>
          <Icon name={'star-half'} size={24} color={'#ffffff'}
            style={styles.starIcon}/>
        </View>
      </View>

      <View style={styles.label2Container}>
        <TouchableOpacity style={styles.btnCont}>
          <Text style={styles.text}>CONTACTS</Text>
        </TouchableOpacity>
        <Text style={styles.label2Text}>xxx-xxx-xxx</Text>
      </View>

      <View style={styles.label2Container}>
        <TouchableOpacity style={styles.btnCont}>
          <Text style={styles.text}>ADDRESS</Text>
        </TouchableOpacity>
        <View style={styles.rowCont}/>
          <Text style={styles.label2Name}>NAME</Text>
          <Text style={styles.label2Address}>STREET NUMBER CITY, STATE ZIPCODE</Text>
      </View>

      <TouchableOpacity style={styles.bookApp}>
        <Text style={styles.bookText}>BOOK AN APPOINTMENT</Text>
      </TouchableOpacity>

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
     marginTop: 34,
     paddingLeft: 40
   },
   inputIcon: {
    position: 'absolute',
    paddingLeft: -240,
    left: -135,
    paddingTop: -140,
    top: 26
  },
   inputContainer: {
     marginTop: HEIGHT-680,
     width: 77,
     height: 77,
     backgroundColor: '#0A2707',
     borderRadius: 100,
     flexDirection: 'row'
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
  labelContainer: {
    width: 290,
    height: 400,
    backgroundColor: '#0A2707',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    marginTop: 80,
    bottom: 25
  },
  label: {
    fontFamily: 'OpenSans-Bold',
    fontSize: 14,
    letterSpacing: 3,
    textAlign: 'center',
    color: '#000000',
    marginTop: 25,
    bottom: 25,
    justifyContent: 'center',
  },
  userIcon: {
    position: 'absolute',
    left: 25,
    top: 25
  },
  labelLight: {
    marginTop: 25,
    bottom: 25,
    marginBottom: 5,
    fontFamily: 'OpenSans-Bold',
    fontSize: 14,
    letterSpacing: 3,
    textAlign: 'center',
    color: '#A0A0A0',
    justifyContent: 'center',
  },
  starIcon: {
    position: 'relative',
    //alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 5,
    left: 78,
    right: 77,
    top: 49,
    marginBottom: 60,
  },
  rowStar: {
    flexDirection: 'row',
  },
  txtContainer: {
    marginTop: 25,
    flexDirection: 'column',
  },
  btnCont: {
    position: 'absolute',
    top: 40,
    width: 150,
    height: 50,
    justifyContent: 'center',
    backgroundColor: '#F0D49A',
    marginHorizontal: 70
  },
  text: {
    fontFamily: 'OpenSans-Bold',
    fontSize: 12,
    letterSpacing: 3,
    textAlign: 'center',
    color: '#000000',
  },
  leftClick: {
    position: 'absolute',
    top: 348,
    left: 40,
  },
  intCont: {
    marginTop: 50,
    marginLeft: 36,
    justifyContent: 'center',
    marginRight: 36,
    textAlign: 'left',
    color:'#ffffff',
    fontFamily: 'OpenSans-Regular',
    fontSize: 16,
  },
  rightClick: {
    position: 'absolute',
    top: 348,
    right: 41,
  },
  italicCont: {
    fontFamily: 'OpenSans-Italic',
    marginTop: 50,
    marginLeft: 36,
    justifyContent: 'center',
    marginRight: 36,
    textAlign: 'left',
    color:'#ffffff',
    fontSize: 16,
  },
  label2Container: {
    width: 295,
    height: 295,
    backgroundColor: '#0A2707',
    flexDirection: 'column',
    marginTop: 80,
    bottom: 25
  },
  label2Text: {
    fontFamily: 'OpenSans-Bold',
    fontSize: 16,
    color:'#ffffff',
    textAlign: 'center',
    marginTop: 140,
    letterSpacing: 3,
  },
  label2Name: {
    fontFamily: 'OpenSans-Bold',
    fontSize: 14,
    color:'#ffffff',
    textAlign: 'center',
    marginTop: 140,
    letterSpacing: 3,
  },
  label2Address: {
    fontFamily: 'OpenSans-Bold',
    fontSize: 14,
    top: 3,
    color:'#ffffff',
    marginTop: 180,
    position: 'absolute',
    textAlign: 'center',
    left: 67,
    right:  66,
    letterSpacing: 2.5,
    justifyContent: 'center',
  },
  rowCont: {
    flexDirection: 'column',
    //position: 'absolute'
  //  justifyContent: 'space-evenly',
  },
  bookApp: {
    width: 222,
    height:  19,
    marginTop: 150,
    marginBottom: 68

  },
  bookText: {
    position: 'absolute',
    letterSpacing: 2,
    fontFamily: 'OpenSans-Bold',
    textAlign: 'center',
    justifyContent: 'center',
    fontSize: 14,
    color:'#000000',
    marginLeft: 7,
  },

 });
