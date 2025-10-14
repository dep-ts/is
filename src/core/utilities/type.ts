import { isArray } from '@/core/advances/array.ts';
import { isDate } from '@/core/advances/date.ts';
import { isError } from '@/core/advances/error.ts';
import { isFunction } from '@/core/advances/function.ts';
import { isMap } from '@/core/advances/map.ts';
import { isObject } from '@/core/advances/object.ts';
import { isPromise } from '@/core/advances/promise.ts';
import { isRegExp } from '@/core/advances/regexp.ts';
import { isResponse } from '@/core/advances/response.ts';
import { isSet } from '@/core/advances/set.ts';
import { isBigInt } from '@/core/primitives/bigint.ts';
import { isBoolean } from '@/core/primitives/boolean.ts';
import { isNaN } from '@/core/primitives/nan.ts';
import { isNull } from '@/core/primitives/null.ts';
import { isNumber } from '@/core/primitives/number.ts';
import { isString } from '@/core/primitives/string.ts';
import { isSymbol } from '@/core/primitives/symbol.ts';
import { isUndefined } from '@/core/primitives/undefined.ts';

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
  if (isNaN(data)) return 'NaN';
  if (isString(data)) return 'string';
  if (isBoolean(data)) return 'boolean';
  if (isNumber(data)) return 'number';
  if (isBigInt(data)) return 'bigint';
  if (isSymbol(data)) return 'symbol';
  if (isUndefined(data)) return 'undefined';
  if (isSet(data)) return 'set';
  if (isMap(data)) return 'map';
  if (isDate(data)) return 'date';
  if (isNull(data)) return 'null';
  if (isArray(data)) return 'array';
  if (isObject(data)) return 'object';
  if (isFunction(data)) return 'function';
  if (isError(data)) return 'error';
  if (isPromise(data)) return 'promise';
  if (isRegExp(data)) return 'regexp';
  if (isResponse(data)) return 'response';

  return 'unknown';
};
