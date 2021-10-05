import { INITIAL_STATE, SET_LOGIN } from '../constants';

const loginReducer = (state = INITIAL_STATE, { type, _payload }) => {
  switch (type) {
    case SET_LOGIN:
      return { ...state, isLogged: true };
    default:
      return state;
  }
};

export default loginReducer;