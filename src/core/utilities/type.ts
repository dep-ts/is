import * as primitives from '@/core/primitives/mod.ts';
import * as advances from '@/core/advances/mod.ts';

/**
 * Union of all possible type identifiers returned by `typeOf()`.
 */
export type TypeOf =
  | 'string'
  | 'boolean'
  | 'number'
  | 'bigint'
  | 'symbol'
  | 'undefined'
  | 'nan'
  | 'finite'
  | 'integer'
  | 'null'
  | 'object'
  | 'record'
  | 'function'
  | 'array'
  | 'set'
  | 'map'
  | 'date'
  | 'regexp'
  | 'promise'
  | 'error'
  | 'url'
  | 'blob'
  | 'file'
  | 'arraybuffer'
  | 'dataview'
  | 'response'
  | 'request'
  | 'headers'
  | 'formdata'
  | 'websocket';

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
export const typeOf = (value: unknown): TypeOf => {
  if (primitives.null(value)) return 'null';
  if (primitives.nan(value)) return 'nan';
  if (primitives.string(value)) return 'string';
  if (primitives.boolean(value)) return 'boolean';
  if (primitives.bigint(value)) return 'bigint';
  if (primitives.number(value)) return 'number';
  if (primitives.symbol(value)) return 'symbol';
  if (primitives.undefined(value)) return 'undefined';
  if (advances.record(value)) return 'record';
  if (advances.array(value)) return 'array';
  if (advances.arrayBuffer(value)) return 'arraybuffer';
  if (advances.date(value)) return 'date';
  if (advances.dataView(value)) return 'dataview';
  if (advances.error(value)) return 'error';
  if (advances.blob(value)) return 'blob';
  if (advances.file(value)) return 'file';
  if (advances.function(value)) return 'function';
  if (advances.url(value)) return 'url';
  if (advances.map(value)) return 'map';
  if (advances.set(value)) return 'set';
  if (advances.regExp(value)) return 'regexp';
  if (advances.promise(value)) return 'promise';
  if (advances.response(value)) return 'response';
  if (advances.request(value)) return 'request';
  if (advances.headers(value)) return 'headers';
  if (advances.formData(value)) return 'formdata';
  if (advances.webSocket(value)) return 'websocket';
  if (advances.object(value)) return 'object'; // must be in the last position

  return 'object';
};
