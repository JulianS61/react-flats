import React, { Component } from 'react';
import Flat from './flat';

// eslint-disable-next-line react/prefer-stateless-function
class FlatList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeName: ''
    };
  }

  changeActiveElement = (newActiveName) => {
    this.setState({ activeName: newActiveName });
  }

  render() {
    const { flatsData, updateFlatMarker } = this.props;
    const { activeName } = this.state;
    return (
      <div className="flat-list">
        {flatsData.map(flat => (
          <Flat
            {...flat}
            key={flat.name}
            updateFlatMarker={updateFlatMarker}
            active={activeName === flat.name}
            changeActiveElement={this.changeActiveElement}
          />
        ))}
      </div>
    );
  }
}

export default FlatList;
