import { combineReducers } from 'redux'
import { productReducer, callToActionReducer } from './index.js'


export default combineReducers({
    products: productReducer,
    callToAction: callToActionReducer
})