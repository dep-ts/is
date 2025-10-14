/** Checks if data is a boolean */
export const isBoolean = (data: unknown): data is boolean =>
  typeof data === 'boolean';
