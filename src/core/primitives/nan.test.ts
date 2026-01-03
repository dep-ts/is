import { assertEqual } from "@dep/assert";
import { nan } from "./nan.ts";

Deno.test("Nan", () => {
  assertEqual(nan(NaN), true);
});
