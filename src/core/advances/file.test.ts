import { assertEqual } from "@dep/assert";
import { file } from "./file.ts";

Deno.test("File", () => {
  assertEqual(file(new File(["abc"], "x.txt")), true);
});
