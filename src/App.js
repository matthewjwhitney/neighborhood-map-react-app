import React, { Component } from 'react';
import './App.css';
import Map from './components/Map.js';
import NavBarSearch from "./components/NavBarSearch.js";
import Foursquare from "./components/Foursquare.js";
import {Grid, Row, Col} from "react-bootstrap";

class App extends Component {

  render() {

    const location = {
          lat: 33.5022161,
          lng: -111.928251
        }

    return (

      <div className="App">
        <NavBarSearch />
        <Grid fluid={true}>
          <Row>
            <Col md={4}>
              <Foursquare />
            </Col>
            <Col md={8}>
             <Map
              containerElement = { <div style = {{height: "600px"}}/> }
					    mapElement = { <div style = {{height: "100%"}}/> } 
              center={location}
              zoom={15} />
            </Col>
          </Row>
        </Grid>    </div>
    );
  }
}
export default App;