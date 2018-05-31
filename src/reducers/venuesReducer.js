import constants from '../constants'

var initialState = {
	venues: null,
	selectedVenue: null
}

export default (state = initialState, action) => {

	switch (action.type){

		case constants.VENUES_RECEIVED:
			let updated = Object.assign({}, state)
			updated['venues'] = action.venues
			return updated

		case constants.VENUE_SELECTED: {
			let updated = Object.assign({}, state)
			updated['selectedVenue'] = action.selectedVenue
			return updated
		}

		default:
			return state

	}

}
