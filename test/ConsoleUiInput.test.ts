import { ConsoleUiInput } from "../src/ConsoleUiInput";

describe("ConsoleUiInput()", () => {
  it("should be defined", () => {
    expect(ConsoleUiInput).toBeDefined();
  });

  it("should not thor an exception when instatiated", () => {
    expect(() => new ConsoleUiInput()).not.toThrow();
  });

  describe("requestInput()", () => {
    it("should be defined", () => {
      const sut = new ConsoleUiInput();
      expect(sut.requestInput).toBeDefined();
    });
  });
});
