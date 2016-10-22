import {ACTIONS} from './constants'
import {APP} from '../constants/constants'
import {push, goBack} from "react-router-redux"

const requestSubmitOrgInfo = (orgInfo) =>{
  return {
    type:ACTIONS.SUBMIT_ORG_INFO,
    orgInfo
  }
}
const submitOrgInfoSuccess = (orgInfo) =>{
  return {
    type:ACTIONS.SUBMIT_ORG_INFO_SUCCESS,
    orgInfo
  }
}
const submitOrgInfoFailure = (orgInfo) =>{
  return {
    type:ACTIONS.SUBMIT_ORG_INFO_FAILURE,
    orgInfo
  }
}
const requestResetOrgInfo = (orgInfo) =>{
  return {
    type:ACTIONS.RESET_ORG_INFO,
    orgInfo
  }
}

export function submitOrgInfo(formData,dispatch){
  console.log('in submit org info : '+ JSON.stringify(formData))
  //todo post to api
  dispatch(submitOrgInfoSuccess(formData))
  dispatch(push(`${APP.BASE_PATH}`))//todo goto next screen
  //dispatch submit failure - todo
}

export function resetOrgInfo(formData,dispatch){
  //todo reset org info
  dispatch(requestResetOrgInfo({orgInfo:'',orgInfo:''}))
}
