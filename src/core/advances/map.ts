import { TypeOf } from '@/core/utilities/types.ts';

/**
 * Type guard that checks if a value is an instance of `Map`.
 *
 * @param value - The value to check
 * @returns `true` if the value is a `Map`, `false` otherwise
 * @example
 *   if (is.map(maybe)) {
 *     // `maybe` is now narrowed to Map<unknown, unknown>
 *     console.log(maybe.size);
 *   }
 */
export const map = (value: unknown): value is TypeOf<'map'> =>
  value instanceof Map;
