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
    const venues = this.props.venues;
    return (
      <div>
        <NavBarSearch />
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-4">
              <Venues />
            </div>
            <div className="col-md-8">
              <Map
              center= {location}
              markers={venues}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const stateToProps = (state) => {
    return {
        venues: state.venue.venues
    }
}

export default connect(stateToProps, null)(App);
