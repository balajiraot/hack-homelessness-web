import  {combineReducers} from 'redux'
import {routerReducer} from 'react-router-redux'
import loginReducer from '../login/reducers/main'
import {reducer as formReducer} from 'redux-form'

export default combineReducers({
  routing: routerReducer,
  form: formReducer,
  login: loginReducer
})
