import { TypeOf } from '@/core/utilities/types.ts';

/**
 * Type guard that checks if a value is the `NaN` number (not any number).
 *
 * Narrows the type to `number` (specifically the NaN value) when returning `true`.
 * Note: due to JavaScript limitations, the narrowed type is `number`, but the value is guaranteed to be `NaN`.
 *
 * @param value - The value to check
 * @returns `true` if the value is `NaN`, `false` otherwise
 * @example
 *   if (is.nan(maybe)) {
 *     // `maybe` is narrowed to `number` and is exactly NaN
 *     console.log('ValueIsNaN(); // safe to handle as NaN
 *   }
 */
export const nan = (value: unknown): value is TypeOf<'nan'> =>
  typeof value === 'number' && Number.isNaN(value);
