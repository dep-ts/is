import { assertEqual } from "@dep/assert";
import { webSocket } from "./websocket.ts";

Deno.test("Websocket", () => {
  const ws = new WebSocket("wss://echo.websocket.org");
  assertEqual(webSocket(ws), true);
  ws.close();
});
//deno test --allow-net --trace-leaks src/core/advances/websocket.test.ts
