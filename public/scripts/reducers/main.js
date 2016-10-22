import  {combineReducers} from 'redux'
import {routerReducer} from 'react-router-redux'
import loginReducer from '../login/reducers/main'
import basicInfoReducer from '../common/reducers/main'
import cocInfoReducer from '../common/reducers/main'
import unempInfoReducer from '../unemployment/reducers/main'
import orgInfoReducer from '../organization/reducers/main'
import medicalInfoReducer from '../medical/reducers/main'

import {reducer as formReducer} from 'redux-form'

export default combineReducers({
  routing: routerReducer,
  form: formReducer,
  login: loginReducer,
  basicInfo: basicInfoReducer,
  cocInfo: cocInfoReducer,
  unempInfo: unempInfoReducer,
  orgInfo: orgInfoReducer,
  medicalInfo: medicalInfoReducer

})
