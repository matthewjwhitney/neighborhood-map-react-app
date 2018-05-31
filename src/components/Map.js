import React, { Component } from "react";
import { withGoogleMap, GoogleMap, Marker } from "react-google-maps"
import { connect } from 'react-redux'
import actions from '../actions'

class Map extends Component {

	onVenueClickHandler = venue => {
		const { selectedVenue, selectVenue } = this.props
		if (selectedVenue && selectedVenue.id === venue.id) {
			selectVenue(null)
		} else selectVenue(venue)
	}

	renderMarker = (venue, i) => {
		const { selectedVenue } = this.props
		const marker = {
			position: {
				lat: venue.location.lat,
				lng: venue.location.lng
			}
		}
		if (selectedVenue && selectedVenue.id === venue.id) {
			const markerIcon = {
				url: 'https://image.ibb.co/eV0Hxd/tortillas1.png'
			}
			return (
				<Marker
					onClick={this.onVenueClickHandler.bind(this, venue)}
					key={i}
					{...marker}
					icon={markerIcon}
				/>)
		} else return <Marker onClick={this.onVenueClickHandler.bind(this, venue)} key={i} {...marker} />
	}

	render() {

		const markers = this.props.markers || []

		let center = this.props.center;

		if (markers.length > 0) {
			center = { lat: markers[0].location.lat, lng: markers[0].location.lng }
		}

		let markersToReturn = markers.map((venue, i) => {
			return this.renderMarker(venue, i)
		})


		const MapWithMarkers = withGoogleMap(props =>
			<GoogleMap
				defaultZoom={9}
				defaultCenter={center}
			>
				{markersToReturn}
			</GoogleMap>
		)

		return (
			<MapWithMarkers
				containerElement={<div style={{ height: `400px` }} />}
				mapElement={<div style={{ height: `100%` }} />}
			/>
		)
	}
}

const stateToProps = (state) => {
	return {
		venues: state.venue.venues,
		selectedVenue: state.venue.selectedVenue
	}
}

const dispatchToProps = dispatch => {
	return {
		selectVenue: venue => dispatch(actions.venueSelected(venue))
	}
}

export default connect(stateToProps, dispatchToProps)(Map)
