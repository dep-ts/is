/** Checks if data is a boolean */
export const boolean = (data: unknown): data is boolean =>
  typeof data === 'boolean';
