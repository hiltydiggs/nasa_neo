import React from 'react';
import './Cards.css';

function Cards(props) {
  let data = props.data.near_earth_objects ? props.data.near_earth_objects['2017-12-22'] : [];
  let cardSet = data.map((each, i) => {
    return (<li key={i} className="blue-text">{each.name}</li>);
  });

  return (
    <div className="card">
      <ul>
        {cardSet}
      </ul>
    </div>
  )
}

export default Cards;