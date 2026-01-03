/**
 * Type map for runtime type checking
 */
export type TypeMap = {
  string: string;
  boolean: boolean;
  number: number;
  bigint: bigint;
  symbol: symbol;
  undefined: undefined;
  nan: number;
  null: null;
  object: object;
  record: Record<PropertyKey, unknown>;
  function: (...args: unknown[]) => unknown;
  array: unknown[];
  set: Set<unknown>;
  map: Map<unknown, unknown>;
  date: Date;
  regexp: RegExp;
  promise: Promise<unknown>;
  thenable: PromiseLike<unknown>;
  error: Error;
  url: URL;
  blob: Blob;
  file: File;
  arraybuffer: ArrayBuffer;
  dataview: DataView;
  response: Response;
  request: Request;
  headers: Headers;
  formdata: FormData;
  websocket: WebSocket;
};

/**
 * Supported type names
 */
export type TypeName = keyof TypeMap;

/**
 * Extract type from type name
 * @template {TypeName} T
 */
export type TypeOf<T extends TypeName> = TypeMap[T];

/** JavaScript primitive types */
export type Primtive = TypeOf<
  "string" | "number" | "boolean" | "bigint" | "symbol" | "undefined" | "null"
>;

/** All non-primitive (object-like) types supported by the library */
export type Advance = TypeOf<
  | "object"
  | "record"
  | "function"
  | "array"
  | "set"
  | "map"
  | "date"
  | "regexp"
  | "promise"
  | "thenable"
  | "error"
  | "url"
  | "blob"
  | "file"
  | "arraybuffer"
  | "dataview"
  | "response"
  | "request"
  | "headers"
  | "formdata"
  | "websocket"
>;
