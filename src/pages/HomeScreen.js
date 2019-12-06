import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  TextInput,
  ImageBackground,
  ScrollView,
  Image,

} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { stringify } from 'query-string';
import bgImage from '../img/background.jpg';
const {width: WIDTH} = Dimensions.get('window')
const {height: HEIGHT} = Dimensions.get('window')


export default class HomeScreen extends Component {
  constructor(){
    super();
    this.state =  {
      data: null,
      loaded: true,
      error: null
    }
  }

  baseURL = 'https://api.yelp.com/v3/businesses/search';

  function objToQueryString(obj) {
    const keyValuePairs = [];
    for (const key in obj) {
      keyValuePairs.push.(encodeURI)
    }
  }
  getData = (ev) => {
    this.setState({loaded:false, error:null})
    let url = this.baseURL;
    let h = new Headers();
    h.append('Authorization', 'Bearer kBVstLZD9U36U9sEvqOs9TBNTbhAk27L06kMQXwk1eWU5gLvHxNEgS6gtSEXUfYli68Mbgho8Q6uJ0qeSPcFgCwJ9DzRKkswkBT2af3NngbmeTZBR__-upEUYHPIXXYx');
    // const params = {
    //   location: 'boston',
    //   radius: '100',
    //   categories: 'tcm, [AR, AT, AU, BE, BR, CA, CH, CL, DE, DK, ES, FI, FR, GB, HK, IE, IT, JP, MX, MY, NL, NO, NZ, PH, PL, PT, SE, SG, TR, TW, US]',
    //   sort_by: 'distance',
    //   price: '1,2,3'
    // }
    let req = new Request(url, {
      headers: h,
      method: 'GET',
    });

    fetch(`https://api.yelp.com/v3/businesses/search`)
    fetch(req)
    .then(response=>response.json())
    .then(this.showData)
    .catch(this.badStuff)

  }
  showData = (data) => {
    this.setState({loaded:true, data: data});
    console.log(data);

  }
  badStuff = (err) => {
    this.setState({loaded:true, error: err.message});
  }
  componentDidMount() {

  }
  render() {
    return (
      <ScrollView>
      <ImageBackground source={bgImage} style={styles.backgroundContainer}>


      <View style={styles.topContainer}>
        <Text style={styles.logoText}>WOLFBERRY</Text>
        <Icon name={'menu'} size={24} color={'#000000'}
          style={styles.inputIcon}
        />
      </View>


      <TouchableOpacity style={styles.inputContainer}>
        <Text style={styles.input}>SEARCH SYMPTOMS</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.inputContainer}>
        <Text style={styles.input}>SEARCH HERBS</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.inputContainer}>
        {!this.state.loaded && (
          <Text> Loading </Text>
        )}
        <Text style={styles.input} onPress={this.getData}>VIEW  EXPERTS & CLINICS</Text>
        {this.state.error && (<Text>{this.state.err}</Text>)}
      </TouchableOpacity>
      {this.state.data && this.state.data.length > 0 && (
        this.state.data.map(info =>(
          <Text key={info.id} style ={styles.txt}>{info.name}</Text>
        ))
      )}
      </ImageBackground>
      </ScrollView>
    );
  }
}

 const styles = StyleSheet.create({
   txt: {
     fontFamily: 'OpenSans-Bold',
     fontSize: 15,
     textAlign: 'auto',
     color: '#0A2707',
    justifyContent: 'center'
   },
   backgroundContainer: {
     flexGrow: 1,
     width: null,
     height: null,
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
     paddingTop: 65,
     textAlign: 'auto',
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
    height: HEIGHT-763,
    top: 3
  },
  topContainer: {
    marginTop: 30
  }
 });
