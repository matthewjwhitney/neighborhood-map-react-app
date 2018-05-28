import constants from '../constants'

var initialState = {
	zipCode: null
}

export default (state = initialState, action) => {

	switch (action.type){

		case constants.ZIPCODE_RECEIVED:
			let updated = Object.assign({}, state)
			updated['zipCode'] = action.zipCode
			return updated

		default:
			return state

	}

}
