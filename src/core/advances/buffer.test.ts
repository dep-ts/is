import { assertEqual } from "@dep/assert";
import { arrayBuffer } from "./buffer.ts";

Deno.test("ArrayBuffer", () => {
  assertEqual(arrayBuffer(new ArrayBuffer()), true);
});
