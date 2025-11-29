import { TypeOf } from '@/core/utilities/types.ts';

/**
 * Type guard that checks if a value is a Promise.
 *
 * @param value - The value to check
 * @returns `true` if the value is a `Promise`, `false` otherwise
 * @example
 *   if (is.promise(maybe)) {
 *     await maybe; // TypeScript knows it's a Promise
 *   }
 */
export const promise = (value: unknown): value is TypeOf<'promise'> =>
  value instanceof Promise;
