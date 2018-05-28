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
								<div key={venue.id} className="col-sm-6 col-md-6 col-lg-4 col-xl-3">
									<div className="card" style={cardWidth}>
									  <img className="card-img-top" src=".../100px180/" alt="Card image cap" />
									  <div className="card-body">
									    <h5 className="card-title">{venue.name}</h5>
									    <p className="card-text">
												<span>{venue.location.address}</span><br />
												<span><a href={venue.url}>{venue.url}</a></span></p>
									    <a href="#" className="btn btn-primary">Show on Map</a>
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
