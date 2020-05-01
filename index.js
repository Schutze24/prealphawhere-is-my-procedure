import React, { Component } from 'react';
import { render } from 'react-dom';
import Map from './Maps';
import './style.css';
import credentials from './credentials';

    const mapURL = `https://maps.googleapis.com/maps/api/js?v=3.exp&key=${credentials.mapKey}`;

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
        <Map
          googleMapURL= {mapURL}
           containerElement={<div style={{height: '500px'}}/>}
            mapElement={<div style={{height: '100%'}}/>}
            loadingElement={<p>Loading</p>}

        />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
