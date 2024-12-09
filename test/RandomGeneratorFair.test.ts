import { RandomGeneratorFair } from "../src/RandomGeneratorFair";

describe("RandomGeneratorFair", () => {
  it("should be defined", () => {
    expect(RandomGeneratorFair).toBeDefined();
  });

  it("should not throw an error when instantiated", () => {
    expect(() => {
      new RandomGeneratorFair();
    }).not.toThrow();
  });

  describe("generate()", () => {
    it("should be defined", () => {
      const sut = new RandomGeneratorFair();
      expect(sut.generate).toBeDefined();
    });

    it("should return a number", () => {
      const sut = new RandomGeneratorFair();
      const actual = sut.generate();
      expect(typeof actual).toBe("number");
    });
  });
});
