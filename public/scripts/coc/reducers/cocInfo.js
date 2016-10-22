import Immutable from 'immutable'
import {ACTIONS} from '../constants'

const initialState = Immutable.Map({});

export default function cocInfoReducer(state=initialState, action) {
    switch(action.type) {
        case ACTIONS.SUBMIT_COC_INFO:
            console.log("action :"+JSON.stringify(action))
            return state.set('logging',false).set('id', action.id).set('cocInfo',action.cocInfo);
        case ACTIONS.SUBMIT_COC_INFO_SUCCESS:
            console.log("SUBMIT_COC_INFO_SUCCESS action :"+JSON.stringify(action))
            return state.set('logging',false).set('cocInfo',action.cocInfo);
        case ACTIONS.SUBMIT_COC_INFO_FAILURE:
            return state.set('logging',false);
        case ACTIONS.RESET_COC_INFO:
            return Immutable.Map({});
        default:
            return state;
    }
}

