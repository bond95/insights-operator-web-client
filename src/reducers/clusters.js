import { SET_CLUSTERS } from '_/constants';
import { actionReducer } from './utils';

const initialState = {
  clusters: {},
};

export default actionReducer(initialState,
  {
    [SET_CLUSTERS] (state, { payload: clusters }) {
      const newState = { ...state, clusters };
      return newState;
    },
  }
);
