/** Checks if data is a RegExp */
export const isRegExp = (data: unknown): data is RegExp =>
  data instanceof RegExp;
