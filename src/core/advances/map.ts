/** Checks if data is a Map */
export const isMap = (data: unknown): data is Map<unknown, unknown> =>
  data instanceof Map;
