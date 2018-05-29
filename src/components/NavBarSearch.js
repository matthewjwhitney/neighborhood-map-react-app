import React, { Component } from "react";
import superagent from 'superagent'
import { connect } from 'react-redux'
import actions from '../actions'

class NavBarSearch extends Component {

    constructor(){
		super()
		this.state = {
			zipCode: '',
      category: ''
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
      limit: 12,
      categoryId: this.state.category,
      intent: 'browse',
      radius: '250'
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

  changeCategory(event){
    this.setState({
      category: event.target.value
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
      <nav className="navbar navbar-dark bg-dark">
				<a className="navbar-brand" href="#">
					react-google-maps-foursquare
				</a>
				<form className="form-inline">
          <select id="category" onChange={this.changeCategory.bind(this)} className="form-control">
            <option value="">
              All Categories</option>
            <option value="4d4b7104d754a06370d81259">
              Arts & Entertainment</option>
            <option value="4d4b7105d754a06372d81259">
              College & University</option>
            <option value="4d4b7105d754a06373d81259">
              Events</option>
            <option value="4d4b7105d754a06374d81259">
              Food</option>
            <option value="4d4b7105d754a06376d81259">
              Nightlife</option>
            <option value="4d4b7105d754a06377d81259">
              Sports & Outdoors</option>
            <option value="4d4b7105d754a06375d81259">
              Professional, Gov't, Other</option>
            <option value="4e67e38e036454776db1fb3a">
              Residence</option>
            <option value="4d4b7105d754a06378d81259">
              Shops & Services</option>
            <option value="4d4b7105d754a06379d81259">
              Travel & Transport</option>
          </select>
					<input onChange={this.updateZipcode.bind(this)} type="search" className="form-control" placeholder="City or Zip Code" aria-label="Search" />
				  <button onClick={this.searchVenues.bind(this)} className="btn btn-primary">Search</button>
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
