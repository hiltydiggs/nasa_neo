import React, { Component } from 'react';
import './Cards.css';

class Cards extends Component {
  render() {
    return (
      <div className="card">
        {this.props.data.near_earth_objects['2017-12-22'][0].name}
      </div>
    )
  }
}

Cards.defaultProps = {data: 'loading'};

export default Cards;