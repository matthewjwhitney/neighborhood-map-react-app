import React, { Component } from 'react'
import {connect} from 'react-redux'

class Venues extends Component {

	render(){

		let cardWidth = {
			width: "100%"
		}

		const venues = this.props.venues || []

		return (
			<div className="row">
					{ venues.map((venue, i) => {
							return (
								<div key={venue.id} className="col-sm-6 col-md-4 col-lg-3 col-xl-2">
									<div className="card" style={cardWidth}>
									  <div className="card-body">
									    <h5 className="card-title">{venue.name}</h5>
									    <p className="card-text">
												<span>{venue.location.address}</span><br />
												<span><a href={venue.url}>{venue.url}</a></span></p>
									    <button className="btn btn-primary">button</button>
									  </div>
									</div>
								</div>
							)
						})
					}
			</div>
		)
	}

}

const stateToProps = (state) => {
	return {
		venues: state.venue.venues
	}
}

export default connect(stateToProps)(Venues)
