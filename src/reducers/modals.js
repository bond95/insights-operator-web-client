import { ADD_MODAL, ERROR_MODAL, CLOSE_MODAL } from '_/constants';
import { actionReducer } from './utils';

const initialState = {};

export default actionReducer(initialState,
  {
    [ADD_MODAL] (state, { payload: modalId }) {
      const newState = { ...state, [modalId]: { results: '' }};
      return newState;
    },
    [ERROR_MODAL] (state, { payload: { modalId, results }}) {
      const newState = { ...state, [modalId]: { results }};
      return newState;
    },
    [CLOSE_MODAL] (state, { payload: modalId }) {
      const newState = { ...state };
      delete newState[modalId];
      return newState;
    },
  }
);
