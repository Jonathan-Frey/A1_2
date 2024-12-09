import { ConsoleUi } from "../src/ConsoleUi";

describe("ConsoleUi", () => {
  it("should be defined", () => {
    expect(ConsoleUi).toBeDefined();
  });

  it("should not throw an exception when instatiated", () => {
    expect(() => {
      new ConsoleUi();
    }).not.toThrow();
  });
});
