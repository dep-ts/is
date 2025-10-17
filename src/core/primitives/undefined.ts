/** Checks if data is undefined */
export const _undefined = (data: unknown): data is undefined =>
  typeof data === 'undefined';
