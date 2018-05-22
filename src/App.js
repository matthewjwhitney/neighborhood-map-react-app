import React, { Component } from 'react';
import ReactDOM from "react-dom";
import logo from './logo.svg';
import './App.css';
import Map from './components/Map.js'
import NavBarSearch from "./components/NavBarSearch.js"
import Foursquare from "./components/Foursquare.js"
import {Grid, Row, Col} from "react-bootstrap"

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBarSearch />
        <Grid fluid={true}>
          <Row>
            <Col md={4}>
              <Foursquare />
            </Col>
            <Col md={8}>
             <Map />
            </Col>
          </Row>
        </Grid>    </div>
    );
  }
}
export default App;