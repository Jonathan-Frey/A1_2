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

  describe("hit()", () => {
    it("should be defined", () => {
      const sut = new Player(mockDice);
      expect(sut.hit).toBeDefined();
    });

    it.each([1, 2, 3, 4, 5, 6])(
      "should add points equal to the dice roll to the players points",
      (input) => {
        mockDice.roll = jest.fn().mockReturnValue(input);
        const sut = new Player(mockDice);
        const expected = input;
        sut.hit();
        const actual = sut.points;
        expect(actual).toBe(expected);
      }
    );
  });
});
