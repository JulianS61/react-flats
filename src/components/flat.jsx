/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React, { Component } from 'react';

class Flat extends Component {
  handleClick = () => {
    const { lat, lng } = this.props;
    const { updateFlatMarker } = this.props;
    updateFlatMarker(lat, lng);
  }

  render() {
    const {
      name, imageUrl, price, priceCurrency
    } = this.props;
    return (
      <div className="card" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2)), url(${imageUrl})` }}>
        <div className="card-category">
          {price}
          {' '}
          {priceCurrency}
        </div>
        <div className="card-description">
          <h2>{name}</h2>
        </div>
        <a className="card-link" href="#" onClick={this.handleClick} />
      </div>
    );
  }
}

export default Flat;
