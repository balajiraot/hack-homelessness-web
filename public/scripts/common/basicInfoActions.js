import {ACTIONS} from './constants'
import {APP} from '../constants/constants'
import {push, goBack} from "react-router-redux"

const requestSubmitBasicInfo = (basicInfo) =>{
  return {
    type:ACTIONS.SUBMIT_BASIC_INFO,
    basicInfo
  }
}
const submitBasicInfoSuccess = (basicInfo) =>{
  return {
    type:ACTIONS.SUBMIT_BASIC_INFO_SUCCESS,
    basicInfo
  }
}
const submitBasicInfoFailure = (basicInfo) =>{
  return {
    type:ACTIONS.SUBMIT_BASIC_INFO_FAILURE,
    basicInfo
  }
}
const requestResetBasicInfo = (basicInfo) =>{
  return {
    type:ACTIONS.RESET_BASIC_INFO,
    basicInfo
  }
}

export function submitBasicInfo(formData,dispatch){
  console.log('in submit basic info : '+ JSON.stringify(formData))
  //todo post to api
  dispatch(submitBasicInfoSuccess(formData))
  dispatch(push(`${APP.BASE_PATH}/organization`))//todo goto next screen
  //dispatch submit failure - todo
}

export function resetBasicInfo(formData,dispatch){
  //todo reset basic info
  dispatch(requestResetBasicInfo({info:'',info:''}))
}
