import { assertEqual } from "@dep/assert";
import { boolean } from "./boolean.ts";

Deno.test("Boolean", () => {
  assertEqual(boolean(true), true);
});
