import { Dice } from "../src/Dice";
import { RandomGenerator } from "../src/RandomGenerator";

describe("Dice", () => {
  let mockRandomGenerator: RandomGenerator;

  beforeEach(() => {
    mockRandomGenerator = {
      generate: jest.fn().mockReturnValue(1),
    };
  });

  it("should exist", () => {
    expect(Dice).toBeDefined();
  });

  it.each([0, 1, 2, 3])(
    "should throw an error if the number of faces passed to the constructor is less than 4",
    (input) => {
      expect(() => new Dice(input, mockRandomGenerator)).toThrow();
    }
  );

  it("should not throw an error if the number of faces passed to the constructor is 4 or more", () => {
    expect(() => new Dice(4, mockRandomGenerator)).not.toThrow();
  });

  it.each([6, 8])(
    "should create a dice with the specified number of faces",
    (input) => {
      const dice = new Dice(input, mockRandomGenerator);
      const actual = dice.size();
      const expected = input;
      expect(actual).toBe(expected);
    }
  );

  /*
  Testing the size method
  */
  describe("size()", () => {
    it("should return a value", () => {
      const dice = new Dice(6, mockRandomGenerator);
      expect(dice.size()).toBeDefined();
    });

    it("should return the number of faces", () => {
      const dice = new Dice(8, mockRandomGenerator);
      const actual = dice.size();
      const expected = 8;
      expect(actual).toBe(expected);
    });
  });

  describe("roll()", () => {
    it("should be defined", () => {
      const dice = new Dice(6, mockRandomGenerator);
      expect(dice.roll).toBeDefined();
    });

    it("should return a value", () => {
      const dice = new Dice(6, mockRandomGenerator);
      expect(dice.roll()).toBeDefined();
    });

    it("should return a number", () => {
      const dice = new Dice(6, mockRandomGenerator);
      const actual = typeof dice.roll();
      const expected = "number";
      expect(actual).toBe(expected);
    });

    it("should return a number between 1 and the number of faces", () => {
      const dice = new Dice(6, mockRandomGenerator);
      const actual = dice.roll();
      expect(actual).toBeGreaterThanOrEqual(1);
      expect(actual).toBeLessThanOrEqual(6);
    });

    it("should return lower median of faces when a mock random generator in passed to the constructor", () => {
      const dice = new Dice(6, mockRandomGenerator);
      const actual = dice.roll();
      const expected = 3;
      expect(actual).toBe(expected);
    });
  });
});
