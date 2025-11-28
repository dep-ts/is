/**
 * Type guard that checks whether a value is a `URL` instance.
 *
 * @param value - The value to check
 * @returns `true` if the value is a URL, `false` otherwise
 * @example
 *   if (is.url(input)) {
 *     // `input` is now a URL
 *     console.log(input.hostname);
 *   }
 */
export const url = (value: unknown): value is URL => value instanceof URL;
