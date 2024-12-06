import { FairDice } from "./FairDice";
import { Player } from "./Player";
import { RandomGeneratorFair } from "./RandomGeneratorFair";

export class Game {
  constructor(playerAmount: number) {}

  play() {
    const dice = new FairDice(6, new RandomGeneratorFair());
    return new Player(dice);
  }
}
