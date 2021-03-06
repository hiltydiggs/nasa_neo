import React, { Component } from 'react';
import './App.css';
import apiKey from './Apikey.js';
import Cards from './Cards.js';

let apiCall = `https://api.nasa.gov/neo/rest/v1/feed?start_date=2017-12-22&end_date=2017-12-22&api_key=${apiKey}`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {cardData: {}};
  }

  componentDidMount() {
    this.updateCardData();
  }

  updateCardData() {
    fetch(apiCall)
      .then(response => {
        return response.json();
      }).then(data => {
        console.log(data);
        this.setState({cardData: data});
      });
  }
  
  render() {
    return (
      <div className="App">
        <Cards data={this.state.cardData} />
      </div>
    );
  }
}

export default App;
