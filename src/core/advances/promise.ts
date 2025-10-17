import { _function } from './function.ts';
import { object } from './object.ts';

/**
 * Checks if data is a Promise (instance or thenable)
 * @param data - The value to check
 * @returns `true` if data is a Promise or thenable
 */
export const promise = (data: unknown): data is Promise<unknown> =>
  data instanceof Promise ||
  (object(data) && _function(data.then) && _function(data.catch));
