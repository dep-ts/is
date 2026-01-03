import { assertEqual } from "@dep/assert";
import { symbol } from "./symbol.ts";

Deno.test("Symbol", () => {
  assertEqual(symbol(Symbol("$")), true);
});
