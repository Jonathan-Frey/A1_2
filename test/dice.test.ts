import { Dice } from "../src/Dice";

describe("Dice", () => {
  it("should exist", () => {
    expect(Dice).toBeDefined();
  });

  it.each([0, 1, 2, 3])(
    "should throw an error if the number of faces passed to the constructor is less than 4",
    (input) => {
      expect(() => new Dice(input)).toThrow();
    }
  );

  it("should not throw an error if the number of faces passed to the constructor is 4 or more", () => {
    expect(() => new Dice(4)).not.toThrow();
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
  describe("size()", () => {
    it("should return a value", () => {
      const dice = new Dice();
      expect(dice.size()).toBeDefined();
    });

    it("should return the number of faces", () => {
      const dice = new Dice(8);
      const actual = dice.size();
      const expected = 8;
      expect(actual).toBe(expected);
    });
  });

  describe("roll()", () => {
    it("should be defined", () => {
      const dice = new Dice();
      expect(dice.roll).toBeDefined();
    });

    it("should return a value", () => {
      const dice = new Dice();
      expect(dice.roll()).toBeDefined();
    });

    it("should return a number", () => {
      const dice = new Dice();
      const actual = typeof dice.roll();
      const expected = "number";
      expect(actual).toBe(expected);
    });

    it("should return a number between 1 and the number of faces", () => {
      const dice = new Dice(6);
      const actual = dice.roll();
      expect(actual).toBeGreaterThanOrEqual(1);
      expect(actual).toBeLessThanOrEqual(6);
    });

    it("should return 3 when a mock random generator in passed to the constructor", () => {
      const mockRandomGenerator: RandomGenerator = {
        generate: () => 0.5,
      };
      const dice = new Dice(6);
      const actual = dice.roll();
      const expected = 3;
      expect(actual).toBe(expected);
    });
  });
});
