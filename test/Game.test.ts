import { Game } from "../src/Game";
import { Player } from "../src/Player";

describe("Game", () => {
  it("should be defined", () => {
    expect(Game).toBeDefined();
  });

  it("should not throw an error if a number of players is passed to the constructor", () => {
    const playerAmount = 1;
    expect(() => {
      new Game(playerAmount);
    }).not.toThrow();
  });

  describe("play()", () => {
    it("should be defined", () => {
      const sut = new Game(1);
      expect(sut.play).toBeDefined();
    });

    it("should return a player", () => {
      const sut = new Game(2);
      const actual = sut.play();
      expect(actual instanceof Player).toBeTruthy();
    });
  });
});
