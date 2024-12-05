import { Dice } from "../src/Dice";
import { Player } from "../src/Player";

describe("Player", () => {
  let mockDice: Dice;

  beforeEach(() => {
    mockDice = {
      size: jest.fn().mockReturnValue(6),
      roll: jest.fn().mockReturnValue(2),
    };
  });
  it("should be defined", () => {
    expect(Player).toBeDefined();
  });

  it("should not throw an error if a dice is passed to the constructor", () => {
    expect(() => {
      new Player(mockDice);
    }).not.toThrow();
  });
});
