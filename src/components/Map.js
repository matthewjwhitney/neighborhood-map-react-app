import React, {Component} from "react";
import { withGoogleMap, GoogleMap, Marker } from "react-google-maps"
import { connect } from 'react-redux'

class Map extends Component {


	render() {

		const markers = this.props.markers || []

		let center = this.props.center;

		if(markers.length > 0) {
            center = {lat: markers[0].location.lat, lng: markers[0].location.lng}
		}

		const MapWithMarkers = withGoogleMap(props =>
		  <GoogleMap
		    defaultZoom={16}
		    defaultCenter={center}>
				{markers.map((venue, i) => {
					const marker = {
						position: {
							lat: venue.location.lat,
							lng: venue.location.lng
						}
					}
					return <Marker key={i} {...marker} />
				})}
		  </GoogleMap>
		)

		return (
			<MapWithMarkers
				containerElement={<div style={{ height: `300px` }} />}
				mapElement={<div style={{ height: `100%` }} />}
			/>
		)
	}
}

const stateToProps = (state) => {
	return {
		venues: state.venue.venues,
	}
}

export default connect(stateToProps, null)(Map)
