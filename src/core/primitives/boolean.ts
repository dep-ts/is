/**
 * Type guard that checks if a value is a primitive `boolean`.
 *
 * @param value - The value to check
 * @returns `true` if the value is a boolean (`true`true` or `false`), `false` otherwise
 * @example
 *   if (is.boolean(maybe)) {
 *     // `maybe` is now narrowed to `boolean`
 *     console.log(maybe ? 'yes' : 'no');
 *   }
 */
export const boolean = (value: unknown): value is boolean =>
  typeof value === 'boolean';
