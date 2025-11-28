/**
 * Type guard that checks if a value is a primitive `string`.
 *
 * @param value - The value to check
 * @returns `true` if the value is a string, `false` otherwise
 * @example
 *   if (is.string(maybe)) {
 *     // `maybe` is now narrowed to `string`
 *     console.log(maybe.toUpperCase());
 *   }
 */
export const string = (value: unknown): value is string =>
  typeof value === 'string';
