import {ACTIONS} from './constants'
import {APP} from '../constants/constants'
import {push, goBack} from "react-router-redux"

const requestSubmitCoCInfo = (cocInfo) =>{
  return {
    type:ACTIONS.SUBMIT_COC_INFO,
    cocInfo
  }
}
const submitCoCInfoSuccess = (cocInfo) =>{
  return {
    type:ACTIONS.SUBMIT_COC_INFO_SUCCESS,
    cocInfo
  }
}
const submitCoCInfoFailure = (cocInfo) =>{
  return {
    type:ACTIONS.SUBMIT_COC_INFO_FAILURE,
    cocInfo
  }
}
const requestResetCoCInfo = (cocInfo) =>{
  return {
    type:ACTIONS.RESET_COC_INFO,
    cocInfo
  }
}

export function submitCoCInfo(formData,dispatch){
  console.log('in submit coc info : '+ JSON.stringify(formData))
  //todo post to api
  dispatch(submitCoCInfoSuccess(formData))
  dispatch(push(`${APP.BASE_PATH}`))//todo goto next screen
  //dispatch submit failure - todo
}

export function resetCoCInfo(formData,dispatch){
  //todo reset coc info
  dispatch(requestResetCoCInfo({cocIinfo:'',cocInfo:''}))
}
