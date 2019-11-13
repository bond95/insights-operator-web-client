export const mapArrayToObjectById = (arr) => {
  return arr.reduce((acc, cur) => ({ ...acc, [cur.id]: cur }), {});
};

export * from './requests';
