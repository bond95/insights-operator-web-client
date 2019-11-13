import ReducerRegistry from '@redhat-cloud-services/frontend-components-utilities/files/ReducerRegistry';
import promiseMiddleware from 'redux-promise-middleware';
import thunk from 'redux-thunk';
import { clusters } from '_/reducers';

let registry;

export function init (...middleware) {
  if (registry) {
    throw new Error('store already initialized');
  }

  registry = new ReducerRegistry({}, [
    promiseMiddleware(),
    thunk,
    ...middleware,
  ]);

  //If you want to register all of your reducers, this is good place.

  registry.register({
    clusters,
  });

  return registry;
}

export function getStore () {
  return registry.getStore();
}

export function register (...args) {
  return registry.register(...args);
}
