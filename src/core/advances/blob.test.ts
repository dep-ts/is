import { assertEqual } from "@dep/assert";
import { blob } from "./blob.ts";

Deno.test("Blob", () => {
  assertEqual(blob(new Blob()), true);
});
