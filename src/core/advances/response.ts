/** Checks if data is a Response object */
export const response = (data: unknown): data is Response =>
  data instanceof Response;
