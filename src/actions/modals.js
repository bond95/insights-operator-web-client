import { ADD_MODAL, ERROR_MODAL, CLOSE_MODAL } from '_/constants';

export const addModal = ({ modalId }) => ({
  type: ADD_MODAL,
  payload: modalId,
});

export const errorModal = ({ modalId, results }) => ({
  type: ERROR_MODAL,
  payload: {
    modalId,
    results,
  },
});

export const closeModal = ({ modalId }) => ({
  type: CLOSE_MODAL,
  payload: modalId,
});
