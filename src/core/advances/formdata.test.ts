import { assertEqual } from "@dep/assert";
import { formData } from "./formdata.ts";

Deno.test("Formdata", () => {
  assertEqual(formData(new FormData()), true);
});
