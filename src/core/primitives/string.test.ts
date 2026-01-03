import { assertEqual } from "@dep/assert";
import { string } from "./string.ts";

Deno.test("String", () => {
  assertEqual(string("Hello"), true);
});
