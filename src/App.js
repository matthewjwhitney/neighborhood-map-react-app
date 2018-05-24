import React, { Component } from 'react';
import Map from './components/Map.js';
import NavBarSearch from "./components/NavBarSearch.js";
import store from './stores'
import Venues from "./components/Venues.js"
import { Provider } from 'react-redux' 

class App extends Component {

  render() {

const location = {
          lat: 33.5022161,
          lng: -111.928251
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
                  containerElement = { <div style = {{height: "600px"}}/> }
                  mapElement = { <div style = {{height: "100%"}}/> } 
                  center={location}
                  zoom={15} />
              </div>
            </div>
          </div>
        </div>
      </Provider>
      
    );
  }
}
export default App;