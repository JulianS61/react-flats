/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from './marker';


class ReactMap extends Component {
  static defaultProps = {
    center: {
      lat: 35.624858,
      lng: 139.723432
    },
    zoom: 15
  };

  render() {
    const { lat, lng } = this.props;
    return (
      <div className="map-container">
        <div style={{ height: '100vh', width: '100%' }}>
          <GoogleMapReact
          // bootstrapURLKeys={{ key: /* YOUR KEY HERE */ }}
            center={lat && lng ? { lat, lng } : this.props.center}
            defaultZoom={this.props.zoom}
          >
            {lat && lng ? (
              <Marker
                lat={lat}
                lng={lng}
              />
            ) : null}
          </GoogleMapReact>
        </div>
      </div>
    );
  }
}

export default ReactMap;
