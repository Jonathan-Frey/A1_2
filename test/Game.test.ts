import { Game } from "../src/Game";

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
});
