import Immutable from 'immutable'
import {ACTIONS} from '../constants'

const initialState = Immutable.Map({});

export default function unempInfoReducer(state=initialState, action) {
    switch(action.type) {
        case ACTIONS.SUBMIT_MEDICAL_INFO:
            console.log("action :"+JSON.stringify(action))
            return state.set('logging',false).set('id', action.id).set('medicalInfo',action.medicalInfo);
        case ACTIONS.SUBMIT_MEDICAL_INFO_SUCCESS:
            console.log("SUBMIT_MEDICAL_INFO_SUCCESS action :"+JSON.stringify(action))
            return state.set('logging',false).set('medicalInfo',action.medicalInfo);
        case ACTIONS.SUBMIT_MEDICAL_INFO_FAILURE:
            return state.set('logging',false);
        case ACTIONS.RESET_MEDICAL_INFO:
            return Immutable.Map({});
        default:
            return state;
    }
}

