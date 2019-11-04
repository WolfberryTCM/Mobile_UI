import React, {Component} from 'react';
import {
  StyleSheet,
  ImageBackground,
} from 'react-native';

import Logo from '../components/Logo';
import bgImage from '../img/background.jpg';

export default class Splash extends Component {
  constructor(props) {
    super(props)
    this.state={timer:0}
    setInterval(()=>{
      this.setState({ timer: this.state.timer + 1})
    }, 1000)
  }

  render() {
    return(
      <ImageBackground source={bgImage} style={styles.backgroundContainer}>
      <Logo/>
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
  }
 });
