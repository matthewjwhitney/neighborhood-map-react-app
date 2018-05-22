import React, { Component } from 'react';
import ReactDOM from 'react-dom';

var foursquare = require('react-foursquare')({
  clientID: '5AGYA4LOIPAHMHNYYKUZ5ORDEK1OC1O5ZFSLABK2MOZ2HZCB',
  clientSecret: 'BNAHFGNRZUPOUMYZ2DKB5GOUIREMIHU4HMTE4PQGRHR0QDQI'  
});

var params = {
  "ll": "37.7749,-122.4194",
  "query": 'Blue Bottle'
};

class Foursquare extends Component {

  constructor(props) {
     super(props);
     this.state = {
       items: []
     };
   }

  componentDidMount() {    
    foursquare.venues.getVenues(params)
      .then(res=> {
        this.setState({ items: res.response.venues });
      });
  }

  render() {
    return (
    <div>
        <div>Items:</div>
        { this.state.items.map(item=> { return <div key={item.id}>{item.name}</div>}) }
    </div>
  )
  }
}
export default Foursquare;