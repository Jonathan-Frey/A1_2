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

  // it("should take an implementation of UiInput as a costructor parameter", () => {
  //   const consoleUiInput = new ConsoleUiInput();
  //   expect(() => {
  //     new ConsoleUi();
  //   }).not.toThrow();
  // });
});
