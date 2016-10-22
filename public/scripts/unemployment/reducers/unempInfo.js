import Immutable from 'immutable'
import {ACTIONS} from '../constants'

const initialState = Immutable.Map({});

export default function unempInfoReducer(state=initialState, action) {
    switch(action.type) {
        case ACTIONS.SUBMIT_UNEMP_INFO:
            console.log("action :"+JSON.stringify(action))
            return state.set('logging',false).set('id', action.id).set('unempInfo',action.unempInfo);
        case ACTIONS.SUBMIT_UNEMP_INFO_SUCCESS:
            console.log("SUBMIT_UNEMP_INFO_SUCCESS action :"+JSON.stringify(action))
            return state.set('logging',false).set('unempInfo',action.unempInfo);
        case ACTIONS.SUBMIT_UNEMP_INFO_FAILURE:
            return state.set('logging',false);
        case ACTIONS.RESET_UNEMP_INFO:
            return Immutable.Map({});
        default:
            return state;
    }
}

