import { Dice } from "../src/Dice";

describe("Dice", () => {
  it("should exist", () => {
    expect(Dice).toBeDefined();
  });

  it("should have a number of faces", () => {
    const dice = new Dice();
    expect(dice.size()).toBeDefined();
  });
});
