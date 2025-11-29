import { TypeOf } from '@/core/utilities/types.ts';

/**
 * Type guard that checks if a value is exactly `undefined`.
 *
 * @param value - The value to check
 * @returns `true` if the value is `undefined`, `false` otherwise
 * @example
 *   if (is.undefined(maybe)) {
 *     // `maybe` is narrowed to `undefined`
 *     console.log('Value is explicitly undefined');
 *   }
 */
const _undefined = (value: unknown): value is TypeOf<'undefined'> =>
  typeof value === 'undefined';

export { _undefined as undefined };
