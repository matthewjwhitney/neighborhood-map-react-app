import React, { Component } from 'react';
import Map from './components/Map.js';
import NavBarSearch from "./components/NavBarSearch.js";
import store from './stores'
import Venues from "./components/Venues.js"
import { Provider } from 'react-redux'

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

    return (

      <Provider store={store.initialize()}>
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
                markers={this.state.venues}/>
              </div>
            </div>
          </div>
        </div>
      </Provider>

    );
  }
}
export default App;
