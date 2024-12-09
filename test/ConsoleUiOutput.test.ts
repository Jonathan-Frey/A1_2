import { ConsoleUiOutput } from "../src/ConsoleUiOutput";
describe("ConsoleUiOutput", () => {
  it("should be defined", () => {
    expect(ConsoleUiOutput).toBeDefined();
  });

  it("should not throw an exception when instantiated", () => {
    expect(() => new ConsoleUiOutput()).not.toThrow();
  });

  describe("display()", () => {
    const sut = new ConsoleUiOutput();
    const consoleSpy = jest.spyOn(console, "log").mockImplementation();

    afterEach(() => {
      consoleSpy.mockClear();
    });

    afterAll(() => {
      consoleSpy.mockRestore();
    });

    it("should call console.log with the correct string", () => {
      const testString = "Hello, World!";
      sut.display(testString);
      expect(consoleSpy).toHaveBeenCalledWith(testString);
    });
  });
});
