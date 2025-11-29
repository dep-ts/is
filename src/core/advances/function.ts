import { TypeOf } from '@/core/utilities/types.ts';

/**
 * Type guard that checks if a value is a function.
 *
 * @param value - The value to check
 * @returns `true` if the value is a function, `false` otherwise
 * @example
 *   if (is.function(maybe)) {
 *     // `maybe` is now narrowed to a function
 *     maybe(); // safe to call
 *   }
 */
const function_ = (value: unknown): value is TypeOf<'function'> =>
  typeof value === 'function';

export { function_ as function };
