import { SET_CLUSTERS } from '_/constants';
import { mapArrayToObjectById, sendRequest } from '_/utils';
import Mappers from './mappers';

export const setClusters = ({ clusters }) => ({
  type: SET_CLUSTERS,
  payload: clusters,
});

export const getClustersList = () =>
  async (dispatch) => {
    const clusters = await sendRequest('/api/v1/client/cluster');
    const internalClusters = mapArrayToObjectById(clusters.map(Mappers.Cluster.toInternal));
    dispatch(setClusters({ clusters: internalClusters }));
  };
