/**
 * Type guard that checks if a value is an instance of `Headers`.
 *
 * Used with `fetch` API requests and responses.
 *
 * @param value - The value to check
 * @returns `true` if the value is a `Headers` instance, `false` otherwise
 * @example
 *   if (is.headers(maybe)) {
 *     // `maybe` is now narrowed to `Headers`
 *     console.log(maybe.get('content-type'));
 *   }
 */
export const headers = (value: unknown): value is Headers =>
  value instanceof Headers;
