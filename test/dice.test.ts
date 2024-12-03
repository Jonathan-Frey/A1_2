import { Dice } from "../src/Dice";

describe("Dice", () => {
  it("should exist", () => {
    expect(Dice).toBeDefined();
  });

  describe("size", () => {
    it("should have a number of faces", () => {
      const dice = new Dice();
      expect(dice.size()).toBeDefined();
    });

    it("should receive number of faces in constructor", () => {
      const dice = new Dice(6);
      expect(dice.size()).toBe(6);
    });

    it("should receive number of faces in constructor", () => {
      const dice = new Dice(8);
      expect(dice.size()).toBe(8);
    });

    it("should default to 6 faces", () => {
      const dice = new Dice();
      expect(dice.size()).toBe(6);
    });
  });
});
