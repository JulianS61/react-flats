import React, { Component } from 'react';
import Flat from './flat';

// eslint-disable-next-line react/prefer-stateless-function
class FlatList extends Component {
  render() {
    const { flatsData, updateFlatMarker } = this.props;
    return (
      <div className="flat-list">
        {flatsData.map(flat => (
          <Flat
            flatData={flat}
            key={flat.name}
            updateFlatMarker={updateFlatMarker}
          />
        ))}
      </div>
    );
  }
}

export default FlatList;
