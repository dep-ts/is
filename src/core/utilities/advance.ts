import * as advances from '@/core/advances/mod.ts';

/**
 * Type guard that checks whether a value matches any advanced JavaScript type.
 *
 * Includes: arrays, ArrayBuffer, Date, URL, Error, DataView, functions,
 * objects, records, promises, RegExp, Response, Request, Headers,
 * FormData, WebSocket, Blob, File, Map, and Set.
 *
 * @param value - The value to check
 * @returns `true` if the value is one of the supported advanced types, `false` otherwise
 * @example
 *   if (is.advance(x)) {
 *     // `x` is now known to be an advanced type
 *     console.log(x);
 *   }
 */
export const advance = (
  value: unknown
): value is
  | object
  | RegExp
  | Array<unknown>
  | ArrayBuffer
  | Date
  | URL
  | Error
  | DataView<ArrayBufferLike>
  | ((...args: unknown[]) => unknown)
  | Record<string, unknown>
  | Promise<unknown>
  | Response
  | Request
  | Headers
  | FormData
  | File
  | Blob
  | WebSocket
  | Map<unknown, unknown>
  | Set<unknown> =>
  advances.array(value) ||
  advances.arrayBuffer(value) ||
  advances.date(value) ||
  advances.url(value) ||
  advances.error(value) ||
  advances.dataView(value) ||
  advances.function(value) ||
  advances.object(value) ||
  advances.record(value) ||
  advances.promise(value) ||
  advances.regExp(value) ||
  advances.response(value) ||
  advances.request(value) ||
  advances.headers(value) ||
  advances.formData(value) ||
  advances.webSocket(value) ||
  advances.blob(value) ||
  advances.file(value) ||
  advances.map(value) ||
  advances.set(value);
