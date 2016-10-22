import Immutable from 'immutable'
import {ACTIONS} from '../constants'

const initialState = Immutable.Map({});

export default function orgInfoReducer(state=initialState, action) {
    switch(action.type) {
        case ACTIONS.SUBMIT_ORG_INFO:
            console.log("action :"+JSON.stringify(action))
            return state.set('logging',false).set('id', action.id).set('orgInfo',action.orgInfo);
        case ACTIONS.SUBMIT_ORG_INFO_SUCCESS:
            console.log("SUBMIT_ORG_INFO_SUCCESS action :"+JSON.stringify(action))
            return state.set('logging',false).set('orgInfo',action.orgInfo);
        case ACTIONS.SUBMIT_ORG_INFO_FAILURE:
            return state.set('logging',false);
        case ACTIONS.RESET_ORG_INFO:
            return Immutable.Map({});
        default:
            return state;
    }
}

