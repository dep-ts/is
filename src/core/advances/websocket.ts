import { TypeOf } from "@/core/utilities/types.ts";

/**
 * Type guard that checks whether a value is a `WebSocket` instance.
 *
 * @param value - The value to check
 * @returns `true` if the value is a WebSocket, `false` otherwise
 * @example
 *   if (is.webSocket(ws)) {
 *     // `ws` is now a WebSocket
 *     ws.send("hello");
 *   }
 */
export const webSocket = (value: unknown): value is TypeOf<"websocket"> =>
  value instanceof WebSocket;
