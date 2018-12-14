/* reducers */
import * as types from './actions';

function reducers(state = [], action) {
  switch(action.type) {

    case types.AUTHENTICATE:
      return Object.assign({}, state, { users: action.users });

  	case types.USERS_INFO:
      return Object.assign({}, state, { users: action.users });

  }
  return state;
}

export default reducers;