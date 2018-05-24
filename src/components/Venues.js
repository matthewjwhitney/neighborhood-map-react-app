import React, { Component } from 'react'
import {connect} from 'react-redux'
import actions from '../actions'

class Venues extends Component {

	render(){

		const venues = this.props.venues || []

		return (
			<div>
				<ol>
					{ venues.map((venue, i) => {
							return (
								<li key={venue.id}>
									<div>
										<h4>{venue.name}</h4>
										<span>{venue.location.address}</span>
										<span>{venue.location.address}</span><br />
										<span><a href={venue.url}>{venue.url}</a></span>
									</div>
								</li>
							)
						})
					}
				</ol>
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