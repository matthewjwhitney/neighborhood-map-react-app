import React, { Component } from 'react';
import Map from './components/Map.js';
import NavBarSearch from "./components/NavBarSearch.js";

import Venues from "./components/Venues.js"

import {connect} from 'react-redux'

class App extends Component {

  constructor(){
    super()
    this.state = {
      venues: []
    }
  }

  render() {

    const location = {
      lat: 40.7575285,
      lng: -73.9884469
    }
    const { venues, selectedVenue } = this.props;
    return (
      <div className="container-fluid">
        <NavBarSearch />
          <div className="row">
            <div className="col">
              <Map
              center= {location}
              markers={venues}
              selectedMarker={selectedVenue}
              />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <Venues />
            </div>
          </div>
      </div>
    );
  }
}
const stateToProps = (state) => {
    return {
        venues: state.venue.venues,
        selectedVenue: state.venue.selectedVenue
    }
}

export default connect(stateToProps, null)(App);
