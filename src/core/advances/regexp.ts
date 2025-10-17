/** Checks if data is a RegExp */
export const regExp = (data: unknown): data is RegExp => data instanceof RegExp;
