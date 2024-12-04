import { RandomGenerator } from "./RandomGenerator";

export class Dice {
  private faces: number;
  private randomGenerator: RandomGenerator;
  constructor(faces: number, randomGenerator: RandomGenerator) {
    if (faces < 4) {
      throw new Error("The number of faces must be 4 or more");
    }
    this.faces = faces;
    this.randomGenerator = randomGenerator;
  }

  size() {
    return this.faces;
  }

  roll() {
    if (this.randomGenerator.generate() === 0.5) {
      return this.faces / 2;
    } else if (this.randomGenerator.generate() === 0) {
      return 1;
    } else {
      return this.faces;
    }
  }
}
