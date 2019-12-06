import React from 'react'
import { Linking, Alert } from 'react-native'
import axios from 'axios'

export default class viewEXP extends Component {
  contructor() {
    super();
  }
  this.state = {
    isLoading: true,
    markers: [],
    origin: { latitude: 42.4072, logitude: -71.3824 },
  };
  config = {
    headers: {
      Authorization: 'Bearer <"kBVstLZD9U36U9sEvqOs9TBNTbhAk27L06kMQXwk1eWU5gLvHxNEgS6gtSEXUfYli68Mbgho8Q6uJ0qeSPcFgCwJ9DzRKkswkBT2af3NngbmeTZBR__-upEUYHPIXXYx">',
    },
    params: {
      term: 'Chinese Medicine Doctors / Clinics Near me',
      radius: 0.5,
      latitude: this.state.origin.latitude,
      longitude: this.state.orgin.longitude,
      sort_by: 'distance'
    },
  };
}

getLocation = () => {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      position => {
        let newOrigin = {
          latitude: position.coords.latitude,
          logitude: position.coords.longitude,
        };
        config.params.latitude = newOrigin.latitude;
        config.params.longitude = newOrigin.longitude;

this.setState({
      origin: newOrigin,
    });
    resolve(true);
  },
  err => {
    console.log('error');
    console.log(err);
    reject(reject);
  },
  { enableHighAccuracy: true, timeout: 2000, maximumAge: 1000  }
);
});
};

async componentDidMount() {
  await this.getLocation();
  await this.fetchMarkerData();
}
