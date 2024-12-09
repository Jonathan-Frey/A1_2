import { ConsoleUi } from "../src/ConsoleUi";
import { ConsoleUiInput } from "../src/ConsoleUiInput";
import { stdin } from "node:process";

describe("ConsoleUi", () => {
  it("should be defined", () => {
    expect(ConsoleUi).toBeDefined();
  });

  it("should not throw an exception when instatiated", () => {
    expect(() => {
      new ConsoleUi();
    }).not.toThrow();
  });

  it("should take an implementation of UiInput as a costructor parameter", () => {
    const consoleUiInput = new ConsoleUiInput(stdin);
    expect(() => {
      new ConsoleUi(consoleUiInput);
    }).not.toThrow();
  });
});
