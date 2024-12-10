import { ConsoleUi } from "../src/ConsoleUi";
import { ConsoleUiInput } from "../src/ConsoleUiInput";
import { stdin } from "node:process";
import { ConsoleUiOutput } from "../src/ConsoleUiOutput";
import { UiOutput } from "../src/UiOutput";

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

  describe("showWelcome()", () => {
    it("should call the display method of the UiOutput with the provided string", () => {
      const mockUiOutput: UiOutput = {
        display: jest.fn(),
      };
      const consoleUiInput = new ConsoleUiInput(stdin);
      const consoleUi = new ConsoleUi(consoleUiInput, mockUiOutput);

      const input = "Hello, World!";

      consoleUi.showWelcome(input);

      expect(mockUiOutput.display).toHaveBeenCalledWith(input);
    });
  });
});
