import { isFunction } from './function.ts';
import { isObject } from './object.ts';

/** Checks if data is a Promise (instance or thenable) */
export const isPromise = (data: unknown): data is Promise<unknown> =>
  data instanceof Promise ||
  (isObject(data) && isFunction(data.then) && isFunction(data.catch));
