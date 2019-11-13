export default {
  Cluster: {
    toInternal: (cluster) => {
      return {
        id: `${cluster.id}`,
        name: cluster.name,
      };
    },
  },
};
