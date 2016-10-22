import {ACTIONS} from './constants'
import {APP} from '../constants/constants'
import {push, goBack} from "react-router-redux"

const requestSubmitUnempInfo = (unempInfo) =>{
  return {
    type:ACTIONS.SUBMIT_UNEMP_INFO,
    unempInfo
  }
}
const submitUnempInfoSuccess = (unempInfo) =>{
  return {
    type:ACTIONS.SUBMIT_UNEMP_INFO_SUCCESS,
    unempInfo
  }
}
const submitUnempInfoFailure = (unempInfo) =>{
  return {
    type:ACTIONS.SUBMIT_UNEMP_INFO_FAILURE,
    unempInfo
  }
}
const requestResetUnempInfo = (unempInfo) =>{
  return {
    type:ACTIONS.RESET_UNEMP_INFO,
    unempInfo
  }
}

export function submitUnempInfo(formData,dispatch){
  console.log('in submit unemp info : '+ JSON.stringify(formData))
  //todo post to api
  dispatch(submitUnempInfoSuccess(formData))
  dispatch(push(`${APP.BASE_PATH}`))//todo goto next screen
  //dispatch submit failure - todo
}

export function resetUnempInfo(formData,dispatch){
  //todo reset unemp info
  dispatch(requestResetUnempInfo({unempInfo:'',unempInfo:''}))
}
