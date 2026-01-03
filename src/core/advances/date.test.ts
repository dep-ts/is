import { assertEqual } from "@dep/assert";
import { date } from "./date.ts";

Deno.test("Date", () => {
  assertEqual(date(new Date()), true);
});
