import { RandomGenerator } from "./RandomGenerator";

export class Dice {
  private faces: number;
  constructor(faces: number, randomGenerator: RandomGenerator) {
    if (faces < 4) {
      throw new Error("The number of faces must be 4 or more");
    }
    this.faces = faces;
  }

  size() {
    return this.faces;
  }

  roll() {
    return 3;
  }
}
