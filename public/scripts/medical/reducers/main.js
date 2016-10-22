import {combineReducers} from 'redux'
import unempInfoReducer from './medicalInfo'

export default combineReducers({unempInformationForm:unempInfoReducer})
