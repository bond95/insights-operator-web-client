export const actionReducer = (initialState, handlers, verbose) => (state = initialState, action) => {
  if (verbose) {
    let actionJson = JSON.stringify(action);
    if (actionJson.length > 250) {
      actionJson = `${actionJson.substring(0, 50)} ... [truncated] ...`;
    }

    window.console.log('Reducing action:', actionJson);
  }

  if (action.type in handlers) {
    return handlers[action.type](state, action);
  }

  return state;
};
