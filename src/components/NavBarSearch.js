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
			client_secret: 'UAA15MIFIWVKZQRH22KPSYVWREIF2EMMH0GQ0ZKIQZC322NZ',
      limit: 10
		}

		superagent
		.get(url)
		.query(params)
		.set('Accept', 'application/json')
		.end((err, response) => {
			const venues = response.body.response.venues
			this.props.venuesReceived(venues)

      this.setState({
				venues: venues
      })
			//this.props.store.dispatch(actions.venuesReceived(venues));
		})
	}

	updateZipcode(event){
    event.preventDefault()

    const zipCode = this.state.zipCode

    this.props.zipCodeReceived(zipCode)

		this.setState({
			zipCode: event.target.value
		})
	}

    render() {
        return (
          <nav className="navbar navbar-light bg-light">
    						<a className="navbar-brand" href="#">
    							react-foursquare-google-maps
    						</a>
    						<form className="form-inline">
    								<input onChange={this.updateZipcode.bind(this)} type="search" className="form-control mr-sm-2" placeholder="City or Zip Code" aria-label="Search" />
    							<button onClick={this.searchVenues.bind(this)} className="btn btn-primary my-2 my-sm-0">Search</button>
    						</form>
    			</nav>
        )
    }
}

const stateToProps = (state) => {
	return {
		venues: state.venue,
    zipCode: state.zipCode
	}
}

const dispatchToProps = (dispatch) => {
	return {
		venuesReceived: (venues) => dispatch(actions.venuesReceived(venues)),
    zipCodeReceived: (zipCode) => dispatch(actions.zipCodeReceived(zipCode))
	}
}

export default connect(stateToProps, dispatchToProps)(NavBarSearch)
