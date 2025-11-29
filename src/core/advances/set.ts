import { TypeOf } from '@/core/utilities/types.ts';

/**
 * Type guard that checks if a value is an instance of `Set`.
 *
 * @param value - The value to check
 * @returns `true` if the value is a `Set`, `false` otherwise
 * @example
 *   if (is.set(maybe)) {
 *     // `maybe` is now narrowed to Set<unknown>
 *     console.log(maybe.size);
 *   }
 */
export const set = (value: unknown): value is TypeOf<'set'> =>
  value instanceof Set;
