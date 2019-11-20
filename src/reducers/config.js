import { SET_USER } from '_/constants';
import { actionReducer } from './utils';

const initialState = {
  user: {
    name: '',
  },
};

export default actionReducer(initialState,
  {
    [SET_USER] (state, { payload: user }) {
      const newState = { ...state, user };
      return newState;
    },
  }
);
