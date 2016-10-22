import {ACTIONS} from './constants'
import {userLogins} from './loginData.json'
import {APP} from './constants'
import {push, goBack} from "react-router-redux"

const requestSubmitLogin = (user) =>{
  return {
    type:ACTIONS.SUBMIT_LOGIN,
    user
  }
}
const loginSuccess = (user) =>{
  return {
    type:ACTIONS.LOGIN_SUCCESS,
    user
  }
}
const loginFailure = (user) =>{
  return {
    type:ACTIONS.LOGIN_FAILURE,
    user
  }
}
const requestResetLogin = (user) =>{
  return {
    type:ACTIONS.RESET_LOGIN,
    user
  }
}

export function submitLogin(formData,dispatch){
  var validUser = false
   for(var user of userLogins) {
     if(user.username == formData.username && user.password == formData.password) {
        console.log("valid user")
       dispatch(loginSuccess(formData))
       dispatch(push(`${APP.BASE_PATH}/info`))
       validUser = true
     }
   }
  if(!validUser) {
    dispatch(loginFailure(formData))
  }
}

export function resetLogin(formData,dispatch){
  dispatch(requestResetLogin({username:'',password:''}))
}
