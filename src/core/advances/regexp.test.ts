import { assertEqual } from "@dep/assert";
import { regExp } from "./regexp.ts";

Deno.test("Regexp", () => {
  assertEqual(regExp(/x/), true);
});
