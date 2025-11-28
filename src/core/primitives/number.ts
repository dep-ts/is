/**
 * Type guard that checks if a value is a value is a finite number (excludes `NaN` and `±Infinity`).
 *
 * Narrows the type to `number` only when the value is a safe, finite numeric value.
 *
 * @param value - The value to check
 * @returns `true` if the value is a finite number, `false` otherwise
 * @example
 *   if (is.number(maybe)) {
 *     // `maybe` is now safely typed as a finite `number`
 *     console.log(maybe + 10); // no risk of NaN or Infinity
 *   }
 */
export const number = (value: unknown): value is number =>
  typeof value === 'number' && Number.isFinite(value);
