import { Dice } from "./Dice";
import { RandomGenerator } from "./RandomGenerator";

export class FairDice implements Dice {
  private faces: number;
  private randomGenerator: RandomGenerator;
  constructor(faces: number, randomGenerator: RandomGenerator) {
    if (faces < 4) {
      throw new Error("The number of faces must be 4 or more");
    }

    if (faces % 2 !== 0) {
      throw Error();
    }
    this.faces = faces;
    this.randomGenerator = randomGenerator;
  }

  size() {
    return this.faces;
  }

  roll() {
    return Math.floor(this.randomGenerator.generate() * this.faces + 1);
  }
}
