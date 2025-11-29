import { TypeOf } from '@/core/utilities/types.ts';
import { thenable } from './thenable.ts';

/**
 * Type guard that checks whether a value behaves like a Promise.
 *
 * Considers native `Promise` instances as well as custom thenables
 * (objects with a callable `then` method).
 *
 * @param value - The value to verify
 * @returns `true` if the value is promise-like, `false` otherwise
 * @example
 *   if (is.promiseLike(maybeAsync)) {
 *     // `maybeAsync` is now narrowed to a Promise-like structure
 *     await maybeAsync;
 *   }
 */
export const promiseLike = (
  value: unknown
): value is TypeOf<'promise' | 'thenable'> =>
  value instanceof Promise || thenable(value);
