import Immutable from 'immutable'
import {ACTIONS} from '../constants'

const initialState = Immutable.Map({});

export default function basicInfoReducer(state=initialState, action) {
    switch(action.type) {
        case ACTIONS.SUBMIT_BASIC_INFO:
            console.log("action :"+JSON.stringify(action))
            return state.set('logging',false).set('id', action.id).set('basicInfo',action.basicInfo);
        case ACTIONS.SUBMIT_BASIC_INFO_SUCCESS:
            console.log("SUBMIT_BASIC_INFO_SUCCESS action :"+JSON.stringify(action))
            return state.set('logging',false).set('basicInfo',action.basicInfo);
        case ACTIONS.SUBMIT_BASIC_INFO_FAILURE:
            return state.set('logging',false);
        case ACTIONS.RESET_BASIC_INFO:
            return Immutable.Map({});
        default:
            return state;
    }
}

