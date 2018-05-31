import React, { Component } from 'react'
import { connect } from 'react-redux'
import actions from '../actions'

class Venues extends Component {

	onVenueClickHandler = venue => {
		const { selectedVenue, selectVenue } = this.props
		if (selectedVenue && selectedVenue.id === venue.id) {
			selectVenue(null)
		} else selectVenue(venue)
	}

	renderVenue = venue => {
		let cardWidth = {
			width: "100%"
		}

		return (
			<div key={venue.id} className="col-sm-6 col-md-4 col-lg-3 col-xl-2">
				<div className="card" style={cardWidth}>
					<div className="card-body">
						<h5 className="card-title">{venue.name}</h5>
						<p className="card-text">
							<span>{venue.location.address}</span><br />
							<span><a href={venue.url}>{venue.url}</a></span></p>
						<button onClick={this.onVenueClickHandler.bind(this, venue)} className="btn btn-primary">Select Venue</button>
					</div>
				</div>
			</div>
		)
	}

	render() {



		const venues = this.props.venues || []
		const { selectedVenue } = this.props
		let toReturn
		if (selectedVenue) {
			toReturn = this.renderVenue(selectedVenue)
		} else {
			toReturn = venues.map((venue, i) => {
				return this.renderVenue(venue)
			})
		}

		return (
			<div className="row">{toReturn}</div>
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

export default connect(stateToProps, dispatchToProps)(Venues)
