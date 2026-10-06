import { describe, expect, it } from "vitest";
import { QUICK_REPLY_HREF } from "@/lib/contact";

describe("Quick reply email", () => {
  it("addresses messages to the requested email", () => {
    expect(QUICK_REPLY_HREF).toBe("mailto:calltoleapofficial01@gmail.com");
  });
});