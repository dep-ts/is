import * as checkers from './checkers.ts';
import { TypeName } from './types.ts';

/**
 * Determines the specific runtime type of a value.
 *
 * Returns a string literal describing the value’s category, covering both
 * primitive types and advanced/built-in objects.
 *
 * @param value - The value to inspect
 * @returns A string literal representing the detected type
 * @example
 *   const kind = is.typeOf(x);
 *   // kind might be "string", "array", "date", "map", etc.
 */
export const typeOf = (value: unknown): TypeName => {
  if (checkers.null(value)) return 'null';
  if (checkers.nan(value)) return 'nan';
  if (checkers.string(value)) return 'string';
  if (checkers.boolean(value)) return 'boolean';
  if (checkers.bigint(value)) return 'bigint';
  if (checkers.number(value)) return 'number';
  if (checkers.symbol(value)) return 'symbol';
  if (checkers.undefined(value)) return 'undefined';
  if (checkers.thenable(value)) return 'thenable';
  if (checkers.record(value)) return 'record';
  if (checkers.array(value)) return 'array';
  if (checkers.arrayBuffer(value)) return 'arraybuffer';
  if (checkers.date(value)) return 'date';
  if (checkers.dataView(value)) return 'dataview';
  if (checkers.error(value)) return 'error';
  if (checkers.blob(value)) return 'blob';
  if (checkers.file(value)) return 'file';
  if (checkers.function(value)) return 'function';
  if (checkers.url(value)) return 'url';
  if (checkers.map(value)) return 'map';
  if (checkers.set(value)) return 'set';
  if (checkers.regExp(value)) return 'regexp';
  if (checkers.promise(value)) return 'promise';
  if (checkers.response(value)) return 'response';
  if (checkers.request(value)) return 'request';
  if (checkers.headers(value)) return 'headers';
  if (checkers.formData(value)) return 'formdata';
  if (checkers.webSocket(value)) return 'websocket';
  if (checkers.object(value)) return 'object'; // must be in the last position

  return 'object';
};
