import { assertEqual } from "@dep/assert";
import { record } from "./record.ts";

Deno.test("Record", () => {
  assertEqual(record({ a: 1 }), true);
});
