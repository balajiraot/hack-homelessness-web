import Immutable from 'immutable'
import {ACTIONS} from '../constants'

const initialState = Immutable.Map({});

export default function loginReducer(state=initialState, action) {
  switch(action.type) {
      case ACTIONS.SUBMIT_LOGIN:
            console.log("action :"+JSON.stringify(action))
          return state.set('logging',true).set('id', action.id).set('user',action.user);
    case ACTIONS.LOGIN_SUCCESS:
        console.log("LOGIN_SUCCESS action :"+JSON.stringify(action))
          return state.set('logging',false).set('user',action.user);
    case ACTIONS.LOGIN_FAILURE:
          return state.set('logging',false);
    case ACTIONS.RESET_LOGIN:
          return Immutable.Map({});
    default:
          return state;

  }
}

