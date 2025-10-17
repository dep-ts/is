/** Checks if data is a BigInt */
export const bigint = (data: unknown): data is bigint =>
  typeof data === 'bigint';
