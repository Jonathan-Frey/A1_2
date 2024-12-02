import { Dice } from "../src/Dice";

describe("Dice", () => {
  it("should exist", () => {
    expect(Dice).toBeDefined();
  });

  it("should have a number of faces", () => {
    const dice = new Dice();
    expect(dice.size()).toBeDefined();
  });

  it("should receive number of faces in constructor", ()    => {
    const dice = new Dice(6);
    expect(dice.size()).toBe(6);
  }
});
