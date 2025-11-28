/**
 * Type guard that checks if a value is exactly `null`.
 *
 * @param value - The value to check
 * @returns `true` if the value is `null`, `false` otherwise
 * @example
 *   if (is.null(maybe)) {
 *     // `maybe` is narrowed to `null`
 *     console.log('Received null');
 *   }
 */
const _null = (value: unknown): value is null => value === null;

export { _null as null };
