import React, {Component} from 'react';

import {
  Router,
  Stack,
  Scene
} from 'react-native-router-flux';

import Splash from './pages/Splash'
import HomeScreen from './pages/HomeScreen'

export default class Routes extends Component {
  render() {
    return(
      <Router>
      <Stack key="root" hideNavBar={true}>
        <Scene key="login" component={Splash} title="Login" initial={true}/>
        <Scene key="home" component={HomeScreen} title="HomeScreen"/>
      </Stack>
      </Router>
    )
  }
}
