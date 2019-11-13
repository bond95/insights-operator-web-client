import config from '_/config.json';

export const sendRequest = async (path) => {
  const response = await fetch(
    `${config.controllerURL}${path}`
  );
  const responseJson = await response.json();
  return responseJson;
};
