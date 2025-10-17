import { array } from '@/core/advances/array.ts';
import { date } from '@/core/advances/date.ts';
import { url } from '@/core/advances/url.ts';
import { error } from '@/core/advances/error.ts';
import { _function } from '@/core/advances/function.ts';
import { map } from '@/core/advances/map.ts';
import { object } from '@/core/advances/object.ts';
import { promise } from '@/core/advances/promise.ts';
import { regExp } from '@/core/advances/regexp.ts';
import { response } from '@/core/advances/response.ts';
import { set } from '@/core/advances/set.ts';
import { bigint } from '@/core/primitives/bigint.ts';
import { boolean } from '@/core/primitives/boolean.ts';
import { nan } from '@/core/primitives/nan.ts';
import { _null } from '@/core/primitives/null.ts';
import { number } from '@/core/primitives/number.ts';
import { string } from '@/core/primitives/string.ts';
import { symbol } from '@/core/primitives/symbol.ts';
import { _undefined } from '@/core/primitives/undefined.ts';

export type TypeOf =
  | 'NaN'
  | 'string'
  | 'boolean'
  | 'number'
  | 'bigint'
  | 'symbol'
  | 'undefined'
  | 'set'
  | 'map'
  | 'url'
  | 'date'
  | 'null'
  | 'array'
  | 'object'
  | 'function'
  | 'error'
  | 'promise'
  | 'regexp'
  | 'response'
  | 'unknown';

/**
 * Enhanced typeof that returns specific type names
 * Distinguishes between array, null, date, promise, and other complex types
 * @returns One of: 'string', 'number', 'boolean', 'bigint', 'symbol',
 *          'undefined', 'null', 'array', 'object', 'function', 'date',
 *          'set', 'map', 'promise', 'regexp', 'error', 'response', 'NaN'
 */
export const typeOf = (data: unknown): TypeOf => {
  if (nan(data)) return 'NaN';
  if (string(data)) return 'string';
  if (boolean(data)) return 'boolean';
  if (number(data)) return 'number';
  if (bigint(data)) return 'bigint';
  if (symbol(data)) return 'symbol';
  if (_undefined(data)) return 'undefined';
  if (set(data)) return 'set';
  if (map(data)) return 'map';
  if (url(data)) return 'url';
  if (date(data)) return 'date';
  if (_null(data)) return 'null';
  if (array(data)) return 'array';
  if (object(data)) return 'object';
  if (_function(data)) return 'function';
  if (error(data)) return 'error';
  if (promise(data)) return 'promise';
  if (regExp(data)) return 'regexp';
  if (response(data)) return 'response';

  return 'unknown';
};
