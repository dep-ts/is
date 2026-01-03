import { assertEqual } from "@dep/assert";
import { dataView } from "./data.ts";

Deno.test("DataView", () => {
  assertEqual(dataView(new DataView(new ArrayBuffer(8))), true);
});
