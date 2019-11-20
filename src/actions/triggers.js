import { SET_TRIGGERS } from '_/constants';
import { mapArrayToObjectById, sendRequest } from '_/utils';
import { errorModal, closeModal } from './modals';
import Mappers from './mappers';

export const setTriggers = ({ triggers }) => ({
  type: SET_TRIGGERS,
  payload: triggers,
});

export const getTriggersList = () =>
  async (dispatch) => {
    const triggers = await sendRequest('/api/v1/client/trigger');
    const internalTriggers = mapArrayToObjectById(triggers.map(Mappers.Trigger.toInternal));
    dispatch(setTriggers({ triggers: internalTriggers }));
  };

export const createMustGatherTrigger = ({ clusterName, modalId, ...rest }) => (
  async (dispatch) => {
    const query = encodeURI(Object.keys(rest).map(key => `${key}=${rest[key]}`).join('&'));
    const resp = await sendRequest(`/api/v1/client/cluster/${clusterName}/trigger/must-gather?${query}`, 'POST');
    if (resp.error) {
      dispatch(errorModal({ modalId, results: resp.error }));
    } else {
      dispatch(closeModal({ modalId }));
    }
  }
);
