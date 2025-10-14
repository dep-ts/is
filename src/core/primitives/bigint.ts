/** Checks if data is a BigInt */
export const isBigInt = (data: unknown): data is bigint =>
  typeof data === 'bigint';
