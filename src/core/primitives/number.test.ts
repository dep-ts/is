import { assertEqual } from "@dep/assert";
import { number } from "./number.ts";

Deno.test("Number", () => {
  assertEqual(number(23), true);
});
