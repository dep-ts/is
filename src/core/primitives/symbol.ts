/** Checks if data is a Symbol */
export const symbol = (data: unknown): data is symbol =>
  typeof data === 'symbol';
