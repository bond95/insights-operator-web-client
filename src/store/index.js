import ReducerRegistry from '@redhat-cloud-services/frontend-components-utilities/files/ReducerRegistry';
import promiseMiddleware from 'redux-promise-middleware';
import thunk from 'redux-thunk';
import { clusters, config, modals } from '_/reducers';
import { initData } from '_/actions';

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
    config,
    modals,
  });

  registry.getStore().dispatch(initData());

  return registry;
}

export function getStore () {
  return registry.getStore();
}

export function register (...args) {
  return registry.register(...args);
}
