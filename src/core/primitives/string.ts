/** Checks if data is a string */
export const string = (data: unknown): data is string =>
  typeof data === 'string';
