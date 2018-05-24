import React, { Component } from "react";
import { Navbar, FormGroup, FormControl, Button } from "react-bootstrap";
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

	searchVenues(){
		console.log('searchVenues: '+this.state.zipCode)

		const url = 'https://api.foursquare.com/v2/venues/search'

		const params = {
			v: '20140806',
			near: this.state.zipCode, // actually zip code or city, not just zip code
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
            <div>
                <Navbar>
                <Navbar.Header>
                    <Navbar.Brand>
                    <a href="#home">react-google-map-foursquare</a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Navbar.Form pullLeft>
                    <FormGroup>
                        <FormControl onChange={this.updateZipcode.bind(this)} type="text" placeholder="Zip Code" />
                    </FormGroup>{' '}
                    <Button onClick={this.searchVenues.bind(this)}>Search</Button>
                    </Navbar.Form>
                </Navbar.Collapse>
                </Navbar>
            </div>
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