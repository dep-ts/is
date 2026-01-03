import { assertEqual } from "@dep/assert";
import { map } from "./map.ts";

Deno.test("Map", () => {
  assertEqual(map(new Map()), true);
});
