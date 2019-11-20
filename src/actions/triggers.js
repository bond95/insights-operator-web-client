import { sendRequest } from '_/utils';
import { errorModal, closeModal } from './modals';
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
