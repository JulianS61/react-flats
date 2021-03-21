import React, { Component } from 'react';
import FlatList from './flatList';
import ReactMap from './reactMap';
import flats from '../../data/flats';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flatLoc: {
        lat: undefined,
        lng: undefined
      }
    };
  }

  updateFlatMarker = (lat, lng) => {
    this.setState({ flatLoc: { lat, lng } });
  }

  render() {
    const { flatLoc } = this.state;
    return (
      <div>
        <FlatList flatsData={flats} updateFlatMarker={this.updateFlatMarker} />
        <ReactMap {...flatLoc} />
      </div>
    );
  }
}

export default App;
