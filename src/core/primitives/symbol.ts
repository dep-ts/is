/** Checks if data is a Symbol */
export const isSymbol = (data: unknown): data is symbol =>
  typeof data === 'symbol';
