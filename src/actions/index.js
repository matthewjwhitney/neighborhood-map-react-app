import constants from '../constants'

export default {

	venuesReceived: (venues) => {
		return {
			type: constants.VENUES_RECEIVED,
			venues: venues
		}
	},

	zipCodeReceived: (zipCode) => {
		return {
			type: constants.ZIPCODE_RECEIVED,
			zipCode: zipCode
		}
	},

	venueSelected: venue => {
		return {
			type: constants.VENUE_SELECTED,
			selectedVenue: venue
		}
	}


}
