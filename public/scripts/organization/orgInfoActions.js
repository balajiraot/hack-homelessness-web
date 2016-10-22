import {ACTIONS} from './constants'
import {APP} from '../constants/constants'
import {push, goBack} from "react-router-redux"
import {Promise} from "es6-promise";
import superagent from "superagent";
import superagentPromise from "superagent-promise";
const agent = superagentPromise(superagent, Promise)

const harborApiUrl = ''

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
  return agent.post(`${APP.BASE_PATH}/coc`)
      .send(formData)
      .then(()=>{
        dispatch(push(`${APP.BASE_PATH}/info`))
      })
      .catch((error)=>{
        console.error("Error saving user info to db", error)
      })
}

export function resetOrgInfo(formData,dispatch){
  //todo reset org info
  dispatch(requestResetOrgInfo({orgInfo:'',orgInfo:''}))
}
