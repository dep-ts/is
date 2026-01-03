import { assertEqual } from "@dep/assert";
import { null as null_ } from "./null.ts";

Deno.test("Null", () => {
  assertEqual(null_(null), true);
});
