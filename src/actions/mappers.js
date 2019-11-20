export default {
  Cluster: {
    toInternal: (cluster) => {
      return {
        id: `${cluster.id}`,
        name: cluster.name,
      };
    },
  },
  Trigger: {
    toInternal: (trigger) => {
      return {
        id: `${trigger.id}`,
        type: trigger.type,
        cluster: trigger.cluster,
        reason: trigger.reason,
        link: trigger.link,
        active: trigger.active,
      };
    },
  },
};
