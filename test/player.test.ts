import { Player } from "./Player";

describe("Player", () => {
  let mockPlayer: Player;

  beforeEach(() => {
    mockPlayer = {};
  });
  it("should be defined", () => {
    expect(Player).toBeDefined();
  });

  it("should not throw an error if a dice is passed to the constructor", () => {
    expect(new Player(mockPlayer)).not.toThrow();
  });
});
