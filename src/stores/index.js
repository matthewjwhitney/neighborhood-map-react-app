import { applyMiddleware, createStore, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { venuesReducer } from '../reducers'
import { zipCodeReducer } from '../reducers'

var store;
export default {

	initialize: () => {
		const reducers = combineReducers({
			venue: venuesReducer,
			zipCode: zipCodeReducer
		})

		store = createStore(
			reducers,
			applyMiddleware(thunk)
		)

		return store
	},

	currentStore: () => {
		return store
	}
}
