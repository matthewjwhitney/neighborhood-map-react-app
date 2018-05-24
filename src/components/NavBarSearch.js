import React, { Component } from "react";
import superagent from 'superagent'
import { connect } from 'react-redux'
import actions from '../actions'


class NavBarSearch extends Component {

    constructor(){
		super()
		this.state = {
			zipCode: ''
		}
	}

	searchVenues(event){
		event.preventDefault()

		const url = 'https://api.foursquare.com/v2/venues/search'

		const params = {
			v: '20140806',
			near: this.state.zipCode, // this is actually zip code OR city, not just zip code
			client_id: 'VZZ1EUDOT0JYITGFDKVVMCLYHB3NURAYK3OHB5SK5N453NFD',
			client_secret: 'UAA15MIFIWVKZQRH22KPSYVWREIF2EMMH0GQ0ZKIQZC322NZ'
		}

		superagent
		.get(url)
		.query(params)
		.set('Accept', 'application/json')
		.end((err, response) => {
			const venues = response.body.response.venues
			this.props.venuesReceived(venues)
		})
	}

	updateZipcode(event){
		this.setState({
			zipCode: event.target.value
		})
	}

    render() {
        return (
            <nav className="navbar navbar-default">
				<div className="container-fluid">
					<div className="navbar-header">
						<a className="navbar-brand" href="#">
							react-foursquare-google-maps
						</a>
						<form className="navbar-form navbar-left" role="search">
							<div className="form-group">
								<input onChange={this.updateZipcode.bind(this)} type="text" className="form-control" placeholder="City or Zip Code" />
							</div>
							<button onClick={this.searchVenues.bind(this)} className="btn btn-default">Search</button>
						</form>
					</div>
				</div>
			</nav>
        )
    }
}

const stateToProps = (state) => {
	return {
		venues: state.venue
	}
}

const dispatchToProps = (dispatch) => {
	return {
		venuesReceived: (venues) => dispatch(actions.venuesReceived(venues))
	}
}

export default connect(stateToProps, dispatchToProps)(NavBarSearch)