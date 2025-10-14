/** Checks if data is undefined */
export const isUndefined = (data: unknown): data is undefined =>
  typeof data === 'undefined';
