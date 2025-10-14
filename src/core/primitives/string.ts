/** Checks if data is a string */
export const isString = (data: unknown): data is string =>
  typeof data === 'string';
