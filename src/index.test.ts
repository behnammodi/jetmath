import { percent } from "./index";

describe("Test all math method", () => {
  test("percent", () => {
    expect(percent(50, 200)).toBe(25);
    expect(percent(200, 50)).toBe(400);
  });
});


