import config from '_/config.json';

export const sendRequest = async (path, method = 'GET') => {
  const response = await fetch(
    `${config.controllerURL}${path}`,
    {
      method,
    }
  );
  try {
    const responseJson = await response.json();
    return responseJson;
  } catch (e) {
    if (response.ok) {
      return {};
    }

    window.console.error(e);
  }
};
