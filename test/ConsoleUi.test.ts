import { ConsoleUi } from "../src/ConsoleUi";
import { ConsoleUiInput } from "../src/ConsoleUiInput";
import { stdin } from "node:process";
import { ConsoleUiOutput } from "../src/ConsoleUiOutput";

describe("ConsoleUi", () => {
  it("should be defined", () => {
    expect(ConsoleUi).toBeDefined();
  });

  it("should take an implementation of UiInput and UiOutput as a costructor parameters", () => {
    const consoleUiInput = new ConsoleUiInput(stdin);
    const consoleUiOutput = new ConsoleUiOutput();
    expect(() => {
      new ConsoleUi(consoleUiInput, consoleUiOutput);
    }).not.toThrow();
  });
});
