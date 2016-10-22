import {ACTIONS} from './constants'
import {APP} from '../constants/constants'
import {push, goBack} from "react-router-redux"

const requestSubmitMedicalInfo = (medicalInfo) =>{
  return {
    type:ACTIONS.SUBMIT_MEDICAL_INFO,
    medicalInfo
  }
}
const submitMedicalInfoSuccess = (medicalInfo) =>{
  return {
    type:ACTIONS.SUBMIT_MEDICAL_INFO_SUCCESS,
    medicalInfo
  }
}
const submitMedicalInfoFailure = (medicalInfo) =>{
  return {
    type:ACTIONS.SUBMIT_MEDICAL_INFO_FAILURE,
    medicalInfo
  }
}
const requestResetMedicalInfo = (medicalInfo) =>{
  return {
    type:ACTIONS.RESET_MEDICAL_INFO,
    medicalInfo
  }
}

export function submitMedicalInfo(formData,dispatch){
  console.log('in submit medical info : '+ JSON.stringify(formData))
  //todo post to api
  dispatch(submitMedicalInfoSuccess(formData))
  dispatch(push(`${APP.BASE_PATH}`))//todo goto next screen
  //dispatch submit failure - todo
}

export function resetMedicalInfo(formData,dispatch){
  //todo reset medical info
  dispatch(requestResetMedicalInfo({medicalInfo:'',medicalInfo:''}))
}
