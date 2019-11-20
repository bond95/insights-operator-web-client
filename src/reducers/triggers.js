import { SET_TRIGGERS } from '_/constants';
import { actionReducer } from './utils';

const initialState = {};

export default actionReducer(initialState,
  {
    [SET_TRIGGERS] (state, { payload: triggers }) {
      const newState = { ...triggers };
      return newState;
    },
  }
);
