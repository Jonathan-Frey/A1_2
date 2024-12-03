import { Dice } from "../src/Dice";

describe("Dice", () => {
  it("should exist", () => {
    expect(Dice).toBeDefined();
  });

  it("should throw an error if the number of faces passed to the constructor is less than 4", () => {
    expect(() => new Dice(3)).toThrow();
  });

  it.each([6, 8])(
    "should create a dice with the specified number of faces",
    (input) => {
      const dice = new Dice(input);
      const actual = dice.size();
      const expected = input;
      expect(actual).toBe(expected);
    }
  );

  it("should default to 6 faces if no number of faces is passed", () => {
    const dice = new Dice();
    const actual = dice.size();
    const expected = 6;
    expect(actual).toBe(expected);
  });

  /*
  Testing the size method
  */
  describe("size", () => {
    it("should return a value", () => {
      const dice = new Dice();
      expect(dice.size()).toBeDefined();
    });
  });
});
