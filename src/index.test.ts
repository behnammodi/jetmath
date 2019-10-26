import { percent, baseLog } from "./index";

describe("Test all math method", () => {
  test("percent", () => {
    expect(percent(50, 200)).toBe(25);
    expect(percent(200, 50)).toBe(400);
  });

  test("base log", () => {
    expect(baseLog(2, 8)).toBe(3);
    expect(baseLog(2, 4)).toBe(2);
    expect(baseLog(2, 2)).toBe(1);
    expect(baseLog(5, 625)).toBe(4);    
  });
});
