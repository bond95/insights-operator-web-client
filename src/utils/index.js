export const mapArrayToObjectById = (arr) => {
  return arr.reduce((acc, cur) => ({ ...acc, [cur.id]: cur }), {});
};

export const generateRandomString = () => '_' + Math.random().toString(36).substr(2, 9);

export * from './requests';
