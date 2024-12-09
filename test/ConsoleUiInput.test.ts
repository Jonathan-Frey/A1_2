import { ConsoleUiInput } from "../src/ConsoleUiInput";
import { stdin } from "node:process";

describe("ConsoleUiInput()", () => {
  it("should be defined", () => {
    expect(ConsoleUiInput).toBeDefined();
  });

  it("should not thor an exception when instatiated", () => {
    expect(() => new ConsoleUiInput(stdin)).not.toThrow();
  });

  describe("requestInput()", () => {
    it("should be defined", () => {
      const sut = new ConsoleUiInput(stdin);
      expect(sut.requestInput).toBeDefined();
    });
  });
});
