import { Dice } from "../src/Dice";
import { RandomGenerator } from "../src/RandomGenerator";

describe("Dice", () => {
  let mockRandomGenerator: RandomGenerator;

  beforeEach(() => {
    mockRandomGenerator = {
      generate: jest.fn().mockReturnValue(0.499),
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
      const sut = new Dice(input, mockRandomGenerator);
      const actual = sut.size();
      const expected = input;
      expect(actual).toBe(expected);
    }
  );

  it.each([5, 7])(
    "should throw an error if the number of faces passed to the constructor is odd",
    (input) => {
      expect(() => new Dice(input, mockRandomGenerator)).toThrow();
    }
  );

  it("should throw an error if the number of faces passed to the constructor is not an integer", () => {
    expect(() => new Dice(5.5, mockRandomGenerator)).toThrow();
  });

  /*
  Testing the size method
  */
  describe("size()", () => {
    it("should return a value", () => {
      const sut = new Dice(6, mockRandomGenerator);
      const actual = sut.size();
      expect(actual).toBeDefined();
    });

    it("should return the number of faces", () => {
      const sut = new Dice(8, mockRandomGenerator);
      const actual = sut.size();
      const expected = 8;
      expect(actual).toBe(expected);
    });
  });

  describe("roll()", () => {
    it("should be defined", () => {
      const sut = new Dice(6, mockRandomGenerator);
      const actual = sut.roll;
      expect(actual).toBeDefined();
    });

    it("should return a value", () => {
      const sut = new Dice(6, mockRandomGenerator);
      const actual = sut.roll();
      expect(actual).toBeDefined();
    });

    it("should return a number", () => {
      const sut = new Dice(6, mockRandomGenerator);
      const actual = typeof sut.roll();
      const expected = "number";
      expect(actual).toBe(expected);
    });

    it("should return a number between 1 and the number of faces", () => {
      const sut = new Dice(6, mockRandomGenerator);
      const actual = sut.roll();
      expect(actual).toBeGreaterThanOrEqual(1);
      expect(actual).toBeLessThanOrEqual(6);
    });

    it("should return lower median of faces when a mock random generator that returns 0.499 is passed to the constructor", () => {
      const sut = new Dice(6, mockRandomGenerator);
      const actual = sut.roll();
      const expected = 3;
      expect(actual).toBe(expected);
    });

    it("should return higher median of faces when a mock random generator that returns 0.5 is passed to the constructor", () => {
      const mockRandomGeneratorMiddle: RandomGenerator = {
        generate: jest.fn().mockReturnValue(0.5),
      };
      const sut = new Dice(6, mockRandomGeneratorMiddle);
      const actual = sut.roll();
      const expected = 4;
      expect(actual).toBe(expected);
    });

    it("should return value equal to number of faces when a mock random generator that returns 1 in passed to the constructor", () => {
      const mockRandomGeneratorHigh: RandomGenerator = {
        generate: jest.fn().mockReturnValue(0.999),
      };
      const sut = new Dice(8, mockRandomGeneratorHigh);
      const actual = sut.roll();
      const expected = 8;
      expect(actual).toBe(expected);
    });

    it("should return 1 when a mock random generator that returns 0 in passed to the constructor", () => {
      const mockRandomGeneratorLow: RandomGenerator = {
        generate: jest.fn().mockReturnValue(0),
      };
      const sut = new Dice(8, mockRandomGeneratorLow);
      const actual = sut.roll();
      const expected = 1;
      expect(actual).toBe(expected);
    });
  });
});
