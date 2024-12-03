import { Dice } from "../src/Dice";

describe("Dice", () => {
  it("should exist", () => {
    expect(Dice).toBeDefined();
  });

  it("should throw an error if faces are less than 4", () => {
    expect(() => new Dice(3)).toThrow();
  });

  /*
  Testing the size method
  */
  describe("size", () => {
    it("should have a number of faces", () => {
      const dice = new Dice();
      expect(dice.size()).toBeDefined();
    });

    it("should receive number of faces in constructor", () => {
      const dice = new Dice(6);
      const actual = dice.size();
      const expected = 6;
      expect(actual).toBe(expected);
    });

    it("should receive number of faces in constructor", () => {
      const dice = new Dice(8);
      const actual = dice.size();
      const expected = 8;
      expect(actual).toBe(expected);
    });

    it("should default to 6 faces", () => {
      const dice = new Dice();
      const actual = dice.size();
      const expected = 6;
      expect(actual).toBe(expected);
    });
  });
});
